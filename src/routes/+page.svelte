<script>
	import { bodyColor } from '$lib/bodyColor';

	bodyColor.update(() => 'alt');
</script>

<svelte:head>
	<title>MAYCOELA</title>
</svelte:head>

<div
	class="flex md:flex-row flex-col flex-intial items-center justify-around md:h-[80vh] mr-10 ml-10 md:mr-40 md:ml-36 max-w-[100vw] mt-[-2rem] 2xl:mt-[-4rem] xl:space-x-10 2xl:space-x-0"
>
	<div class="md:pl-10 mb-4 md:mb-0">
		<img
			src="/home_img.png"
			alt="Ilustração das nossas alianças de noivado"
			class="h-full xl:w-[40em] 2xl:w-auto 2xl:h-[40em]"
		/>
	</div>
	<div
		class="w-full md:pl-10 md:w-1/2 2xl:w-2/5 flex justify-between flex-col text-xs md:text-sm tracking-[0.09em] 2xl:leading-5 font-body text-casorioBlack uppercase"
	>
		<p class="mb-6">
			Após quase oito anos, finalmente vamos nos casar! Estamos muito felizes com a chegada deste
			momento tão aguardado, e gostaríamos de compartilhar um pouco da nossa alegria com vocês.
			Nesse site vocês encontram alguns fatos interessantes sobre
			<a class="text-casorioRed" href="/nos">nós</a>, podem conferir informações importantes sobre a
			data e local do <a class="text-casorioRed" href="/casorio">casório</a> ou, se estiverem se
			sentindo generosos, podem nos agraciar com um dos presentes da nossa
			<a class="text-casorioRed" href="/presentes">lista</a>. Espero que possam vir nos prestigiar
			nessa data maravilhosa!
		</p>
		<p class="self-end">Com amor,</p>
		<p class="self-end">Maycon e Rafa</p>
	</div>
</div>
