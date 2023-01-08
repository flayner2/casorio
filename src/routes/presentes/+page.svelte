<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
	const { gifts } = data;

	let sliderValue: number;

	function setSliderValue(event: Event) {
		const target = event.target as HTMLInputElement;
		sliderValue = parseInt(target.value);
	}
</script>

<svelte:head>
	<title>Casório do Mayco e da Rafa</title>
</svelte:head>

<input
	type="range"
	name="test"
	id="test"
	min={0}
	max={5000}
	step={1}
	value={sliderValue}
	on:change={setSliderValue}
/>

{#each gifts as gift}
	<div class="container mx-auto max-w-sm overflow-hidden flex flex-col items-center">
		<a
			class="text-xl text-red-500 hover:text-red-700"
			href={gift.purchase_link}
			target="_blank"
			rel="noreferrer">{gift.name}</a
		>
		<p>Categoria: {gift.category}</p>
		<p>Preço: ${gift.price?.toFixed(2)}</p>
		<img src={gift.thumbnail} alt="Imagem de um cachorro que não é o Dante" class="p-5" />
	</div>
{/each}
