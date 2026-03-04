<svelte:head>
	<title>Purchase Successful — SafeWalk</title>
</svelte:head>

<script lang="ts">
	import { page } from '$app/stores';

	const sessionId = $derived($page.url.searchParams.get('session_id'));
</script>

<div class="bg-ice min-h-[60vh] flex items-center justify-center px-4">
	<div class="max-w-lg text-center">
		<div class="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
			<svg class="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
				<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
			</svg>
		</div>
		<h1 class="text-3xl font-bold text-brand mb-4">Purchase Successful!</h1>
		<p class="text-gray-600 mb-6 leading-relaxed">
			Thank you for choosing SafeWalk. Your snow & ice compliance documents are being
			prepared and will be delivered to your email within 24 hours.
		</p>
		<p class="text-gray-500 text-sm mb-8">
			Check your email for a confirmation with a link to your document dashboard.
		</p>
		<div class="flex flex-col sm:flex-row gap-4 justify-center">
			<a
				href="/dashboard"
				class="bg-brand text-white px-6 py-3 rounded-lg font-semibold hover:bg-brand-light transition-colors"
			>
				Go to Dashboard
			</a>
			<a
				href="/"
				class="border border-brand text-brand px-6 py-3 rounded-lg font-semibold hover:bg-brand hover:text-white transition-colors"
			>
				Back to Home
			</a>
		</div>
	</div>
</div>
