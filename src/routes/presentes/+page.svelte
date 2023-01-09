<script lang="ts">
	import type { PageData } from './$types';
	import type { Gifts } from '$lib/types/database';

	export let data: PageData;
	const { gifts } = data;

	const indexes: { [k: string]: number } = {
		cozinha: 0,
		casa: 1,
		quarto: 2,
		decoração: 3,
		banheiro: 4
	};
	const categories = [
		...new Set(
			gifts.map((gift) => gift.category).filter((category): category is string => category !== null)
		)
	].sort((a, b) => indexes[a] - indexes[b]);
	let checkedCategories = Object.fromEntries(categories.map((key) => [key, false]));

	const prices = gifts.map((gift) => gift.price).filter((price): price is number => price !== null);
	const minPrice = Math.min(...prices);
	const maxPrice = Math.max(...prices);

	let sliderValue: number = maxPrice;

	function filterGifts(price: number, categories: { [k: string]: boolean }): Gifts {
		if (Object.values(categories).every((category) => !category)) {
			return gifts.filter((gift) => gift.price !== null && gift.price <= price);
		}

		return gifts.filter(
			(gift) =>
				gift.price !== null &&
				gift.price <= price &&
				gift.category !== null &&
				categories[gift.category]
		);
	}

	$: filteredGifts = filterGifts(sliderValue, checkedCategories);

	// Scrolling
	let yOffset = 0;
</script>

<svelte:window bind:scrollY={yOffset} />

<svelte:head>
	<title>Casório do Mayco e da Rafa</title>
</svelte:head>

<div class="flex justify-around pt-10 h-full">
	<div
		class="flex flex-col top-4 2xl:sticky justify-between items-center 2xl:h-[98vh] md:h-[145vh] uppercase font-body text-casorioBlue 2xl:w-[24vw] md:w-[30vw] pl-20 2xl:mr-5"
	>
		<div class="border-[3px] border-casorioPink w-full p-5 2xl:pl-12 md:pl-10 pb-8">
			<p class="mb-5 tracking-widest text-lg">Categoria:</p>
			<div class="grid grid-cols-2">
				{#each categories as category}
					<div class="h-min">
						<input
							type="checkbox"
							name={category}
							id={category}
							bind:checked={checkedCategories[category]}
						/>
						<label for={category} class="text-sm tracking-widest">{category}</label>
					</div>
				{/each}
			</div>
		</div>
		<div
			class=" border-[3px] border-casorioPink w-full pt-5 2xl:pl-12 2xl:pr-12 md:pl-10 md:pr-10 pb-8"
		>
			<p class="mb-5 tracking-widest text-lg">Valor:</p>
			<input
				type="range"
				name="test"
				id="test"
				min={minPrice}
				max={maxPrice}
				step={1}
				bind:value={sliderValue}
			/>
			<div class="w-full flex justify-between">
				<span>R$ {minPrice}</span>
				<span>R$ {maxPrice}</span>
			</div>
		</div>
		<div
			class="bg-[url('post_it.svg')] bg-contain bg-no-repeat 2xl:w-[25vw] 2xl:h-[60vh] md:w-[30vw] md:h-[85vh] bg-center text-xs flex flex-col justify-center items-center p-16 pl-20 pr-20 tracking-widest 2xl:leading-6 text-casorioBlack"
		>
			<p class="mt-6">
				Essa lista de presentes é apenas um conjunto de ideias para ajudar àqueles que desejam nos
				presentear de alguma forma. Obviamente, ninguém <span class="text-casorioRed">precisa</span>
				comprar nada, mas ficaremos imensamente gratos com a generosidade de quem puder. Tentamos organizar
				essa lista com uma grande variedade de categorias e faixas de preço. Os botões de compra são
				links para fazer um <span class="text-casorioRed">pix</span> para o Maycon no valor do produto.
				Muito obrigado por apoiarem nossa nova jornada juntos!
			</p>
			<p class="self-end mt-6 pr-2">Com amor,</p>
			<p class="self-end pr-2">Rafaela e Maycon</p>
		</div>
	</div>

	{#if !gifts}
		<div class="flex justify-center items-center 2xl:w-[65vw] md:w-[59vw] h-min mx-auto">
			<div
				class="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full border-casorioBlue"
				role="status"
			>
				<span class="hidden">Loading...</span>
			</div>
		</div>
	{:else}
		<div
			class="mx-auto 2xl:w-[65vw] md:w-[59vw] overflow-hidden grid xl:grid-cols-4 grid-cols-2 gap-y-16 font-title uppercase mb-10 h-min"
		>
			{#each filteredGifts as gift}
				<div class="flex flex-col items-center justify-between">
					<div
						class="bg-[url('/gift_bg.svg')] bg-no-repeat bg-cover w-48 h-48 flex items-center justify-center mb-1"
					>
						<img src={gift.thumbnail} alt={gift.name} class="object-contain h-40 w-40" />
					</div>
					<p class="text-casorioBlue text-center">{gift.name}</p>
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
	{/if}
</div>

{#if yOffset >= 100}
	<a
		class="sticky bottom-4 left-[96.5%] content-none rounded-full bg-casorioBlue w-min h-min flex items-center"
		href="#top"
	>
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" class="w-8 h-8">
			<path
				fill-rule="evenodd"
				d="M12 20.25a.75.75 0 01-.75-.75V6.31l-5.47 5.47a.75.75 0 01-1.06-1.06l6.75-6.75a.75.75 0 011.06 0l6.75 6.75a.75.75 0 11-1.06 1.06l-5.47-5.47V19.5a.75.75 0 01-.75.75z"
				clip-rule="evenodd"
			/>
		</svg>
	</a>
{/if}
