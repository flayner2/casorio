<svelte:head>
	<title>MAYCOELA | CASÓRIO</title>
</svelte:head>

<div
	class="grid grid-rows-3 justify-items-center gap-y-10 lg:gap-y-0 lg:grid-cols-3 lg:grid-rows-1 w-full lg:pl-20 lg:pr-20 xl:h-[80vh] lg:h-[50vh]"
>
	<div
		class="flex flex-col items-center w-[90%] lg:w-auto 2xl:max-h-[80vh] justify-center lg:mt-[-5em] space-y-4 lg:space-y-0"
	>
		<img src="/data.svg" alt="Data do casamento" class="lg:mb-2 w-[80%] lg:w-[70%]" />
		<p class="w-[67%] lg:w-[20em] tracing-widest text-xs 2xl:text-base text-casorioBlue uppercase">
			Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
			been the industry's standard dummy text ever since the 1500s, when an unknown printer took a
			galley of type and scrambled it to make a type specimen book.
		</p>
	</div>
	<img
		src="/mapa.png"
		alt="Mapa do casamento"
		class="w-[60%] lg:w-auto lg:h-auto lg:pl-4 lg:pr-4 lg:self-center"
	/>
	<div
		class="flex flex-col items-start justify-center max-h-[80vh] mt-[-3em] 2xl:ml-20 xl:ml-16 lg:ml-8"
	>
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
			<p class="uppercase text-casorioBlue font-body text-xs lg:text-sm 2xl:text-base">
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
			<p class="uppercase text-casorioBlue font-body text-xs lg:text-sm 2xl:text-base">
				<span class="font-title font-bold">Chá Comigo</span>
				<br />
				Av Contorno 1234, Funcionários
				<br />
				Após cartório
			</p>
		</div>
	</div>
</div>
