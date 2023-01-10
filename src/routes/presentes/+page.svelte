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
	const categories = [...new Set(gifts.map((gift) => gift.category))].sort(
		(a, b) => indexes[a] - indexes[b]
	);
	let checkedCategories = Object.fromEntries(categories.map((key) => [key, false]));

	const prices = gifts.map((gift) => gift.price);
	const minPrice = Math.min(...prices);
	const maxPrice = Math.max(...prices);

	let sliderValue: number = maxPrice;

	function filterGifts(price: number, categories: { [k: string]: boolean }): Gifts {
		if (Object.values(categories).every((category) => !category)) {
			return gifts.filter((gift) => gift.price <= price);
		}

		return gifts.filter((gift) => gift.price <= price && categories[gift.category]);
	}

	$: filteredGifts = filterGifts(sliderValue, checkedCategories);

	// Scrolling
	let yOffset = 0;

	// Mobile drawers
	let readmeOpen = false;
	let filterOpen = false;
	let categoriesOpen = false;
	let valueOpen = false;

	function toggleReadme() {
		readmeOpen = !readmeOpen;
	}

	function toggleFilter() {
		filterOpen = !filterOpen;
	}

	function toggleCategories() {
		categoriesOpen = !categoriesOpen;
	}

	function toggleValue() {
		valueOpen = !valueOpen;
	}

	function clearFilters() {
		sliderValue = maxPrice;
		Object.keys(checkedCategories).map((category) => (checkedCategories[category] = false));
	}
</script>

<svelte:window bind:scrollY={yOffset} />

<svelte:head>
	<title>MAYCOELA | LISTA PRESENTES</title>
</svelte:head>

<!-- Readme drawer -->
<div
	class="{readmeOpen
		? 'flex'
		: 'hidden'} z-20 w-screen h-screen fixed top-0 left-0 bg-bgAlt uppercase items-center justify-evenly flex-col"
>
	<div on:click={toggleReadme} on:keydown={toggleReadme} class="flex self-end mr-6 z-20 mb-[-4em]">
		<button
			type="button"
			class="text-gray-800 hover:text-gray-400 focus:outline-none focus:text-gray-400"
		>
			<svg
				viewBox="0 0 19 18"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
				class="w-5 h-5 stroke-casorioPink"
			>
				<line
					x1="1.70711"
					y1="1.29289"
					x2="17.7071"
					y2="17.2929"
					stroke="#E862A9"
					stroke-width="2"
				/>
				<line
					x1="1.28671"
					y1="17.2991"
					x2="16.9953"
					y2="1.31192"
					stroke="#E862A9"
					stroke-width="2"
				/>
			</svg>
		</button>
	</div>
	<div class="flex flex-col items-center justify-start h-[80vh] space-y-2">
		<p class="text-casorioBlue">Leia me</p>
		<div
			class=" bg-[url('post_it.svg')] bg-contain bg-no-repeat bg-center text-xs p-16 pl-20 pr-20 tracking-widest text-casorioBlack"
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
</div>

<!-- Filter drawer -->
<div
	class="{filterOpen
		? 'flex'
		: 'hidden'} z-20 w-screen h-screen fixed top-0 left-0 bg-bgAlt uppercase items-center justify-evenly flex-col"
>
	<div on:click={toggleFilter} on:keydown={toggleFilter} class="flex self-end mr-6 z-20 mb-[-4em]">
		<button
			type="button"
			class="text-gray-800 hover:text-gray-400 focus:outline-none focus:text-gray-400"
		>
			<svg
				viewBox="0 0 19 18"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
				class="w-5 h-5 stroke-casorioPink"
			>
				<line
					x1="1.70711"
					y1="1.29289"
					x2="17.7071"
					y2="17.2929"
					stroke="#E862A9"
					stroke-width="2"
				/>
				<line
					x1="1.28671"
					y1="17.2991"
					x2="16.9953"
					y2="1.31192"
					stroke="#E862A9"
					stroke-width="2"
				/>
			</svg>
		</button>
	</div>
	<div class="flex flex-col items-center justify-start h-[80vh] space-y-10 text-casorioBlue">
		{#if filterOpen && categoriesOpen}
			<!-- Categories drawer -->
			<div class="flex w-[80vw] items-center justify-start space-x-[30%]">
				<img
					src="/arrow_left.svg"
					alt="Ícone de seta para a esquerda"
					class="justify-self-start"
					on:click={toggleCategories}
					on:keydown={toggleCategories}
				/>
				<p class="text-casorioBlue border-b-[2px] border-casorioPink">Categorias</p>
			</div>
			<div class="flex flex-col space-between ml-8 self-start space-y-2">
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
		{:else if filterOpen && valueOpen}
			<!-- Value drawer -->
			<div class="flex w-[80vw] items-center justify-start space-x-[40%]">
				<img
					src="/arrow_left.svg"
					alt="Ícone de seta para a esquerda"
					class="justify-self-start"
					on:click={toggleValue}
					on:keydown={toggleValue}
				/>
				<p class="text-casorioBlue border-b-[2px] border-casorioPink">Valor</p>
			</div>
			<div class="w-full">
				<input
					type="range"
					name="test"
					id="test"
					min={minPrice}
					max={maxPrice}
					step={1}
					bind:value={sliderValue}
				/>
				<div class="w-full flex justify-between text-sm">
					<span>R$ {minPrice}</span>
					<span>R$ {maxPrice}</span>
				</div>
			</div>
		{:else if filterOpen}
			<!-- Filter drawer -->
			<p class="">Filtrar</p>
			<div class="w-[80vw] flex flex-col justify-between h-min space-y-6">
				<div
					class="border-b-[2px] border-casorioPink w-full flex justify-between items-center"
					on:click={toggleCategories}
					on:keydown={toggleCategories}
				>
					<span>Categorias</span>
					<img src="/arrow_right.svg" alt="Ícone de seta para a direita" class="justify-self-end" />
				</div>
				<div
					class="border-b-[2px] border-casorioPink w-full flex justify-between items-center"
					on:click={toggleValue}
					on:keydown={toggleValue}
				>
					<span>Valor</span>
					<img src="/arrow_right.svg" alt="Ícone de seta para a direita" class="justify-self-end" />
				</div>
				<p
					class="self-end text-xs text-casorioPink"
					on:click={clearFilters}
					on:keydown={clearFilters}
				>
					Limpar
				</p>
			</div>
		{/if}
	</div>
</div>

<div
	class="{readmeOpen || filterOpen
		? 'hidden'
		: 'flex'} flex-col items-center lg:items-start lg:flex-row justify-around pt-10 h-full"
>
	<div
		class="flex lg:flex-col 2xl:top-4 2xl:sticky justify-around lg:justify-between items-center space-x-9 mt-[-2em] mb-6 lg:mt-0 lg:mb-0 w-[80%] h-full 2xl:h-[98vh] lg:h-[145vh] uppercase font-body text-casorioBlue text-sm lg:text-base 2xl:w-[24vw] lg:w-[30vw] lg:pl-20 2xl:mr-5"
	>
		<!-- Mobile -->
		<div
			class="lg:hidden border-[2px] border-casorioPink flex justify-around items-center pr-3 pl-3 p-0.5 cursor-pointer w-36"
			on:click={toggleReadme}
			on:keydown={toggleReadme}
		>
			<img src="/aliancas.svg" alt="Ícone de alianças" class="w-[1.1rem] mb-0.5" />
			<p>Leia me</p>
		</div>
		<div
			class="lg:hidden border-[2px] border-casorioPink flex justify-around items-center pr-4 pl-4 p-0.5 cursor-pointer w-36"
			on:click={toggleFilter}
			on:keydown={toggleFilter}
		>
			<img src="/filtros.svg" alt="Ícone de alianças" class="w-3" />
			<p>Filtrar</p>
		</div>

		<!-- Desktop -->
		<div class="hidden lg:block border-[3px] border-casorioPink w-full p-5 2xl:pl-12 lg:pl-10 pb-8">
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
			class="hidden lg:block border-[3px] border-casorioPink w-full pt-5 2xl:pl-12 2xl:pr-12 lg:pl-10 lg:pr-10 pb-8"
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
			class="hidden lg:flex bg-[url('post_it.svg')] bg-contain bg-no-repeat 2xl:w-[25vw] 2xl:h-[60vh] lg:w-[30vw] lg:h-[85vh] bg-center text-xs flex-col justify-center items-center p-16 pl-20 pr-20 tracking-widest 2xl:leading-6 text-casorioBlack"
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
		<div class="flex justify-center items-center 2xl:w-[65vw] lg:w-[59vw] h-min mx-auto">
			<div
				class="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full border-casorioBlue"
				role="status"
			>
				<span class="hidden">Loading...</span>
			</div>
		</div>
	{:else}
		<div
			class="w-full pr-4 pl-4 lg:mr-0 lg:ml-0 2xl:w-[65vw] lg:w-[62vw] overflow-hidden grid xl:grid-cols-4 grid-cols-2 gap-y-16 font-title lg:text-base text-sm uppercase mb-10 h-min"
		>
			{#each filteredGifts as gift}
				<div class="flex flex-col items-center justify-between">
					<div
						class="bg-[url('/gift_bg.svg')] bg-no-repeat bg-cover w-32 h-32 lg:w-48 lg:h-48 flex items-center justify-center mb-1"
					>
						<img
							src={gift.thumbnail}
							alt={gift.name}
							class="object-contain w-28 h-28 lg:h-40 lg:w-40"
						/>
					</div>
					<p class="text-casorioBlue text-center">{gift.name}</p>
					<p class="text-casorioBlack font-body mb-1">R$ {gift.price.toFixed(2)}</p>
					<a
						href={gift.purchase_link}
						target="_blank"
						rel="noreferrer"
						class="bg-casorioYellow text-white uppercase lg:text-sm text-xs lg:pl-1 lg:pr-1 p-1 pl-2 pr-2 lg:w-28 w-min h-auto text-center"
						>Presentear</a
					>
				</div>
			{/each}
		</div>
	{/if}
</div>

{#if yOffset >= 100}
	<a
		class="sticky bottom-4 lg:left-[96.5%] left-[90%] content-none rounded-full bg-transparent border-casorioPink border-[2px] w-min h-min flex items-center"
		href="#top"
	>
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 24 24"
			class="w-8 h-8 fill-casorioPink stroke-casorioPink stroke-0"
		>
			<path
				fill-rule="evenodd"
				d="M12 20.25a.75.75 0 01-.75-.75V6.31l-5.47 5.47a.75.75 0 01-1.06-1.06l6.75-6.75a.75.75 0 011.06 0l6.75 6.75a.75.75 0 11-1.06 1.06l-5.47-5.47V19.5a.75.75 0 01-.75.75z"
				clip-rule="evenodd"
			/>
		</svg>
	</a>
{/if}
