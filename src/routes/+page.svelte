<script>
	import { bodyColor } from '$lib/bodyColor';

	bodyColor.update(() => 'alt');
</script>

<svelte:head>
	<title>MAYCOELA</title>
</svelte:head>

<div
	class="flex md:flex-row flex-col flex-intial items-center justify-around md:h-[80vh] mr-10 ml-10 md:mr-40 md:ml-36 max-w-[100vw] mt-[-2rem] 2xl:mt-[-4rem]"
>
	<div class="md:pl-10 mb-4 md:mb-0">
		<img
			src="/home_img.png"
			alt="Ilustração das nossas alianças de noivado"
			class="h-full 2xl:h-[40em]"
		/>
	</div>
	<div class="w-full md:pl-10 md:w-1/2 2xl:w-2/5">
		<p
			class="text-xs md:text-sm tracking-[0.09em] 2xl:leading-5 font-body text-casorioBlack uppercase"
		>
			Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
			been the industry's standard dummy text ever since the 1500s, when an unknown printer took a
			galley of type and scrambled it to make a type specimen book. It has survived not only five
			centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
		</p>
	</div>
</div>
