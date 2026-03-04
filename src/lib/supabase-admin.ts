import { createClient, type SupabaseClient } from '@supabase/supabase-js';
import { env as pubEnv } from '$env/dynamic/public';
import { env } from '$env/dynamic/private';

let _client: SupabaseClient | null = null;

export function getSupabaseAdmin(): SupabaseClient {
	if (!_client) {
		_client = createClient(
			pubEnv.PUBLIC_SUPABASE_URL || '',
			env.SUPABASE_SERVICE_ROLE_KEY || ''
		);
	}
	return _client;
}
