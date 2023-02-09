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
		class="group border-[1px] border-casorioBlack hover:bg-casorioPink hover:flex hover:items-center hover:justify-center transition-all"
	>
		<p class="group-hover:block hidden text-white uppercase font-body text-xs p-10">
			colecionamos livros
		</p>
	</div>
	<!-- Row 1 - right -->
	<div
		class="group border-[1px] border-casorioBlack row-span-2 h-[80%] hover:bg-molduraRed hover:flex hover:items-center hover:justify-center transition-all"
	>
		<p class="group-hover:block hidden text-white uppercase font-body text-xs p-10">
			Nos conhecemos na escola
		</p>
	</div>
	<!-- Row 2 - left (blue ovoid) -->
	<div
		class="group border-[1px] border-casorioBlack rounded-[50%] row-span-2 h-[65%] w-[80%] justify-self-center self-center hover:bg-molduraBlue hover:flex hover:items-center hover:justify-center transition-all"
	>
		<p class="group-hover:block hidden text-white uppercase font-body text-xs p-10">
			estamos a quase 8 anos juntos
		</p>
	</div>
	<!-- Row 2 - right (tall yellow rectangle, spans 2 rows) -->
	<div
		class="group border-[1px] border-casorioBlack row-span-2 h-[95%] mt-[-20%] hover:bg-molduraYellow hover:flex hover:items-center hover:justify-center transition-all"
	>
		<p class="group-hover:block hidden text-white uppercase font-body text-xs p-8">
			Ficamos noivos em 2019 com alianças de plástico
		</p>
	</div>
	<!-- Row 3 - left -->
	<div
		class="group border-[1px] border-casorioBlack hover:bg-molduraRed hover:flex hover:items-center hover:justify-center transition-all"
	>
		<p class="group-hover:block hidden text-white uppercase font-body text-xs p-8">
			Nossa cor favorita é o vermelho
		</p>
	</div>
	<!-- Row 4 - center (wide blue rectangle, spans 2 columns) -->
	<div
		class="group border-[1px] border-casorioBlack col-span-2 row-span-2 hover:bg-molduraBlue hover:flex hover:items-center hover:justify-center transition-all"
	>
		<p class="group-hover:block hidden text-white uppercase font-body text-xs p-14">
			Queremos viver aposentados no interior da Inglaterra
		</p>
	</div>
	<!-- Row 5 - left -->
	<div
		class="group border-[1px] border-casorioBlack row-span-2 h-[95%] w-[90%] row-span-2 justify-self-center hover:bg-molduraYellow hover:flex hover:items-center hover:justify-center transition-all"
	>
		<p class="group-hover:block hidden text-white uppercase font-body text-xs p-10">
			somos malucos por ecobags
		</p>
	</div>
	<!-- Row 5 - right -->
	<div
		class="group border-[1px] border-casorioBlack h-full hover:bg-casorioPink mt-[80%] self-center hover:flex hover:items-center hover:justify-center transition-all"
	>
		<p class="group-hover:block hidden text-white uppercase font-body text-xs p-6">
			temos os mesmos livros favoritos
		</p>
	</div>
	<!-- Row 6 - center (wide blue rectangle, spans 2 columns) -->
	<div
		class="group border-[1px] col-span-2 row-span-2 border-casorioBlack hover:bg-molduraBlue hover:flex hover:items-center hover:justify-center transition-all"
	>
		<p class="group-hover:block hidden text-white uppercase font-body text-xs p-10">
			NOSSO GOSTO MUSICAL É MUITO DIFERENTE MAS AO MESMO TEMPO MUITO PARECIDO
		</p>
	</div>
</div>

<!-- Larger screens (iPad + desktop) -->
<div
	class="hidden lg:grid grid-rows-4 grid-cols-4 w-full h-[80vh] 2xl:pl-20 2xl:pr-20 gap-0 cursor-default text-white uppercase font-body"
>
	<!-- Top left -->
	<div
		class="group row-start-1 row-end-3 col-start-1 col-end-2 w-[24em] h-[16em] 2xl:ml-[65%] md:ml-[70%] mt-2 flex items-center justify-center"
	>
		<img
			src="./Galeria_inglaterra.png"
			alt="Ilustração de paisagem do interior da Inglaterra"
			class="group-hover:opacity-50 w-full transition-all"
		/>
		<p
			class="group-hover:opacity-100 opacity-0 absolute flex items-center justify-center md:text-xs 2xl:text-sm p-10 group-hover:bg-molduraBlue transition-all"
		>
			queremos viver aposentados no interior da inglaterra
		</p>
	</div>
	<!-- Top center -->
	<div
		class="group row-start-1 row-end-1 col-start-2 col-end-3 w-[50%] 2xl:ml-[80%] md:ml-[77%] mt-8 h-[70%] flex items-center justify-center"
	>
		<img
			src="./Galeria_vermelho.png"
			alt="Ilustração de um coração"
			class="group-hover:opacity-50 w-full transition-all"
		/>
		<p
			class="group-hover:opacity-100 opacity-0 absolute flex justify-center items-center md:text-xs 2xl:text-sm p-10 transition-all group-hover:bg-molduraRed"
		>
			Nossa cor favorita é o vermelho
		</p>
	</div>
	<!-- Top right tall rectangle -->
	<div
		class="group border-[1px] border-casorioBlack row-start-1 row-end-4 col-start-3 col-end-3 w-[40%] 2xl:ml-[45%] md:ml-[42%] h-[50%] mt-[25%] hover:bg-molduraYellow hover:flex hover:items-center hover:justify-center transition-all"
	>
		<p class="group-hover:block hidden md:text-xs 2xl:text-sm pl-4 pr-4 pt-10 pb-10">
			ficamos noivos em 2019 com alianças de plástico
		</p>
	</div>
	<!-- Top right ovoid -->
	<div
		class="group border-[1px] rounded-[50%] border-casorioBlack row-start-1 row-end-3 col-start-4 col-end-4 2xl:w-[30%] lg:w-[30%] xl:w-[25%] lg:h-[40%] xl:h-[50%] 2xl:ml-[5%] md:ml-0 2xl:mt-10 md:mt-8 hover:bg-molduraBlue hover:flex hover:items-center hover:justify-center transition-all"
	>
		<p class="group-hover:block hidden md:text-xs 2xl:text-sm p-2">estamos a quase 8 anos juntos</p>
	</div>
	<!-- Center right rectangle -->
	<div
		class="group row-start-2 row-end-2 col-start-4 col-end-4 lg:w-[6.5em] lg:h-[6.5em] 2xl:w-[10em] 2xl:h-[10em] 2xl:ml-[-2%] md:ml-[-8%] mt-[13%]  flex items-center justify-center"
	>
		<img
			src="./Galeria_xadrez.png"
			alt="Ilustração de tabuleiro de xadrez"
			class="group-hover:opacity-50 h-full transition-all"
		/>
		<p
			class="absolute group-hover:opacity-100 opacity-0 flex justify-center items-center w-[8.75em] h-[8.75em] md:text-xs 2xl:text-sm p-3 group-hover:bg-casorioPink transition-all"
		>
			jogamos xadrez nas horas vagas
		</p>
	</div>
	<!-- Center ovoid -->
	<div
		class="border-[1px] rounded-[50%] border-casorioBlack row-start-2 row-end-4 col-start-2 col-end-4 2xl:w-[30%] xl:w-[20%] lg:w-[30%] lg:h-[90%] xl:h-[100%] self-center justify-self-center md:mt-[2%] 2xl:mt-0 transition-all"
	/>
	<!-- Center left -->
	<div
		class="group border-[1px] border-casorioBlack row-start-3 row-end-4 col-start-1 col-end-1 w-[50%] h-[100%] 2xl:ml-[40%] md:ml-[50%] mt-[-10%] hover:bg-molduraRed hover:flex hover:items-center hover:justify-center transition-all"
	>
		<p class="group-hover:block hidden md:text-xs 2xl:text-sm p-8">somos malucos por ecobag</p>
	</div>
	<!-- Center left wide rectangle -->
	<div
		class="group row-start-2 row-end-2 col-start-2 col-end-2 w-[10em] h-[10em] 2xl:ml-[10%] md:ml-[5%] 2xl:mt-[20%] xl:mt-[23%] lg:mt-[29%] flex items-center justify-center"
	>
		<img
			src="./Galeria_escola.png"
			alt="Ilustração de fachada de uma escola SESI"
			class="group-hover:opacity-50 h-full transition-all"
		/>
		<p
			class="absolute group-hover:opacity-100 opacity-0 w-[8.5em] h-[8.5em] flex justify-center items-center md:text-xs 2xl:text-sm p-4 group-hover:bg-casorioYellow transition-all"
		>
			nos conhecemos na escola
		</p>
	</div>
	<!-- Bottom left tall rectangle -->
	<div
		class="group row-start-3 row-end-4 col-start-2 col-end-2 w-[40%] h-[60%] 2xl:ml-[10%] md:ml-[20%] 2xl:mt-[35%] md:mt-[15%] flex items-center justify-center"
	>
		<img
			src="./Galeria_musica.png"
			alt="Ilustração de vitrola"
			class="group-hover:opacity-50 w-full transition-all"
		/>
		<p
			class="group-hover:opacity-100 opacity-0 flex absolute items-center justify-center md:text-xs 2xl:text-sm p-2 bg-molduraYellow transition-all"
		>
			nosso gosto musical é muito diferente mas ao mesmo tempo muito igual
		</p>
	</div>
	<!-- Bottom center wide thin rectangle -->
	<div
		class="border-[1px] border-casorioBlack row-start-4 row-end-4 col-start-2 col-end-4 w-[30%] h-[20%] self-center justify-self-center mt-[-10%] md:mt-[-8%] transition-all"
	/>
	<!-- Bottom right wide rectangle -->
	<div
		class="group row-start-3 row-end-4 col-start-3 col-end-4 w-[24em] h-[14em] mt-[10%] 2xl:ml-[40%] md:ml-[38%] flex items-center justify-center"
	>
		<img
			src="./Galeria_livros.png"
			alt="Ilustração de um livro aberto"
			class="w-auto group-hover:opacity-50 transition-all"
		/>
		<p
			class="absolute group-hover:opacity-100 opacity-0 w-[15%] h-[17%] flex items-center justify-center group-hover:bg-molduraBlue md:text-xs 2xl:text-sm p-10 transition-all"
		>
			colecionamos livros
		</p>
	</div>
</div>
