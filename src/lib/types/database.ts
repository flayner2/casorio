export type Gifts = Gift[];

export interface Gift {
	id: number;
	created_at: string | null;
	name: string | null;
	description: string | null;
	price: number | null;
	thumbnail: string | null;
	purchase_link: string | null;
	category: string | null;
	bought: boolean;
}
