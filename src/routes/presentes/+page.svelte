<script lang="ts">
	import type { PageData } from './$types';
	import type { Gifts } from '$lib/types/database';

	export let data: PageData;
	const { gifts } = data;

	const categories = [
		...new Set(
			gifts.map((gift) => gift.category).filter((category): category is string => category !== null)
		)
	];
	let checkedCategories = Object.fromEntries(categories.map((key) => [key, true]));

	const prices = gifts.map((gift) => gift.price).filter((price): price is number => price !== null);
	const minPrice = Math.min(...prices);
	const maxPrice = Math.max(...prices);

	let sliderValue: number = maxPrice;
	$: filteredGifts = filterGifts(sliderValue, checkedCategories);

	function filterGifts(price: number, categories: { [k: string]: boolean }): Gifts {
		return gifts.filter(
			(gift) =>
				gift.price !== null &&
				gift.price <= price &&
				gift.category !== null &&
				categories[gift.category]
		);
	}

	function setSliderValue(event: Event) {
		const target = event.target as HTMLInputElement;
		sliderValue = parseInt(target.value);
	}
</script>

<svelte:head>
	<title>Casório do Mayco e da Rafa</title>
</svelte:head>

<div class="flex justify-around pt-10">
	<div
		class="flex flex-col justify-between items-center sticky top-0 max-h-[35vh] uppercase font-body text-casorioBlue w-[25vw] pl-10"
	>
		<div class="border-2 border-casorioPink w-full p-5 pb-10">
			<p class="mb-5">Categoria:</p>
			<div class="grid grid-cols-2">
				{#each categories as category}
					<div class="h-min">
						<input
							type="checkbox"
							name={category}
							id={category}
							bind:checked={checkedCategories[category]}
						/>
						<label for={category}>{category}</label>
					</div>
				{/each}
			</div>
		</div>
		<div class=" border-2 border-casorioPink w-full p-5 pb-8">
			<p class="mb-5">Valor:</p>
			<input
				class="w-full"
				type="range"
				name="test"
				id="test"
				min={minPrice}
				max={maxPrice}
				step={1}
				value={sliderValue}
				on:change={setSliderValue}
			/>
			<div class="w-full flex justify-between">
				<span>R$ {minPrice}</span>
				<span>R$ {maxPrice}</span>
			</div>
		</div>
	</div>

	<div
		class="mx-auto max-w-[60vw] overflow-hidden grid grid-cols-4 gap-y-16 font-title uppercase mb-10"
	>
		{#each filteredGifts as gift}
			<div class="flex flex-col items-center justify-between">
				<div
					class="bg-[url('/gift_bg.svg')] bg-no-repeat bg-cover w-48 h-48 flex items-center justify-center mb-1"
				>
					<img
						src={gift.thumbnail}
						alt="Imagem de um cachorro que não é o Dante"
						class="object-contain h-40 w-40"
					/>
				</div>
				<p class="text-casorioBlue">{gift.name}</p>
				<p class="text-casorioBlack font-body mb-1">R$ {gift.price?.toFixed(2)}</p>
				<a
					href={gift.purchase_link}
					target="_blank"
					rel="noreferrer"
					class="bg-casorioYellow text-white uppercase text-sm p-1 w-28 h-auto text-center"
					>Presentear</a
				>
			</div>
		{/each}
	</div>
</div>
