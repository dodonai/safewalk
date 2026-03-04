<script>
	import { base } from '$app/paths';
</script>

<svelte:head>
	<title>How It Works | SafeWalk — Snow & Ice Compliance Documents</title>
	<meta name="description" content="Learn how SafeWalk delivers professional snow and ice compliance documents to your business in 4 simple steps. Choose a package, share your details, and receive customized documents within 24 hours." />
	<meta property="og:title" content="How It Works | SafeWalk" />
	<meta property="og:description" content="Get professional snow & ice compliance documents in 4 simple steps. Customized for your business and delivered within 24 hours." />
	<meta property="og:type" content="website" />
	<meta name="robots" content="index, follow" />
</svelte:head>

<!-- Hero -->
<section class="bg-brand text-white py-16 md:py-24">
	<div class="max-w-4xl mx-auto px-4 text-center">
		<h1 class="text-4xl md:text-5xl font-extrabold tracking-tight mb-6">How SafeWalk Works</h1>
		<p class="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto leading-relaxed">
			From purchase to protection in four simple steps. No legal expertise required.
		</p>
	</div>
</section>

<!-- Steps -->
<section class="py-16 md:py-24">
	<div class="max-w-5xl mx-auto px-4 space-y-20">

		<!-- Step 1 -->
		<div class="grid md:grid-cols-2 gap-10 items-center">
			<div>
				<div class="flex items-center gap-3 mb-4">
					<span class="flex items-center justify-center w-10 h-10 rounded-full bg-accent text-brand-dark font-extrabold text-lg">1</span>
					<h2 class="text-2xl md:text-3xl font-bold text-brand">Choose Your Package</h2>
				</div>
				<p class="text-gray-700 leading-relaxed mb-4">
					Select the package that fits your needs. Every package is a one-time purchase with no recurring fees.
				</p>
				<div class="space-y-3">
					<div class="bg-ice rounded-lg p-4 border border-ice-dark">
						<p class="font-semibold text-brand">Basic Package — $399</p>
						<p class="text-sm text-gray-600 mt-1">
							Includes your customized Snow & Ice Management Policy, employee quick-reference poster, and activity log form. Everything you need for internal compliance documentation.
						</p>
					</div>
					<div class="bg-ice rounded-lg p-4 border border-ice-dark">
						<p class="font-semibold text-brand">Basic + Contractor Agreement — $499</p>
						<p class="text-sm text-gray-600 mt-1">
							Everything in the Basic package plus a professional contractor agreement for businesses that hire third-party snow removal services. Defines scope of work, insurance requirements, and liability allocation.
						</p>
					</div>
				</div>
			</div>
			<div class="flex justify-center">
				<div class="w-full max-w-xs bg-white rounded-2xl shadow-lg border border-gray-100 p-8 text-center">
					<svg class="w-16 h-16 mx-auto text-accent mb-4" fill="none" viewBox="0 0 64 64" stroke="currentColor" stroke-width="2">
						<rect x="8" y="16" width="48" height="36" rx="4" />
						<path d="M8 28h48" />
						<circle cx="44" cy="40" r="4" fill="currentColor" />
					</svg>
					<p class="text-brand font-semibold">One-time purchase</p>
					<p class="text-sm text-gray-500 mt-1">No subscriptions, no hidden fees</p>
				</div>
			</div>
		</div>

		<!-- Step 2 -->
		<div class="grid md:grid-cols-2 gap-10 items-center">
			<div class="order-2 md:order-1 flex justify-center">
				<div class="w-full max-w-xs bg-white rounded-2xl shadow-lg border border-gray-100 p-8 text-center">
					<svg class="w-16 h-16 mx-auto text-brand-light mb-4" fill="none" viewBox="0 0 64 64" stroke="currentColor" stroke-width="2">
						<rect x="12" y="8" width="40" height="48" rx="3" />
						<line x1="20" y1="20" x2="44" y2="20" />
						<line x1="20" y1="28" x2="44" y2="28" />
						<line x1="20" y1="36" x2="36" y2="36" />
						<circle cx="42" cy="44" r="6" fill="none" stroke-width="2" />
						<path d="M39 44l2 2 4-4" stroke-linecap="round" stroke-linejoin="round" />
					</svg>
					<p class="text-brand font-semibold">Simple intake form</p>
					<p class="text-sm text-gray-500 mt-1">Takes less than 5 minutes</p>
				</div>
			</div>
			<div class="order-1 md:order-2">
				<div class="flex items-center gap-3 mb-4">
					<span class="flex items-center justify-center w-10 h-10 rounded-full bg-accent text-brand-dark font-extrabold text-lg">2</span>
					<h2 class="text-2xl md:text-3xl font-bold text-brand">Tell Us About Your Business</h2>
				</div>
				<p class="text-gray-700 leading-relaxed mb-4">
					After purchase, you will fill out a simple form with your business details: company name, address, property type, number of employees, and any specific details about your property.
				</p>
				<p class="text-gray-700 leading-relaxed">
					We use this information to customize every document specifically for your business. These are not generic templates — your company name, address, property details, and operational specifics are woven throughout each document.
				</p>
			</div>
		</div>

		<!-- Step 3 -->
		<div class="grid md:grid-cols-2 gap-10 items-center">
			<div>
				<div class="flex items-center gap-3 mb-4">
					<span class="flex items-center justify-center w-10 h-10 rounded-full bg-accent text-brand-dark font-extrabold text-lg">3</span>
					<h2 class="text-2xl md:text-3xl font-bold text-brand">Receive Your Documents</h2>
				</div>
				<p class="text-gray-700 leading-relaxed mb-4">
					Within 24 hours, your complete compliance package is ready for download from your personal dashboard. You will also receive an email notification when your documents are ready.
				</p>
				<ul class="space-y-2 text-gray-700">
					<li class="flex items-start gap-2">
						<svg class="w-5 h-5 text-accent mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/></svg>
						<span>PDF format for printing and official records</span>
					</li>
					<li class="flex items-start gap-2">
						<svg class="w-5 h-5 text-accent mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/></svg>
						<span>Word format so you can make future edits</span>
					</li>
					<li class="flex items-start gap-2">
						<svg class="w-5 h-5 text-accent mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/></svg>
						<span>Accessible anytime from your dashboard</span>
					</li>
				</ul>
			</div>
			<div class="flex justify-center">
				<div class="w-full max-w-xs bg-white rounded-2xl shadow-lg border border-gray-100 p-8 text-center">
					<svg class="w-16 h-16 mx-auto text-brand-light mb-4" fill="none" viewBox="0 0 64 64" stroke="currentColor" stroke-width="2">
						<path d="M32 8v32M32 40l-10-10M32 40l10-10" stroke-linecap="round" stroke-linejoin="round" />
						<path d="M12 48h40" stroke-linecap="round" />
						<rect x="12" y="48" width="40" height="8" rx="2" />
					</svg>
					<p class="text-brand font-semibold">Delivered in 24 hours</p>
					<p class="text-sm text-gray-500 mt-1">PDF and Word formats included</p>
				</div>
			</div>
		</div>

		<!-- Step 4 -->
		<div class="grid md:grid-cols-2 gap-10 items-center">
			<div class="order-2 md:order-1 flex justify-center">
				<div class="w-full max-w-xs bg-white rounded-2xl shadow-lg border border-gray-100 p-8 text-center">
					<svg class="w-16 h-16 mx-auto text-accent mb-4" fill="none" viewBox="0 0 64 64" stroke="currentColor" stroke-width="2">
						<path d="M32 4L6 18v28l26 14 26-14V18L32 4z" />
						<path d="M26 32l6 6 12-12" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" />
					</svg>
					<p class="text-brand font-semibold">You are protected</p>
					<p class="text-sm text-gray-500 mt-1">Documentation that stands up in court</p>
				</div>
			</div>
			<div class="order-1 md:order-2">
				<div class="flex items-center gap-3 mb-4">
					<span class="flex items-center justify-center w-10 h-10 rounded-full bg-accent text-brand-dark font-extrabold text-lg">4</span>
					<h2 class="text-2xl md:text-3xl font-bold text-brand">Implement & Protect</h2>
				</div>
				<p class="text-gray-700 leading-relaxed mb-4">
					Put your documents to work. Implementation is straightforward:
				</p>
				<ul class="space-y-2 text-gray-700">
					<li class="flex items-start gap-2">
						<svg class="w-5 h-5 text-accent mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/></svg>
						<span><strong>Print the poster</strong> and display it where employees can see it</span>
					</li>
					<li class="flex items-start gap-2">
						<svg class="w-5 h-5 text-accent mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/></svg>
						<span><strong>Distribute the policy</strong> to managers and relevant staff</span>
					</li>
					<li class="flex items-start gap-2">
						<svg class="w-5 h-5 text-accent mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/></svg>
						<span><strong>Start using the activity log</strong> every time snow or ice is addressed</span>
					</li>
					<li class="flex items-start gap-2">
						<svg class="w-5 h-5 text-accent mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/></svg>
						<span><strong>Keep records on file</strong> — they are your best defense if a claim arises</span>
					</li>
				</ul>
			</div>
		</div>

	</div>
</section>

<!-- What You'll Receive -->
<section class="bg-ice py-16 md:py-24">
	<div class="max-w-5xl mx-auto px-4">
		<h2 class="text-3xl md:text-4xl font-extrabold text-brand text-center mb-4">What You'll Receive</h2>
		<p class="text-gray-600 text-center max-w-2xl mx-auto mb-12">
			Every document is customized with your business name, address, and operational details. These are professional-grade documents, not generic templates.
		</p>

		<div class="grid md:grid-cols-2 gap-8">

			<!-- Snow & Ice Policy -->
			<div class="bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-shadow">
				<div class="flex items-center gap-3 mb-4">
					<div class="w-10 h-10 rounded-lg bg-brand flex items-center justify-center">
						<svg class="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
							<path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" stroke-linecap="round" stroke-linejoin="round" />
						</svg>
					</div>
					<h3 class="text-xl font-bold text-brand">Snow & Ice Management Policy</h3>
				</div>
				<p class="text-gray-600 text-sm mb-3">
					Your comprehensive written policy — the foundation of your compliance program. This is the document that demonstrates your business takes snow and ice management seriously.
				</p>
				<ul class="space-y-1.5 text-sm text-gray-600">
					<li class="flex items-start gap-2">
						<span class="text-accent font-bold">&#8226;</span>
						<span>Statement of purpose and scope of coverage</span>
					</li>
					<li class="flex items-start gap-2">
						<span class="text-accent font-bold">&#8226;</span>
						<span>Defined roles and responsibilities</span>
					</li>
					<li class="flex items-start gap-2">
						<span class="text-accent font-bold">&#8226;</span>
						<span>Step-by-step procedures for snow and ice events</span>
					</li>
					<li class="flex items-start gap-2">
						<span class="text-accent font-bold">&#8226;</span>
						<span>Equipment and materials checklist</span>
					</li>
					<li class="flex items-start gap-2">
						<span class="text-accent font-bold">&#8226;</span>
						<span>Emergency procedures and escalation protocols</span>
					</li>
					<li class="flex items-start gap-2">
						<span class="text-accent font-bold">&#8226;</span>
						<span>Documentation and record-keeping requirements</span>
					</li>
				</ul>
			</div>

			<!-- Employee Poster -->
			<div class="bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-shadow">
				<div class="flex items-center gap-3 mb-4">
					<div class="w-10 h-10 rounded-lg bg-accent flex items-center justify-center">
						<svg class="w-5 h-5 text-brand-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
							<path d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" stroke-linecap="round" stroke-linejoin="round" />
						</svg>
					</div>
					<h3 class="text-xl font-bold text-brand">Employee Quick-Reference Poster</h3>
				</div>
				<p class="text-gray-600 text-sm mb-3">
					A print-ready poster designed to hang in a break room, utility closet, or entryway. Gives employees the information they need at a glance — no need to read the full policy.
				</p>
				<ul class="space-y-1.5 text-sm text-gray-600">
					<li class="flex items-start gap-2">
						<span class="text-accent font-bold">&#8226;</span>
						<span>Clear triggers for when to take action</span>
					</li>
					<li class="flex items-start gap-2">
						<span class="text-accent font-bold">&#8226;</span>
						<span>Step-by-step response checklist</span>
					</li>
					<li class="flex items-start gap-2">
						<span class="text-accent font-bold">&#8226;</span>
						<span>Emergency contact information</span>
					</li>
					<li class="flex items-start gap-2">
						<span class="text-accent font-bold">&#8226;</span>
						<span>Reminder to complete the activity log</span>
					</li>
				</ul>
			</div>

			<!-- Activity Log -->
			<div class="bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-shadow">
				<div class="flex items-center gap-3 mb-4">
					<div class="w-10 h-10 rounded-lg bg-brand-light flex items-center justify-center">
						<svg class="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
							<path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" stroke-linecap="round" stroke-linejoin="round" />
						</svg>
					</div>
					<h3 class="text-xl font-bold text-brand">Snow & Ice Activity Log</h3>
				</div>
				<p class="text-gray-600 text-sm mb-3">
					The single most important document for defending a slip-and-fall claim. This log creates a contemporaneous record that is difficult to dispute in court.
				</p>
				<ul class="space-y-1.5 text-sm text-gray-600">
					<li class="flex items-start gap-2">
						<span class="text-accent font-bold">&#8226;</span>
						<span>Date and time of each snow/ice event</span>
					</li>
					<li class="flex items-start gap-2">
						<span class="text-accent font-bold">&#8226;</span>
						<span>Weather conditions at time of action</span>
					</li>
					<li class="flex items-start gap-2">
						<span class="text-accent font-bold">&#8226;</span>
						<span>Specific actions taken (shoveling, salting, plowing)</span>
					</li>
					<li class="flex items-start gap-2">
						<span class="text-accent font-bold">&#8226;</span>
						<span>Areas addressed and materials used</span>
					</li>
					<li class="flex items-start gap-2">
						<span class="text-accent font-bold">&#8226;</span>
						<span>Employee name and signature</span>
					</li>
				</ul>
			</div>

			<!-- Contractor Agreement -->
			<div class="bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-shadow">
				<div class="flex items-center gap-3 mb-4">
					<div class="w-10 h-10 rounded-lg bg-brand-dark flex items-center justify-center">
						<svg class="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
							<path d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" stroke-linecap="round" stroke-linejoin="round" />
						</svg>
					</div>
					<h3 class="text-xl font-bold text-brand">Contractor Agreement</h3>
				</div>
				<p class="text-gray-600 text-sm mb-3">
					Available with the Basic + Contract package. A professional agreement for businesses that hire third-party contractors for snow and ice removal.
				</p>
				<ul class="space-y-1.5 text-sm text-gray-600">
					<li class="flex items-start gap-2">
						<span class="text-accent font-bold">&#8226;</span>
						<span>Detailed scope of work and service areas</span>
					</li>
					<li class="flex items-start gap-2">
						<span class="text-accent font-bold">&#8226;</span>
						<span>Service schedules and response time requirements</span>
					</li>
					<li class="flex items-start gap-2">
						<span class="text-accent font-bold">&#8226;</span>
						<span>Insurance and indemnification requirements</span>
					</li>
					<li class="flex items-start gap-2">
						<span class="text-accent font-bold">&#8226;</span>
						<span>Payment terms and conditions</span>
					</li>
					<li class="flex items-start gap-2">
						<span class="text-accent font-bold">&#8226;</span>
						<span>Liability allocation between parties</span>
					</li>
				</ul>
				<p class="text-xs text-gray-400 mt-3 italic">Included in the Basic + Contract package ($499)</p>
			</div>

		</div>
	</div>
</section>

<!-- CTA -->
<section class="py-16 md:py-24">
	<div class="max-w-3xl mx-auto px-4 text-center">
		<h2 class="text-3xl md:text-4xl font-extrabold text-brand mb-4">Ready to protect your business?</h2>
		<p class="text-gray-600 text-lg mb-8 max-w-xl mx-auto">
			Choose your package and have your customized compliance documents within 24 hours.
		</p>
		<a
			href="{base}/pricing"
			class="inline-block bg-accent hover:bg-accent-light text-brand-dark font-bold text-lg px-8 py-4 rounded-xl transition-colors shadow-md hover:shadow-lg"
		>
			View Pricing & Get Started
		</a>
	</div>
</section>
