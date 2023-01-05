<script>
	/** @type {import('./$types').PageData} */
	export let data;
	const { gifts } = data;
</script>

<svelte:head>
	<title>Casório do Mayco e da Rafa</title>
</svelte:head>
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
