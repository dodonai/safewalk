<svelte:head>
	<title>My Documents — SafeWalk</title>
	<meta name="robots" content="noindex" />
</svelte:head>

<script lang="ts">
	import { page } from '$app/stores';
	import { base } from '$app/paths';
	import { getSupabase } from '$lib/supabase';

	let email = $state($page.url.searchParams.get('email') || '');
	let emailInput = $state('');
	let loading = $state(false);
	let purchases = $state<any[]>([]);
	let downloads = $state<any[]>([]);
	let customer = $state<any>(null);
	let errorMsg = $state('');
	let loaded = $state(false);

	const docLabels: Record<string, string> = {
		policy: 'Snow & Ice Management Policy',
		poster: 'Employee Quick-Reference Poster',
		log_form: 'Activity Log Form',
		contract: 'Contractor Agreement'
	};

	async function loadDashboard(lookupEmail: string) {
		if (!lookupEmail) return;
		loading = true;
		errorMsg = '';

		const { data: cust, error: custErr } = await getSupabase()
			.from('customers')
			.select('*')
			.eq('email', lookupEmail)
			.single();

		if (custErr || !cust) {
			errorMsg = 'No account found with that email address. Please check and try again.';
			loading = false;
			return;
		}

		customer = cust;

		const { data: purch } = await getSupabase()
			.from('purchases')
			.select('*')
			.eq('customer_id', cust.id)
			.eq('status', 'completed')
			.order('created_at', { ascending: false });

		purchases = purch || [];

		if (purchases.length > 0) {
			const purchaseIds = purchases.map((p: any) => p.id);
			const { data: dl } = await getSupabase()
				.from('downloads')
				.select('*')
				.in('purchase_id', purchaseIds);

			downloads = dl || [];
		}

		loading = false;
		loaded = true;
	}

	$effect(() => {
		if (email) {
			loadDashboard(email);
		}
	});
</script>

<div class="max-w-4xl mx-auto px-4 py-12">
	{#if !loaded && !loading}
		<div class="max-w-md mx-auto text-center">
			<h1 class="text-3xl font-bold text-brand mb-4">My Documents</h1>
			<p class="text-gray-600 mb-8">Enter the email address you used to purchase your SafeWalk package.</p>
			<form
				onsubmit={(e) => {
					e.preventDefault();
					email = emailInput;
					loadDashboard(emailInput);
				}}
				class="flex gap-3"
			>
				<input
					type="email"
					bind:value={emailInput}
					placeholder="your@email.com"
					required
					class="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand"
				/>
				<button
					type="submit"
					class="bg-brand text-white px-6 py-3 rounded-lg font-semibold hover:bg-brand-light transition-colors"
				>
					Look Up
				</button>
			</form>
			{#if errorMsg}
				<p class="mt-4 text-red-600 text-sm">{errorMsg}</p>
			{/if}
		</div>
	{:else if loading}
		<div class="text-center py-20">
			<div class="w-8 h-8 border-4 border-brand border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
			<p class="text-gray-500">Loading your documents...</p>
		</div>
	{:else if loaded && customer}
		<div class="mb-8">
			<h1 class="text-3xl font-bold text-brand mb-2">Welcome, {customer.contact_name}</h1>
			<p class="text-gray-500">{customer.business_name} — {customer.email}</p>
		</div>

		{#if purchases.length === 0}
			<div class="bg-ice rounded-xl p-8 text-center">
				<p class="text-gray-600">No completed purchases found.</p>
				<a href="{base}/pricing" class="text-brand font-semibold hover:underline mt-2 inline-block">
					View our packages
				</a>
			</div>
		{:else}
			{#each purchases as purchase}
				<div class="bg-white border border-gray-200 rounded-xl p-6 mb-6 shadow-sm">
					<div class="flex items-center justify-between mb-4">
						<div>
							<h2 class="text-lg font-semibold text-brand">
								{purchase.tier === 'contract' ? 'Basic + Contract Package' : 'Basic Package'}
							</h2>
							<p class="text-sm text-gray-500">
								Purchased {new Date(purchase.created_at).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
							</p>
						</div>
						<span class="bg-green-100 text-green-700 text-xs font-medium px-3 py-1 rounded-full">
							{purchase.documents_generated ? 'Ready' : 'Processing'}
						</span>
					</div>

					{#if purchase.documents_generated}
						{@const purchaseDownloads = downloads.filter((d: any) => d.purchase_id === purchase.id)}
						<div class="grid sm:grid-cols-2 gap-3">
							{#each purchaseDownloads as dl}
								<a
									href={dl.file_url}
									target="_blank"
									rel="noopener"
									class="flex items-center gap-3 p-3 border border-gray-200 rounded-lg hover:border-brand hover:bg-ice transition-colors"
								>
									<svg class="w-8 h-8 text-brand flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
										<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 11v6m-3-3l3 3 3-3" />
									</svg>
									<div>
										<p class="font-medium text-sm text-gray-900">{docLabels[dl.document_type] || dl.document_type}</p>
										<p class="text-xs text-gray-500">PDF — Click to download</p>
									</div>
								</a>
							{/each}
						</div>
					{:else}
						<div class="bg-amber-50 border border-amber-200 rounded-lg p-4">
							<p class="text-amber-800 text-sm">
								Your documents are being prepared. You'll receive an email when they're ready to download.
								This typically takes less than 24 hours.
							</p>
						</div>
					{/if}
				</div>
			{/each}
		{/if}
	{/if}
</div>
