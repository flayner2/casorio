<script>
	import '../app.css';

	let showMenu = false;

	function toggleNavbar() {
		showMenu = !showMenu;
	}
</script>

<nav class="px-6 py-8 mx-auto md:flex md:justify-between md:items-center md:h-[10vh]">
	<div class="flex items-center justify-between">
		<a
			class="text-xl font-bold text-gray-800 md:text-xl hover:text-blue-400 flex md:flex-col"
			href="/"
		>
			<span>Maycon & <br class="hidden md:block" /> Rafaela</span>
		</a>

		<div on:click={toggleNavbar} on:keydown={toggleNavbar} class="flex md:hidden">
			<button
				type="button"
				class="text-gray-800 hover:text-gray-400 focus:outline-none focus:text-gray-400"
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke-width="1.5"
					stroke="currentColor"
					class="w-6 h-6"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
					/>
				</svg>
			</button>
		</div>
	</div>

	<div
		class="flex-col mt-8 space-y-4 md:flex md:space-y-0 md:flex-row md:items-center md:space-x-10 md:mt-0 {showMenu
			? 'flex'
			: 'hidden'}"
	>
		<a class="text-gray-800 hover:text-blue-400 uppercase" href="/nos">Nós</a>
		<a class="text-gray-800 hover:text-blue-400 uppercase" href="/casorio">Casório</a>
		<a
			class="text-gray-800 hover:text-blue-400 uppercase"
			href="/presentes"
			data-sveltekit-preload-data="hover">Lista de Presentes</a
		>
	</div>
</nav>
<slot />

<footer
	class="md:h-[10vh] relative w-full flex flex-wrap items-center flex-col justify-center bg-green-500"
>
	<span>Maico e Rafa</span>
	<span>2023</span>
</footer>
