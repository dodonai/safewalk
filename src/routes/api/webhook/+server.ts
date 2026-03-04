import { json, error } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import { getStripe } from '$lib/stripe';
import { env } from '$env/dynamic/private';
import { env as pubEnv } from '$env/dynamic/public';
import { getSupabaseAdmin } from '$lib/supabase-admin';
import { Resend } from 'resend';

export const POST: RequestHandler = async ({ request }) => {
	const body = await request.text();
	const signature = request.headers.get('stripe-signature');

	if (!signature) {
		throw error(400, 'Missing stripe-signature header');
	}

	let event;
	try {
		event = getStripe().webhooks.constructEvent(body, signature, env.STRIPE_WEBHOOK_SECRET || '');
	} catch (err) {
		console.error('Webhook signature verification failed:', err);
		throw error(400, 'Invalid signature');
	}

	if (event.type === 'checkout.session.completed') {
		const session = event.data.object;
		const metadata = session.metadata || {};

		const { data: customer, error: customerError } = await getSupabaseAdmin()
			.from('customers')
			.upsert(
				{
					email: session.customer_email,
					business_name: metadata.business_name,
					business_address: metadata.business_address,
					business_city: metadata.business_city,
					business_state: metadata.business_state,
					business_zip: metadata.business_zip,
					contact_name: metadata.contact_name,
					phone: metadata.phone || null
				},
				{ onConflict: 'email' }
			)
			.select()
			.single();

		if (customerError) {
			console.error('Failed to create customer:', customerError);
			throw error(500, 'Failed to create customer');
		}

		const { data: purchase, error: purchaseError } = await getSupabaseAdmin()
			.from('purchases')
			.insert({
				customer_id: customer.id,
				stripe_session_id: session.id,
				stripe_customer_id: session.customer || null,
				tier: metadata.tier,
				amount_cents: session.amount_total,
				status: 'completed'
			})
			.select()
			.single();

		if (purchaseError) {
			console.error('Failed to create purchase:', purchaseError);
			throw error(500, 'Failed to create purchase');
		}

		// Trigger document generation
		try {
			const docResponse = await fetch(`${env.DOC_API_URL}/generate`, {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({
					purchase_id: purchase.id,
					tier: metadata.tier,
					business_name: metadata.business_name,
					business_address: metadata.business_address,
					business_city: metadata.business_city,
					business_state: metadata.business_state,
					business_zip: metadata.business_zip,
					contact_name: metadata.contact_name
				})
			});

			if (!docResponse.ok) {
				console.error('Document generation failed:', await docResponse.text());
			}
		} catch (err) {
			console.error('Document generation service unavailable:', err);
		}

		// Send confirmation email
		const siteUrl = pubEnv.PUBLIC_SITE_URL || 'http://localhost:5173';
		const dashboardUrl = `${siteUrl}/dashboard?email=${encodeURIComponent(session.customer_email || '')}`;
		const resend = new Resend(env.RESEND_API_KEY);

		await resend.emails.send({
			from: env.FROM_EMAIL || 'orders@safewalkpolicy.com',
			to: session.customer_email || '',
			subject: 'Your SafeWalk Compliance Package is Ready',
			html: `
				<div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
					<h1 style="color: #1e3a5f;">Thank You for Your Purchase!</h1>
					<p>Hi ${metadata.contact_name},</p>
					<p>Your SafeWalk snow & ice compliance package for <strong>${metadata.business_name}</strong> is being prepared.</p>
					<p>You'll receive your documents within 24 hours. In the meantime, you can check your dashboard:</p>
					<p style="text-align: center; margin: 32px 0;">
						<a href="${dashboardUrl}" style="background-color: #f59e0b; color: #0f1f33; padding: 12px 24px; text-decoration: none; border-radius: 8px; font-weight: 600;">
							View My Documents
						</a>
					</p>
					<p style="color: #666; font-size: 14px;">
						If you have any questions, reply to this email or contact us at hello@safewalkpolicy.com.
					</p>
					<hr style="border: none; border-top: 1px solid #eee; margin: 24px 0;" />
					<p style="color: #999; font-size: 12px;">SafeWalk — Professional snow & ice compliance for small businesses.</p>
				</div>
			`
		});
	}

	return json({ received: true });
};
