<script>
	import { bodyColor } from '$lib/bodyColor';

	bodyColor.update(() => '');
</script>

<svelte:head>
	<title>MAYCOELA | NÓS</title>
</svelte:head>

<!-- NOTES:
-2xl: 1920x1080
-xl: 1366x768
-lg: iPad
-sm or nothing: mobile
-->

<!-- Mobile -->
<div
	class="grid grid-cols-2 auto-rows-fr lg:hidden w-full md:w-[90%] md:mx-auto pl-8 pr-8 h-[180vh] gap-x-5 gap-y-4 mb-10 cursor-default"
>
	<!-- Row 1 - left -->
	<div
		class="group border-[1px] border-casorioBlack hover:bg-casorioPink hover:flex hover:items-center hover:justify-center"
	>
		<p class="group-hover:block hidden text-white uppercase font-body text-xs p-10">
			colecionamos livros
		</p>
	</div>
	<!-- Row 1 - right -->
	<div
		class="group border-[1px] border-casorioBlack row-span-2 h-[80%] hover:bg-molduraRed hover:flex hover:items-center hover:justify-center"
	>
		<p class="group-hover:block hidden text-white uppercase font-body text-xs p-10">
			Nos conhecemos na escola
		</p>
	</div>
	<!-- Row 2 - left (blue ovoid) -->
	<div
		class="group border-[1px] border-casorioBlack rounded-[50%] row-span-2 h-[65%] w-[80%] justify-self-center self-center hover:bg-molduraBlue hover:flex hover:items-center hover:justify-center"
	>
		<p class="group-hover:block hidden text-white uppercase font-body text-xs p-10">
			estamos a quase 8 anos juntos
		</p>
	</div>
	<!-- Row 2 - right (tall yellow rectangle, spans 2 rows) -->
	<div
		class="group border-[1px] border-casorioBlack row-span-2 h-[95%] mt-[-20%] hover:bg-molduraYellow hover:flex hover:items-center hover:justify-center"
	>
		<p class="group-hover:block hidden text-white uppercase font-body text-xs p-8">
			Ficamos noivos em 2019 com alianças de plástico
		</p>
	</div>
	<!-- Row 3 - left -->
	<div
		class="group border-[1px] border-casorioBlack hover:bg-molduraRed hover:flex hover:items-center hover:justify-center"
	>
		<p class="group-hover:block hidden text-white uppercase font-body text-xs p-8">
			Nossa cor favorita é o vermelho
		</p>
	</div>
	<!-- Row 4 - center (wide blue rectangle, spans 2 columns) -->
	<div
		class="group border-[1px] border-casorioBlack col-span-2 row-span-2 hover:bg-molduraBlue hover:flex hover:items-center hover:justify-center"
	>
		<p class="group-hover:block hidden text-white uppercase font-body text-xs p-14">
			Queremos viver aposentados no interior da Inglaterra
		</p>
	</div>
	<!-- Row 5 - left -->
	<div
		class="group border-[1px] border-casorioBlack row-span-2 h-[95%] w-[90%] row-span-2 justify-self-center hover:bg-molduraYellow hover:flex hover:items-center hover:justify-center"
	>
		<p class="group-hover:block hidden text-white uppercase font-body text-xs p-10">
			somos malucos por ecobags
		</p>
	</div>
	<!-- Row 5 - right -->
	<div
		class="group border-[1px] border-casorioBlack h-full hover:bg-casorioPink mt-[80%] self-center hover:flex hover:items-center hover:justify-center"
	>
		<p class="group-hover:block hidden text-white uppercase font-body text-xs p-6">
			temos os mesmos livros favoritos
		</p>
	</div>
	<!-- Row 6 - center (wide blue rectangle, spans 2 columns) -->
	<div
		class="group border-[1px] col-span-2 row-span-2 border-casorioBlack hover:bg-molduraBlue hover:flex hover:items-center hover:justify-center"
	>
		<p class="group-hover:block hidden text-white uppercase font-body text-xs p-10">
			NOSSO GOSTO MUSICAL É MUITO DIFERENTE MAS AO MESMO TEMPO MUITO PARECIDO
		</p>
	</div>
</div>

<!-- Larger screens (iPad + desktop) -->
<div
	class="hidden lg:grid grid-rows-4 grid-cols-4 w-full h-[80vh] 2xl:pl-20 2xl:pr-20 gap-0 cursor-default"
>
	<!-- Top left -->
	<div
		class="group border-[1px] border-casorioBlack row-start-1 row-end-3 col-start-1 col-end-2 w-[95%] h-[60%] 2xl:ml-[65%] md:ml-[70%] mt-10 hover:bg-molduraBlue hover:flex hover:items-center hover:justify-center"
	>
		<p class="group-hover:block hidden text-white uppercase font-body md:text-xs 2xl:text-sm p-10">
			queremos viver aposentados no interior da inglaterra
		</p>
	</div>
	<!-- Top center -->
	<div
		class="group border-[1px] border-casorioBlack row-start-1 row-end-1 col-start-2 col-end-3 w-[50%] 2xl:ml-[80%] md:ml-[77%] mt-8 h-[70%] hover:bg-molduraRed hover:flex hover:items-center hover:justify-center"
	>
		<p class="group-hover:block hidden text-white uppercase font-body md:text-xs 2xl:text-sm p-10">
			Nossa cor favorita é o vermelho
		</p>
	</div>
	<!-- Top right tall rectangle -->
	<div
		class="group border-[1px] border-casorioBlack row-start-1 row-end-4 col-start-3 col-end-3 w-[40%] 2xl:ml-[45%] md:ml-[42%] h-[50%] mt-[25%] hover:bg-molduraYellow hover:flex hover:items-center hover:justify-center"
	>
		<p
			class="group-hover:block hidden text-white uppercase font-body md:text-xs 2xl:text-sm pl-4 pr-4 pt-10 pb-10"
		>
			ficamos noivos em 2019 com alianças de plástico
		</p>
	</div>
	<!-- Top right ovoid -->
	<div
		class="group border-[1px] rounded-[50%] border-casorioBlack row-start-1 row-end-3 col-start-4 col-end-4 2xl:w-[30%] lg:w-[30%] xl:w-[25%] lg:h-[40%] xl:h-[50%] 2xl:ml-[5%] md:ml-0 2xl:mt-10 md:mt-8 hover:bg-molduraBlue hover:flex hover:items-center hover:justify-center"
	>
		<p class="group-hover:block hidden text-white uppercase font-body md:text-xs 2xl:text-sm p-2">
			estamos a quase 8 anos juntos
		</p>
	</div>
	<!-- Center right rectangle -->
	<div
		class="group border-[1px] border-casorioBlack row-start-2 row-end-2 col-start-4 col-end-4 w-[40%] 2xl:ml-[-2%] md:ml-[-8%] h-[80%] mt-[13%] hover:bg-casorioPink hover:flex hover:items-center hover:justify-center"
	>
		<p class="group-hover:block hidden text-white uppercase font-body md:text-xs 2xl:text-sm p-3">
			temos os mesmos livros favoritos
		</p>
	</div>
	<!-- Center ovoid -->
	<div
		class="border-[1px] rounded-[50%] border-casorioBlack row-start-2 row-end-4 col-start-2 col-end-4 2xl:w-[30%] xl:w-[20%] lg:w-[30%] lg:h-[90%] xl:h-[100%] self-center justify-self-center md:mt-[2%] 2xl:mt-0"
	/>
	<!-- Center left -->
	<div
		class="group border-[1px] border-casorioBlack row-start-3 row-end-4 col-start-1 col-end-1 w-[50%] h-[100%] 2xl:ml-[40%] md:ml-[50%] mt-[-10%] hover:bg-molduraRed hover:flex hover:items-center hover:justify-center"
	>
		<p class="group-hover:block hidden text-white uppercase font-body md:text-xs 2xl:text-sm p-8">
			nos conhecemos na escola
		</p>
	</div>
	<!-- Center left wide rectangle -->
	<div
		class="group border-[1px] border-casorioBlack row-start-2 row-end-2 col-start-2 col-end-2 w-[50%] h-[70%] 2xl:ml-[-5%] md:ml-[5%] 2xl:mt-[20%] xl:mt-[23%] lg:mt-[29%] hover:bg-casorioPink hover:flex hover:items-center hover:justify-center"
	>
		<p class="group-hover:block hidden text-white uppercase font-body md:text-xs 2xl:text-sm p-4">
			colecionamos livros
		</p>
	</div>
	<!-- Bottom left tall rectangle -->
	<div
		class="group border-[1px] border-casorioBlack row-start-3 row-end-4 col-start-2 col-end-2 w-[40%] h-[130%] 2xl:ml-[10%] md:ml-[20%] 2xl:mt-[10%] md:mt-[15%] hover:bg-molduraYellow hover:flex hover:items-center hover:justify-center"
	>
		<p class="group-hover:block hidden text-white uppercase font-body md:text-xs 2xl:text-sm p-2">
			somos malucos por ecobag
		</p>
	</div>
	<!-- Bottom center wide thin rectangle -->
	<div
		class="border-[1px] border-casorioBlack row-start-4 row-end-4 col-start-2 col-end-4 w-[30%] h-[20%] self-center justify-self-center mt-[-10%] md:mt-[-8%]"
	/>
	<!-- Bottom right wide rectangle -->
	<div
		class="group border-[1px] border-casorioBlack row-start-3 row-end-4 col-start-3 col-end-4 w-[80%] h-[90%] mt-[10%] 2xl:ml-[40%] md:ml-[38%] hover:bg-molduraBlue hover:flex hover:items-center hover:justify-center"
	>
		<p class="group-hover:block hidden text-white uppercase font-body md:text-xs 2xl:text-sm p-10">
			nosso gosto musical é muito diferente mas ao mesmo tempo muito igual
		</p>
	</div>
</div>
