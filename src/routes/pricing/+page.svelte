<svelte:head>
	<title>Pricing — SafeWalk | Snow & Ice Management Documents</title>
	<meta
		name="description"
		content="Get professional snow and ice removal policy documents starting at $199. One-time purchase, no hidden fees, no hourly legal bills. Delivered digitally within 24 hours."
	/>
	<meta property="og:title" content="SafeWalk Pricing — Professional Snow & Ice Management Documents" />
	<meta
		property="og:description"
		content="One-time purchase starting at $199. Policy documents, employee posters, activity logs, and contractor agreements."
	/>
	<meta property="og:type" content="website" />
	<meta name="twitter:card" content="summary" />
	<meta name="twitter:title" content="SafeWalk Pricing — Snow & Ice Management Documents" />
	<meta
		name="twitter:description"
		content="Professional snow and ice removal documents starting at $199. No hidden fees."
	/>
</svelte:head>

<script lang="ts">
	import { base } from '$app/paths';

	type Tier = 'basic' | 'contract' | 'premium';

	interface FormData {
		tier: Tier;
		businessName: string;
		contactName: string;
		email: string;
		phone: string;
		address: string;
		city: string;
		state: string;
		zip: string;
		annualUpdates: boolean;
	}

	const PRICES: Record<Tier, number> = {
		basic: 199,
		contract: 349,
		premium: 499
	};

	const TIER_LABELS: Record<Tier, string> = {
		basic: 'Basic Package',
		contract: 'Complete Package',
		premium: 'Premium Package'
	};

	const MIDWEST_STATES = [
		{ value: 'WI', label: 'Wisconsin' },
		{ value: 'MN', label: 'Minnesota' },
		{ value: 'MI', label: 'Michigan' },
		{ value: 'IL', label: 'Illinois' },
		{ value: 'IN', label: 'Indiana' },
		{ value: 'OH', label: 'Ohio' },
		{ value: 'IA', label: 'Iowa' },
		{ value: 'MO', label: 'Missouri' },
		{ value: 'NE', label: 'Nebraska' },
		{ value: 'ND', label: 'North Dakota' },
		{ value: 'SD', label: 'South Dakota' }
	];

	const FAQ_ITEMS = [
		{
			question: 'What format are the documents?',
			answer:
				'PDF and Word format, ready to print or customize. You can edit the Word versions to add your own details or use the PDFs as-is.'
		},
		{
			question: 'Do I need a lawyer to use these?',
			answer:
				'No, the documents are ready to use as-is. They were created in collaboration with defense attorneys who specialize in slip-and-fall liability.'
		},
		{
			question: 'What if laws change?',
			answer:
				'Our Annual Updates subscription ($99/year) keeps your documents current. Each year before winter, we review and update your package to reflect the latest legal standards and best practices. Premium subscribers get annual updates included automatically.'
		},
		{
			question: 'Is this specific to my state?',
			answer:
				'Documents cover general best practices applicable across all states. The contractor agreement template can be customized for your specific state requirements.'
		},
		{
			question: "What's your refund policy?",
			answer:
				"Full refund within 30 days if you're not satisfied. No questions asked. We stand behind the quality of our documents."
		}
	];

	let showForm = $state(false);
	let submitting = $state(false);
	let errorMessage = $state('');
	let openFaqIndex = $state<number | null>(null);

	let form: FormData = $state({
		tier: 'contract',
		businessName: '',
		contactName: '',
		email: '',
		phone: '',
		address: '',
		city: '',
		state: '',
		zip: '',
		annualUpdates: false
	});

	let formEl: HTMLElement | undefined = $state();

	let isPremium = $derived(form.tier === 'premium');

	let total = $derived.by(() => {
		let t = PRICES[form.tier];
		if (!isPremium && form.annualUpdates) {
			t += 99;
		}
		return t;
	});

	function selectTier(tier: Tier) {
		form.tier = tier;
		if (tier === 'premium') {
			form.annualUpdates = false;
		}
		showForm = true;
		errorMessage = '';
		setTimeout(() => {
			formEl?.scrollIntoView({ behavior: 'smooth', block: 'start' });
		}, 100);
	}

	function toggleFaq(index: number) {
		openFaqIndex = openFaqIndex === index ? null : index;
	}

	async function handleSubmit(e: Event) {
		e.preventDefault();
		submitting = true;
		errorMessage = '';

		try {
			const response = await fetch(`${base}/api/checkout`, {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({
					tier: form.tier,
					business_name: form.businessName,
					business_address: form.address,
					business_city: form.city,
					business_state: form.state,
					business_zip: form.zip,
					contact_name: form.contactName,
					email: form.email,
					phone: form.phone,
					annual_updates: isPremium ? true : form.annualUpdates
				})
			});

			if (!response.ok) {
				const data = await response.json();
				throw new Error(data.message || 'Something went wrong. Please try again.');
			}

			const { url } = await response.json();
			window.location.href = url;
		} catch (err: any) {
			errorMessage = err.message || 'Something went wrong. Please try again.';
		} finally {
			submitting = false;
		}
	}
</script>

<!-- Hero Header -->
<section class="bg-brand px-4 py-20 text-center text-white">
	<div class="mx-auto max-w-3xl">
		<h1 class="mb-4 text-4xl font-bold tracking-tight md:text-5xl">Simple, Transparent Pricing</h1>
		<p class="text-ice text-lg md:text-xl">
			One-time purchase. No hidden fees. No hourly legal bills.
		</p>
	</div>
</section>

<!-- Pricing Cards -->
<section class="bg-ice px-4 py-16">
	<div class="mx-auto grid max-w-6xl gap-8 md:grid-cols-3">
		<!-- Basic Package -->
		<div
			class="flex flex-col rounded-2xl border border-gray-200 bg-white p-8 shadow-sm transition-shadow hover:shadow-md"
		>
			<div class="mb-6">
				<h2 class="text-brand mb-1 text-xl font-bold">Basic</h2>
				<div class="mb-4 flex items-baseline gap-1">
					<span class="text-brand text-4xl font-extrabold">$199</span>
					<span class="text-sm text-gray-500">one-time</span>
				</div>
			</div>

			<ul class="mb-8 flex-1 space-y-3 text-sm text-gray-700">
				<li class="flex items-start gap-2">
					<svg class="text-accent mt-0.5 h-5 w-5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
						<path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
					</svg>
					Snow & Ice Removal Policy & Procedures (3-5 pages)
				</li>
				<li class="flex items-start gap-2">
					<svg class="text-accent mt-0.5 h-5 w-5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
						<path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
					</svg>
					Employee Quick-Reference Poster (print-ready)
				</li>
				<li class="flex items-start gap-2">
					<svg class="text-accent mt-0.5 h-5 w-5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
						<path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
					</svg>
					Activity Log Form (fillable template)
				</li>
				<li class="flex items-start gap-2">
					<svg class="text-accent mt-0.5 h-5 w-5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
						<path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
					</svg>
					Customized with your business information
				</li>
				<li class="flex items-start gap-2">
					<svg class="text-accent mt-0.5 h-5 w-5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
						<path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
					</svg>
					Delivered digitally within 24 hours
				</li>
			</ul>

			<button
				onclick={() => selectTier('basic')}
				class="border-brand text-brand hover:bg-brand w-full cursor-pointer rounded-lg border-2 px-6 py-3 font-semibold transition-colors hover:text-white"
			>
				Get Basic Package
			</button>
		</div>

		<!-- Complete Package (Most Popular) -->
		<div
			class="border-accent relative flex flex-col rounded-2xl border-2 bg-white p-8 shadow-lg transition-shadow hover:shadow-xl"
		>
			<!-- Most Popular Badge -->
			<div
				class="bg-accent absolute -top-4 left-1/2 -translate-x-1/2 rounded-full px-4 py-1 text-sm font-bold text-white shadow"
			>
				Most Popular
			</div>

			<div class="mb-6">
				<h2 class="text-brand mb-1 text-xl font-bold">Complete</h2>
				<div class="mb-4 flex items-baseline gap-1">
					<span class="text-brand text-4xl font-extrabold">$349</span>
					<span class="text-sm text-gray-500">one-time</span>
				</div>
			</div>

			<ul class="mb-8 flex-1 space-y-3 text-sm text-gray-700">
				<li class="flex items-start gap-2">
					<svg class="text-accent mt-0.5 h-5 w-5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
						<path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
					</svg>
					<span><strong>Everything in Basic</strong>, plus:</span>
				</li>
				<li class="flex items-start gap-2">
					<svg class="text-accent mt-0.5 h-5 w-5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
						<path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
					</svg>
					Contractor Agreement Template
				</li>
				<li class="flex items-start gap-2">
					<svg class="text-accent mt-0.5 h-5 w-5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
						<path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
					</svg>
					Customizable for your state and contractor
				</li>
			</ul>

			<button
				onclick={() => selectTier('contract')}
				class="bg-accent hover:bg-accent-light w-full cursor-pointer rounded-lg px-6 py-3 font-semibold text-white shadow transition-colors"
			>
				Get Complete Package
			</button>
		</div>

		<!-- Premium Package -->
		<div
			class="bg-brand-dark relative flex flex-col rounded-2xl border-2 border-brand-light p-8 shadow-lg transition-shadow hover:shadow-xl"
		>
			<!-- Strongest Defense Badge -->
			<div
				class="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-accent to-accent-light px-4 py-1 text-sm font-bold text-white shadow"
			>
				Strongest Defense
			</div>

			<div class="mb-6">
				<h2 class="mb-1 text-xl font-bold text-white">Premium</h2>
				<div class="mb-4 flex items-baseline gap-1">
					<span class="text-4xl font-extrabold text-white">$499</span>
					<span class="text-sm text-ice-dark">/year</span>
				</div>
			</div>

			<ul class="mb-8 flex-1 space-y-3 text-sm text-ice">
				<li class="flex items-start gap-2">
					<svg class="text-accent-light mt-0.5 h-5 w-5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
						<path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
					</svg>
					<span><strong class="text-white">Everything in Complete</strong>, plus:</span>
				</li>
				<li class="flex items-start gap-2">
					<svg class="text-accent-light mt-0.5 h-5 w-5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
						<path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
					</svg>
					Digital Activity Logging App (mobile-friendly)
				</li>
				<li class="flex items-start gap-2">
					<svg class="text-accent-light mt-0.5 h-5 w-5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
						<path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
					</svg>
					Photo evidence capture with timestamps
				</li>
				<li class="flex items-start gap-2">
					<svg class="text-accent-light mt-0.5 h-5 w-5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
						<path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
					</svg>
					Compliance dashboard for owners
				</li>
				<li class="flex items-start gap-2">
					<svg class="text-accent-light mt-0.5 h-5 w-5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
						<path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
					</svg>
					Automatic annual document updates
				</li>
			</ul>

			<button
				onclick={() => selectTier('premium')}
				class="bg-accent hover:bg-accent-light w-full cursor-pointer rounded-lg px-6 py-3 font-semibold text-white shadow transition-colors"
			>
				Get Premium
			</button>
		</div>
	</div>
</section>

<!-- Annual Updates Banner -->
<section class="border-accent bg-accent/5 border-y px-4 py-10">
	<div class="mx-auto max-w-3xl text-center">
		<div class="mb-2 flex items-center justify-center gap-2">
			<svg class="text-accent h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
				<path stroke-linecap="round" stroke-linejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
			</svg>
			<h2 class="text-brand text-xl font-bold">Add Annual Updates &mdash; $99/year</h2>
		</div>
		<p class="text-gray-600">
			Your documents stay current with the latest legal standards. We review and update your
			package every year before winter. <span class="font-medium">Included free with Premium.</span>
		</p>
	</div>
</section>

<!-- Checkout Form -->
{#if showForm}
	<section bind:this={formEl} class="bg-white px-4 py-16">
		<div class="mx-auto max-w-2xl">
			<div class="mb-8 text-center">
				<h2 class="text-brand mb-2 text-2xl font-bold">Complete Your Order</h2>
				<p class="text-gray-600">
					{TIER_LABELS[form.tier]} &mdash;
					<span class="font-semibold">${PRICES[form.tier]}{isPremium ? '/year' : ''}</span>
					{#if !isPremium && form.annualUpdates}
						<span class="text-sm"> + $99/yr Annual Updates</span>
					{/if}
				</p>
			</div>

			{#if errorMessage}
				<div class="mb-6 rounded-lg border border-red-200 bg-red-50 p-4 text-sm text-red-700">
					{errorMessage}
				</div>
			{/if}

			<form onsubmit={handleSubmit} class="space-y-5">
				<!-- Business Name -->
				<div>
					<label for="businessName" class="mb-1 block text-sm font-medium text-gray-700"
						>Business Name <span class="text-red-500">*</span></label
					>
					<input
						id="businessName"
						type="text"
						required
						bind:value={form.businessName}
						class="border-ice-dark focus:border-brand focus:ring-brand w-full rounded-lg border px-4 py-2.5 text-gray-900 transition-colors outline-none focus:ring-1"
						placeholder="ABC Snow Services LLC"
					/>
				</div>

				<!-- Contact Name -->
				<div>
					<label for="contactName" class="mb-1 block text-sm font-medium text-gray-700"
						>Contact Name <span class="text-red-500">*</span></label
					>
					<input
						id="contactName"
						type="text"
						required
						bind:value={form.contactName}
						class="border-ice-dark focus:border-brand focus:ring-brand w-full rounded-lg border px-4 py-2.5 text-gray-900 transition-colors outline-none focus:ring-1"
						placeholder="John Smith"
					/>
				</div>

				<!-- Email & Phone -->
				<div class="grid gap-5 md:grid-cols-2">
					<div>
						<label for="email" class="mb-1 block text-sm font-medium text-gray-700"
							>Email <span class="text-red-500">*</span></label
						>
						<input
							id="email"
							type="email"
							required
							bind:value={form.email}
							class="border-ice-dark focus:border-brand focus:ring-brand w-full rounded-lg border px-4 py-2.5 text-gray-900 transition-colors outline-none focus:ring-1"
							placeholder="john@abcsnow.com"
						/>
					</div>
					<div>
						<label for="phone" class="mb-1 block text-sm font-medium text-gray-700"
							>Phone <span class="text-gray-400">(optional)</span></label
						>
						<input
							id="phone"
							type="tel"
							bind:value={form.phone}
							class="border-ice-dark focus:border-brand focus:ring-brand w-full rounded-lg border px-4 py-2.5 text-gray-900 transition-colors outline-none focus:ring-1"
							placeholder="(555) 123-4567"
						/>
					</div>
				</div>

				<!-- Address -->
				<div>
					<label for="address" class="mb-1 block text-sm font-medium text-gray-700"
						>Business Address <span class="text-red-500">*</span></label
					>
					<input
						id="address"
						type="text"
						required
						bind:value={form.address}
						class="border-ice-dark focus:border-brand focus:ring-brand w-full rounded-lg border px-4 py-2.5 text-gray-900 transition-colors outline-none focus:ring-1"
						placeholder="123 Main Street"
					/>
				</div>

				<!-- City, State, ZIP -->
				<div class="grid gap-5 md:grid-cols-3">
					<div>
						<label for="city" class="mb-1 block text-sm font-medium text-gray-700"
							>City <span class="text-red-500">*</span></label
						>
						<input
							id="city"
							type="text"
							required
							bind:value={form.city}
							class="border-ice-dark focus:border-brand focus:ring-brand w-full rounded-lg border px-4 py-2.5 text-gray-900 transition-colors outline-none focus:ring-1"
							placeholder="Milwaukee"
						/>
					</div>
					<div>
						<label for="state" class="mb-1 block text-sm font-medium text-gray-700"
							>State <span class="text-red-500">*</span></label
						>
						<select
							id="state"
							required
							bind:value={form.state}
							class="border-ice-dark focus:border-brand focus:ring-brand w-full rounded-lg border bg-white px-4 py-2.5 text-gray-900 transition-colors outline-none focus:ring-1"
						>
							<option value="" disabled>Select state</option>
							{#each MIDWEST_STATES as st}
								<option value={st.value}>{st.label}</option>
							{/each}
						</select>
					</div>
					<div>
						<label for="zip" class="mb-1 block text-sm font-medium text-gray-700"
							>ZIP <span class="text-red-500">*</span></label
						>
						<input
							id="zip"
							type="text"
							required
							pattern="[0-9]{5}"
							bind:value={form.zip}
							class="border-ice-dark focus:border-brand focus:ring-brand w-full rounded-lg border px-4 py-2.5 text-gray-900 transition-colors outline-none focus:ring-1"
							placeholder="53201"
						/>
					</div>
				</div>

				<!-- Annual Updates Checkbox (hidden for premium) -->
				{#if !isPremium}
					<div class="bg-ice/50 rounded-lg border border-gray-200 p-4">
						<label class="flex cursor-pointer items-start gap-3">
							<input
								type="checkbox"
								bind:checked={form.annualUpdates}
								class="text-accent focus:ring-accent mt-1 h-4 w-4 rounded border-gray-300"
							/>
							<div>
								<span class="font-medium text-gray-900">Add Annual Updates &mdash; $99/year</span>
								<p class="mt-0.5 text-sm text-gray-500">
									We review and update your documents every year before winter to keep them current
									with the latest legal standards.
								</p>
							</div>
						</label>
					</div>
				{:else}
					<div class="bg-ice/50 rounded-lg border border-green-200 p-4">
						<div class="flex items-start gap-3">
							<svg class="mt-0.5 h-5 w-5 shrink-0 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
								<path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
							</svg>
							<div>
								<span class="font-medium text-gray-900">Annual Updates Included</span>
								<p class="mt-0.5 text-sm text-gray-500">
									Your Premium subscription includes automatic annual document updates at no extra cost.
								</p>
							</div>
						</div>
					</div>
				{/if}

				<!-- Order Summary -->
				<div class="bg-ice rounded-lg p-4">
					<div class="flex items-center justify-between text-sm text-gray-700">
						<span>{TIER_LABELS[form.tier]}</span>
						<span>${PRICES[form.tier]}{isPremium ? '/year' : ''}</span>
					</div>
					{#if !isPremium && form.annualUpdates}
						<div class="mt-1 flex items-center justify-between text-sm text-gray-700">
							<span>Annual Updates (first year)</span>
							<span>$99</span>
						</div>
					{/if}
					<div class="text-brand mt-3 flex items-center justify-between border-t border-gray-200 pt-3 font-bold">
						<span>Total due today</span>
						<span>${total}{isPremium ? '/year' : ''}</span>
					</div>
				</div>

				<!-- Submit -->
				<button
					type="submit"
					disabled={submitting}
					class="bg-accent hover:bg-accent-light w-full cursor-pointer rounded-lg px-6 py-3.5 text-lg font-semibold text-white shadow-md transition-colors disabled:cursor-not-allowed disabled:opacity-60"
				>
					{#if submitting}
						<span class="inline-flex items-center gap-2">
							<svg class="h-5 w-5 animate-spin" viewBox="0 0 24 24" fill="none">
								<circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" />
								<path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
							</svg>
							Processing...
						</span>
					{:else}
						Proceed to Checkout
					{/if}
				</button>

				<p class="text-center text-xs text-gray-500">
					You will be redirected to Stripe for secure payment processing.
				</p>
			</form>
		</div>
	</section>
{/if}

<!-- FAQ Section -->
<section class="bg-white px-4 py-16">
	<div class="mx-auto max-w-2xl">
		<h2 class="text-brand mb-10 text-center text-3xl font-bold">Frequently Asked Questions</h2>

		<div class="divide-y divide-gray-200">
			{#each FAQ_ITEMS as faq, i}
				<div class="py-4">
					<button
						onclick={() => toggleFaq(i)}
						class="flex w-full cursor-pointer items-center justify-between text-left"
					>
						<span class="text-brand pr-4 font-semibold">{faq.question}</span>
						<svg
							class="h-5 w-5 shrink-0 text-gray-400 transition-transform duration-200 {openFaqIndex === i ? 'rotate-180' : ''}"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
							stroke-width="2"
						>
							<path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
						</svg>
					</button>
					{#if openFaqIndex === i}
						<p class="mt-3 text-sm leading-relaxed text-gray-600">
							{faq.answer}
						</p>
					{/if}
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- Bottom CTA -->
<section class="bg-brand px-4 py-16 text-center text-white">
	<div class="mx-auto max-w-2xl">
		<h2 class="mb-3 text-2xl font-bold">Ready to Protect Your Business?</h2>
		<p class="text-ice mb-6">
			Join hundreds of snow removal professionals who trust SafeWalk to keep their operations
			legally compliant.
		</p>
		<button
			onclick={() => selectTier('contract')}
			class="bg-accent hover:bg-accent-light inline-block cursor-pointer rounded-lg px-8 py-3 font-semibold text-white shadow transition-colors"
		>
			Get Started Today
		</button>
	</div>
</section>
