<script>
	import { bodyColor } from '$lib/bodyColor';

	bodyColor.update(() => '');
</script>

<svelte:head>
	<title>MAYCOELA | CASÓRIO</title>
</svelte:head>

<div
	class="grid grid-rows-3 justify-items-center gap-y-10 md:gap-y-5 lg:gap-y-0 lg:grid-cols-3 lg:grid-rows-1 w-full xl:pl-20 xl:pr-20 md:mt-[-4em] xl:h-[80vh] lg:h-[50vh] 2xl:h-[70vh]"
>
	<div
		class="flex flex-col items-center w-[90%] lg:w-auto justify-center lg:self-center space-y-4 lg:space-y-0 xl:mr-0 lg:mr-[-4em]"
	>
		<img src="/data.svg" alt="Data do casamento" class="lg:mb-2 w-[80%] md:w-[50%] lg:w-[70%]" />
		<p
			class="w-[67%] md:w-[65%] md:text-sm lg:text-xs lg:tracking-widest xl:text-[0.8rem] lg:w-[20em] trackng-widest text-xs 2xl:text-base text-casorioBlue uppercase"
		>
			Nosso plano é bem simples: vamos casar no cartório, contando com a presença dos nosso queridos
			convidados que tenham disponibilidade para nos acompanhar, e depois iremos fazer uma
			comemoração simples numa cafeteria próxima. Aqui você pode conferir um mapa da nossa rota, a
			data, os horários e os locais planejados.
		</p>
	</div>
	<img
		src="/mapa.png"
		alt="Mapa do casamento"
		class="w-[60%] md:w-[45%] lg:w-auto xl:pl-4 xl:pr-4 lg:self-center"
	/>
	<div
		class="flex flex-col md:flex-row lg:flex-col items-start md:justify-between md:space-x-10 lg:space-x-0 justify-center lg:justify-center self-start lg:self-center 2xl:ml-20 xl:ml-16"
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
			<p
				class="uppercase text-casorioBlue font-body text-xs xl:text-[0.8rem] xl:tracking-widest md:text-sm 2xl:text-base"
			>
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
			<p
				class="uppercase text-casorioBlue font-body text-xs md:text-sm xl:text-[0.8rem] xl:tracking-widest 2xl:text-base"
			>
				<span class="font-title font-bold">Chá Comigo</span>
				<br />
				Av Contorno 1234, Funcionários
				<br />
				Após cartório
			</p>
		</div>
	</div>
</div>
