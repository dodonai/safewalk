export interface Customer {
	id: string;
	email: string;
	business_name: string;
	business_address: string;
	business_city: string;
	business_state: string;
	business_zip: string;
	contact_name: string;
	phone?: string;
	created_at: string;
}

export interface Purchase {
	id: string;
	customer_id: string;
	stripe_session_id: string;
	stripe_customer_id: string;
	tier: 'basic' | 'contract' | 'premium';
	amount_cents: number;
	status: 'pending' | 'completed' | 'failed';
	documents_generated: boolean;
	created_at: string;
}

export interface Download {
	id: string;
	purchase_id: string;
	document_type: 'policy' | 'poster' | 'log_form' | 'contract';
	file_url: string;
	download_count: number;
	created_at: string;
	expires_at: string;
}

export type Tier = 'basic' | 'contract' | 'premium';

export interface CheckoutRequest {
	tier: Tier;
	business_name: string;
	business_address: string;
	business_city: string;
	business_state: string;
	business_zip: string;
	contact_name: string;
	email: string;
	phone?: string;
	annual_updates: boolean;
}

export const TIERS = {
	basic: {
		name: 'Basic Package',
		price: 199,
		documents: ['policy', 'poster', 'log_form'],
		description: 'Snow & Ice Policy, Employee Poster, and Activity Log Form'
	},
	contract: {
		name: 'Complete Package',
		price: 349,
		documents: ['policy', 'poster', 'log_form', 'contract'],
		description: 'Everything in Basic, plus a Contractor Agreement Template'
	},
	premium: {
		name: 'Premium',
		price: 499,
		recurring: 'year',
		documents: ['policy', 'poster', 'log_form', 'contract'],
		description: 'All documents + digital logging app with photo evidence'
	}
} as const;

export const ANNUAL_UPDATE_PRICE = 99;
