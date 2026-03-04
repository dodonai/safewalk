import { json, error } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import { getStripe } from '$lib/stripe';
import { env } from '$env/dynamic/private';
import { env as pubEnv } from '$env/dynamic/public';
import type { CheckoutRequest } from '$lib/types';

export const POST: RequestHandler = async ({ request }) => {
	const body: CheckoutRequest = await request.json();

	if (!body.email || !body.business_name || !body.tier) {
		throw error(400, 'Missing required fields');
	}

	const priceMap: Record<string, string | undefined> = {
		basic: env.STRIPE_PRICE_BASIC,
		contract: env.STRIPE_PRICE_CONTRACT,
		premium: env.STRIPE_PRICE_PREMIUM
	};
	const priceId = priceMap[body.tier] || env.STRIPE_PRICE_BASIC;

	const lineItems: Array<{ price: string; quantity: number }> = [
		{ price: priceId || '', quantity: 1 }
	];

	const isSubscription = body.tier === 'premium' || body.annual_updates;

	if (body.annual_updates && body.tier !== 'premium') {
		lineItems.push({ price: env.STRIPE_PRICE_ANNUAL || '', quantity: 1 });
	}

	const siteUrl = pubEnv.PUBLIC_SITE_URL || 'http://localhost:5173';

	const session = await getStripe().checkout.sessions.create({
		mode: isSubscription ? 'subscription' : 'payment',
		line_items: lineItems,
		customer_email: body.email,
		success_url: `${siteUrl}/success?session_id={CHECKOUT_SESSION_ID}`,
		cancel_url: `${siteUrl}/pricing`,
		metadata: {
			tier: body.tier,
			business_name: body.business_name,
			business_address: body.business_address,
			business_city: body.business_city,
			business_state: body.business_state,
			business_zip: body.business_zip,
			contact_name: body.contact_name,
			phone: body.phone || '',
			annual_updates: body.annual_updates ? 'true' : 'false'
		}
	});

	return json({ url: session.url });
};
