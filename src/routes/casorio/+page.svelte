<svelte:head>
	<title>MAYCOELA | CASÓRIO</title>
</svelte:head>

<div class="grid grid-cols-3 w-full pl-20 pr-20 h-[80vh]">
	<div class="flex flex-col items-center 2xl:max-h-[80vh] justify-center mt-[-5em]">
		<img src="data.svg" alt="Data do casamento" class="mb-2 md:w-[70%]" />
		<p class="w-[20em] tracing-widest md:text-xs 2xl:text-base text-casorioBlue uppercase">
			Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
			been the industry's standard dummy text ever since the 1500s, when an unknown printer took a
			galley of type and scrambled it to make a type specimen book.
		</p>
	</div>
	<img
		src="/mapa.png"
		alt="Mapa do casamento"
		class="h-auto pl-4 pr-4 2xl:mt-[-10rem] md:mt-[-8rem]"
	/>
	<div class="flex flex-col items-start justify-center max-h-[80vh] mt-[-3em] 2xl:ml-20 md:ml-16">
		<div class="flex flex-col items-start justify-between mb-10">
			<div
				class="flex justify-between items-center text-xl 2xl:text-2xl font-title text-casorioPink uppercase font-bold mb-3 2xl:mb-5"
			>
				<div
					class="border-[2px] w-7 h-7 2xl:w-8 2xl:h-8 border-casorioYellow mr-4 flex items-center justify-center"
				>
					1
				</div>
				<p>Casamento</p>
			</div>
			<p class="uppercase text-casorioBlue font-body md:text-sm 2xl:text-base">
				<span class="font-title font-bold">Cartório</span>
				<br />
				Av Amazonas 1234, Gameleira
				<br />
				16:00
			</p>
		</div>
		<div class="flex flex-col items-start justify-between">
			<div
				class="flex justify-between items-center text-xl 2xl:text-2xl font-title text-casorioPink uppercase font-bold mb-3 2xl:mb-5"
			>
				<div
					class="border-[2px] w-7 h-7 2xl:w-8 2xl:h-8 border-casorioYellow text-center mr-4 flex items-center justify-center"
				>
					2
				</div>
				<p>Comes e Bebes</p>
			</div>
			<p class="uppercase text-casorioBlue font-body md:text-sm 2xl:text-base">
				<span class="font-title font-bold">Chá Comigo</span>
				<br />
				Av Contorno 1234, Funcionários
				<br />
				Após cartório
			</p>
		</div>
	</div>
</div>
