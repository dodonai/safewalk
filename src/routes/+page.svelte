<script>
	import { base } from '$app/paths';
</script>

<svelte:head>
	<title>SafeWalk - Snow & Ice Compliance Documents for Small Businesses</title>
	<meta
		name="description"
		content="Protect your business from slip-and-fall lawsuits with professional snow and ice compliance documents. Written policies, activity logs, and contractor agreements ready in minutes."
	/>
</svelte:head>

<!-- Hero Section -->
<section class="bg-brand-dark relative overflow-hidden">
	<div class="absolute inset-0 bg-gradient-to-br from-brand-dark via-brand to-brand-dark opacity-80"></div>
	<div class="relative max-w-6xl mx-auto px-4 py-20 md:py-28 text-center">
		<h1 class="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight max-w-4xl mx-auto">
			Protect Your Business from Slip-and-Fall Claims
		</h1>
		<p class="mt-6 text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
			Professional snow & ice compliance documents for small businesses. Ready in minutes, not months.
		</p>
		<div class="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
			<a
				href="{base}/pricing"
				class="inline-flex items-center bg-accent hover:bg-accent-light text-brand-dark font-bold text-lg px-8 py-4 rounded-lg transition-colors shadow-lg"
			>
				Get Protected &mdash; $199
			</a>
			<a
				href="#how-it-works"
				class="inline-flex items-center border-2 border-white/30 hover:border-white/60 text-white font-semibold text-lg px-8 py-4 rounded-lg transition-colors"
			>
				See How It Works
			</a>
		</div>
	</div>
	<div class="relative bg-brand/60 border-t border-white/10">
		<div class="max-w-4xl mx-auto px-4 py-5 text-center">
			<p class="text-sm md:text-base text-gray-200 font-medium">
				<span class="text-accent font-bold text-lg md:text-xl">90%</span>
				<span class="ml-1">of businesses sued for slip-and-fall have no written policies</span>
			</p>
		</div>
	</div>
</section>

<!-- Problem Section -->
<section class="bg-white py-20 md:py-24">
	<div class="max-w-6xl mx-auto px-4">
		<div class="text-center max-w-3xl mx-auto">
			<h2 class="text-3xl md:text-4xl font-extrabold text-brand-dark">
				The $50,000 Problem
			</h2>
			<p class="mt-4 text-gray-600 text-lg">
				Every winter, thousands of small businesses face slip-and-fall claims with no documentation to defend themselves.
			</p>
		</div>
		<div class="mt-14 grid md:grid-cols-3 gap-8">
			<!-- Card 1 -->
			<div class="bg-gray-50 rounded-xl p-8 border border-gray-100">
				<div class="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-5">
					<svg class="w-6 h-6 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
						<path stroke-linecap="round" stroke-linejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
					</svg>
				</div>
				<h3 class="text-xl font-bold text-brand-dark mb-3">No Written Policies</h3>
				<p class="text-gray-600 leading-relaxed">
					Most small businesses have zero documentation for snow and ice removal. When a claim hits, there is nothing to show a judge or insurance adjuster.
				</p>
			</div>
			<!-- Card 2 -->
			<div class="bg-gray-50 rounded-xl p-8 border border-gray-100">
				<div class="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-5">
					<svg class="w-6 h-6 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
						<path stroke-linecap="round" stroke-linejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
					</svg>
				</div>
				<h3 class="text-xl font-bold text-brand-dark mb-3">Expensive Legal Defense</h3>
				<p class="text-gray-600 leading-relaxed">
					The average slip-and-fall claim costs $10,000 to $50,000 to defend, even when you did nothing wrong. Without documentation, settlements climb fast.
				</p>
			</div>
			<!-- Card 3 -->
			<div class="bg-gray-50 rounded-xl p-8 border border-gray-100">
				<div class="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-5">
					<svg class="w-6 h-6 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
						<path stroke-linecap="round" stroke-linejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
					</svg>
				</div>
				<h3 class="text-xl font-bold text-brand-dark mb-3">Lost Time & Stress</h3>
				<p class="text-gray-600 leading-relaxed">
					Business owners spend months dealing with claims, depositions, and insurance disputes instead of running their business and serving customers.
				</p>
			</div>
		</div>
	</div>
</section>

<!-- Solution Section -->
<section class="bg-ice py-20 md:py-24">
	<div class="max-w-6xl mx-auto px-4">
		<div class="text-center max-w-3xl mx-auto">
			<h2 class="text-3xl md:text-4xl font-extrabold text-brand-dark">
				Everything You Need Starting at $199
			</h2>
			<p class="mt-4 text-gray-600 text-lg">
				A complete compliance package customized for your business, delivered digitally and ready to implement.
			</p>
		</div>
		<div class="mt-14 grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
			<!-- Document 1 -->
			<div class="bg-white rounded-xl p-8 shadow-sm border border-ice-dark">
				<div class="w-12 h-12 bg-brand/10 rounded-lg flex items-center justify-center mb-5">
					<svg class="w-6 h-6 text-brand" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
						<path stroke-linecap="round" stroke-linejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
					</svg>
				</div>
				<h3 class="text-lg font-bold text-brand-dark mb-2">Snow & Ice Management Policy</h3>
				<p class="text-sm text-gray-500 font-medium mb-3">3-5 pages</p>
				<p class="text-gray-600 text-sm leading-relaxed">
					Your written standard operating procedure for snow and ice removal. Covers trigger thresholds, responsibilities, materials, and escalation procedures.
				</p>
			</div>
			<!-- Document 2 -->
			<div class="bg-white rounded-xl p-8 shadow-sm border border-ice-dark">
				<div class="w-12 h-12 bg-brand/10 rounded-lg flex items-center justify-center mb-5">
					<svg class="w-6 h-6 text-brand" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
						<path stroke-linecap="round" stroke-linejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
					</svg>
				</div>
				<h3 class="text-lg font-bold text-brand-dark mb-2">Employee Quick-Reference Poster</h3>
				<p class="text-sm text-gray-500 font-medium mb-3">1 page, print-ready</p>
				<p class="text-gray-600 text-sm leading-relaxed">
					A clear, visual reference your team can post in break rooms or near exits. Step-by-step actions for snow events so every employee knows what to do.
				</p>
			</div>
			<!-- Document 3 -->
			<div class="bg-white rounded-xl p-8 shadow-sm border border-ice-dark">
				<div class="w-12 h-12 bg-brand/10 rounded-lg flex items-center justify-center mb-5">
					<svg class="w-6 h-6 text-brand" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
						<path stroke-linecap="round" stroke-linejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
					</svg>
				</div>
				<h3 class="text-lg font-bold text-brand-dark mb-2">Activity Log Form</h3>
				<p class="text-sm text-gray-500 font-medium mb-3">Fillable template</p>
				<p class="text-gray-600 text-sm leading-relaxed">
					Document every salting, shoveling, and plowing event with timestamps. This log is your single most important piece of evidence if a claim is filed.
				</p>
			</div>
			<!-- Document 4 (Add-on) -->
			<div class="bg-white rounded-xl p-8 shadow-sm border-2 border-accent/30 relative">
				<span class="absolute top-4 right-4 bg-accent/10 text-accent text-xs font-bold px-3 py-1 rounded-full">
					ADD-ON
				</span>
				<div class="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-5">
					<svg class="w-6 h-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
						<path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
					</svg>
				</div>
				<h3 class="text-lg font-bold text-brand-dark mb-2">Contractor Agreement</h3>
				<p class="text-sm text-accent font-bold mb-3">Included in Complete ($349) and Premium ($499/yr)</p>
				<p class="text-gray-600 text-sm leading-relaxed">
					If you hire a snow removal company, this agreement defines responsibilities, insurance requirements, and indemnification. Protects you when the work is outsourced.
				</p>
			</div>
		</div>
	</div>
</section>

<!-- How It Works Section -->
<section id="how-it-works" class="bg-white py-20 md:py-24">
	<div class="max-w-6xl mx-auto px-4">
		<div class="text-center max-w-3xl mx-auto">
			<h2 class="text-3xl md:text-4xl font-extrabold text-brand-dark">
				How It Works
			</h2>
			<p class="mt-4 text-gray-600 text-lg">
				Three simple steps to protect your business this winter.
			</p>
		</div>
		<div class="mt-14 grid md:grid-cols-3 gap-10 max-w-4xl mx-auto">
			<!-- Step 1 -->
			<div class="text-center">
				<div class="w-14 h-14 bg-brand text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto">
					1
				</div>
				<h3 class="mt-5 text-lg font-bold text-brand-dark">Purchase Your Package</h3>
				<p class="mt-3 text-gray-600 text-sm leading-relaxed">
					Select the compliance package that fits your business. Pay once, no subscriptions or recurring fees.
				</p>
			</div>
			<!-- Step 2 -->
			<div class="text-center">
				<div class="w-14 h-14 bg-brand text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto">
					2
				</div>
				<h3 class="mt-5 text-lg font-bold text-brand-dark">We Customize Your Documents</h3>
				<p class="mt-3 text-gray-600 text-sm leading-relaxed">
					Our team tailors every document to your business type, location, and specific property needs.
				</p>
			</div>
			<!-- Step 3 -->
			<div class="text-center">
				<div class="w-14 h-14 bg-brand text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto">
					3
				</div>
				<h3 class="mt-5 text-lg font-bold text-brand-dark">Download, Print & Implement</h3>
				<p class="mt-3 text-gray-600 text-sm leading-relaxed">
					Access your documents from your dashboard. Print them, train your team, and start logging activity immediately.
				</p>
			</div>
		</div>
	</div>
</section>

<!-- Social Proof / Authority Section -->
<section class="bg-gray-50 py-20 md:py-24 border-t border-gray-100">
	<div class="max-w-6xl mx-auto px-4">
		<div class="max-w-3xl mx-auto text-center">
			<div class="w-14 h-14 bg-brand/10 rounded-full flex items-center justify-center mx-auto mb-6">
				<svg class="w-7 h-7 text-brand" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
					<path stroke-linecap="round" stroke-linejoin="round" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
				</svg>
			</div>
			<h2 class="text-3xl md:text-4xl font-extrabold text-brand-dark">
				Developed by Legal Professionals
			</h2>
			<p class="mt-5 text-gray-600 text-lg leading-relaxed">
				SafeWalk documents are created in collaboration with defense attorneys who handle slip-and-fall cases daily. Every template is built from real-world litigation experience.
			</p>
			<blockquote class="mt-10 bg-white rounded-xl p-8 border border-gray-200 shadow-sm">
				<p class="text-lg text-gray-700 italic leading-relaxed">
					"In our experience, businesses with documented snow and ice procedures are significantly more defensible. Written policies demonstrate a standard of care that judges and juries take seriously."
				</p>
				<footer class="mt-5 text-sm text-gray-500 font-medium">
					&mdash; Defense Attorney, Premises Liability Practice
				</footer>
			</blockquote>
		</div>
	</div>
</section>

<!-- CTA Section -->
<section class="bg-brand py-20 md:py-24">
	<div class="max-w-3xl mx-auto px-4 text-center">
		<h2 class="text-3xl md:text-4xl font-extrabold text-white">
			Don't Wait for the First Lawsuit
		</h2>
		<p class="mt-5 text-lg text-gray-300 leading-relaxed">
			Get your snow & ice compliance package today. One purchase. Full protection. Peace of mind all winter.
		</p>
		<div class="mt-10">
			<a
				href="{base}/pricing"
				class="inline-flex items-center bg-accent hover:bg-accent-light text-brand-dark font-bold text-lg px-10 py-4 rounded-lg transition-colors shadow-lg"
			>
				Get Protected Now
			</a>
		</div>
		<p class="mt-6 text-sm text-gray-400">
			One-time purchase. No subscriptions. Documents delivered digitally.
		</p>
	</div>
</section>
