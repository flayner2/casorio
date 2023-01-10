export type Gifts = Gift[];

export interface Gift {
	id: number;
	created_at: string;
	name: string;
	description: string;
	price: number;
	thumbnail: string;
	purchase_link: string;
	category: string;
	bought: boolean;
}
