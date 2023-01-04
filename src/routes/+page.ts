import { supabase } from '$lib/db';
import type { Gifts } from '$lib/types/database';

interface LoadData {
	gifts: Gifts;
}

/** @type {import('./$types').PageLoad} */
export async function load(): Promise<LoadData> {
	const { data, error } = await supabase.from('gifts').select('*');

	if (error) {
		throw new Error(error.message);
	}

	return { gifts: data };
}
