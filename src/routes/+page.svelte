<script>
	/** @type {import('./$types').PageData} */
	export let data;
	const gifts = data.gifts;
</script>

<svelte:head>
	<title>Casório do Mayco e da Rafa</title>
</svelte:head>
{#each gifts as gift}
	<div class="container mx-auto max-w-sm overflow-hidden flex flex-col items-center">
		<h1 class="text-xl text-red-500">{gift.name}</h1>
		<p>{gift.description}</p>
		<p>Preço: ${gift.price}</p>
		<img src={gift.thumbnail} alt="Imagem de um cachorro que não é o Dante" class="p-5" />
	</div>
{/each}
