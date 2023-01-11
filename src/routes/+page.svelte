<script>
	import { bodyColor } from '$lib/bodyColor';

	bodyColor.update(() => 'alt');
</script>

<svelte:head>
	<title>MAYCOELA</title>
</svelte:head>

<div
	class="flex lg:flex-row flex-col flex-intial items-center justify-around mb-8 lg:mb-0 lg:h-[80vh] mr-10 ml-10 lg:ml-0 xl:mr-40 xl:ml-36 max-w-[100vw] mt-[-2rem] md:mt-[-4rem] lg:mt-[-4rem] xl:mt-[-2rem] 2xl:mt-[-4rem] xl:space-x-10 2xl:space-x-0"
>
	<div class="lg:pl-10 mb-4 lg:mb-8 xl:mb-0">
		<img
			src="/home_img.png"
			alt="Ilustração das nossas alianças de noivado"
			class="h-full md:w-[40em] lg:w-[45em] xl:w-[40em] 2xl:w-auto 2xl:h-[40em]"
		/>
	</div>
	<div
		class="w-full md:w-[70%] lg:pl-8 lg:mr-4 xl:mr-0 xl:pl-10 lg:w-1/2 2xl:w-2/5 flex justify-between flex-col text-xs xl:text-sm tracking-[0.09em] 2xl:leading-5 font-body text-casorioBlack uppercase"
	>
		<p class="mb-6">
			Após quase oito anos, finalmente vamos nos casar! Estamos muito felizes com a chegada deste
			momento tão aguardado, e gostaríamos de compartilhar um pouco da nossa alegria com vocês.
			Nesse site vocês encontram alguns fatos interessantes sobre
			<a class="text-casorioRed hover:text-casorioBlue transition-all" href="/nos">nós</a>, podem
			conferir informações importantes sobre a data e local do
			<a class="text-casorioRed hover:text-casorioBlue transition-all" href="/casorio">casório</a>
			ou, se estiverem se sentindo generosos, podem nos agraciar com um dos presentes da nossa
			<a class="text-casorioRed hover:text-casorioBlue transition-all" href="/presentes">lista</a>.
			Espero que possam vir nos prestigiar nessa data maravilhosa!
		</p>
		<p class="self-end">Com amor,</p>
		<p class="self-end">Maycon e Rafa</p>
	</div>
</div>
