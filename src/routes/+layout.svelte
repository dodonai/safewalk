<script lang="ts">
	import '../app.css';
	import { base } from '$app/paths';
	let { children } = $props();
</script>

<svelte:head>
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
	<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
</svelte:head>

<div class="min-h-screen flex flex-col bg-white text-gray-900 font-sans">
	<header class="bg-brand text-white">
		<nav class="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
			<a href="{base}/" class="flex items-center gap-2 text-xl font-bold tracking-tight">
				<svg class="w-8 h-8" viewBox="0 0 32 32" fill="none">
					<circle cx="16" cy="16" r="14" stroke="currentColor" stroke-width="2" />
					<path d="M10 20 L16 10 L22 20" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
					<path d="M12 17 h8" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
				</svg>
				SafeWalk
			</a>
			<div class="hidden md:flex items-center gap-8 text-sm font-medium">
				<a href="{base}/how-it-works" class="hover:text-accent-light transition-colors">How It Works</a>
				<a href="{base}/pricing" class="hover:text-accent-light transition-colors">Pricing</a>
				<a href="{base}/about" class="hover:text-accent-light transition-colors">About</a>
				<a href="{base}/pricing" class="bg-accent hover:bg-accent-light text-brand-dark font-semibold px-4 py-2 rounded-lg transition-colors">
					Get Protected
				</a>
			</div>
		</nav>
	</header>

	<main class="flex-1">
		{@render children()}
	</main>

	<footer class="bg-brand-dark text-gray-300">
		<div class="max-w-6xl mx-auto px-4 py-12 grid md:grid-cols-3 gap-8">
			<div>
				<h3 class="text-white font-bold text-lg mb-3">SafeWalk</h3>
				<p class="text-sm leading-relaxed">
					Professional snow & ice compliance documents for small businesses.
					Protect your business from slip-and-fall liability.
				</p>
			</div>
			<div>
				<h4 class="text-white font-semibold mb-3">Quick Links</h4>
				<ul class="space-y-2 text-sm">
					<li><a href="{base}/how-it-works" class="hover:text-white transition-colors">How It Works</a></li>
					<li><a href="{base}/pricing" class="hover:text-white transition-colors">Pricing</a></li>
					<li><a href="{base}/about" class="hover:text-white transition-colors">About</a></li>
					<li><a href="{base}/dashboard" class="hover:text-white transition-colors">My Documents</a></li>
				</ul>
			</div>
			<div>
				<h4 class="text-white font-semibold mb-3">Contact</h4>
				<p class="text-sm">Questions? Reach out at</p>
				<a href="mailto:hello@safewalkpolicy.com" class="text-accent hover:text-accent-light text-sm">
					hello@safewalkpolicy.com
				</a>
			</div>
		</div>
		<div class="border-t border-gray-700 py-4 text-center text-xs text-gray-500">
			&copy; {new Date().getFullYear()} SafeWalk. All rights reserved.
			<span class="mx-2">|</span>
			Documents are for informational purposes and do not constitute legal advice.
		</div>
	</footer>
</div>
