<script lang="ts">
	import '../app.css';
	import { page } from '$app/stores';
	import type { Navbar } from '$lib/types/components';

	let showMenu = false;

	const nav: Navbar = [
		{ title: 'Nós', path: '/nos', preload: 'off' },
		{ title: 'Casório', path: '/casorio', preload: 'off' },
		{ title: 'Lista Presentes', path: '/presentes', preload: 'hover' }
	];

	function toggleNavbar() {
		showMenu = !showMenu;
	}
</script>

<nav
	class="md:ml-20 md:mr-20 mr-5 ml-5 2xl:mr-32 py-8 mx-auto md:flex md:justify-between md:items-center md:h-[20vh] text-casorioBlue font-title uppercase"
	id="top"
>
	<div class="flex items-center justify-between ">
		<div class="flex items-center justify-between ml-16 md:m-0">
			<img src="/brasao.svg" alt="Brasão Maycon e Rafaela" class="mr-5" />
			<a
				class="text-lg leading-5 md:leading-5 md:text-xl hover:text-blue-400 flex flex-col"
				href="/"
			>
				Maycon e <br class="hidden md:block" /> Rafaela
			</a>
		</div>

		<div on:click={toggleNavbar} on:keydown={toggleNavbar} class="flex z-10 md:hidden">
			<button
				type="button"
				class="text-gray-800 hover:text-gray-400 focus:outline-none focus:text-gray-400"
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke-width="2.5"
					class="w-6 h-6 {showMenu ? 'stroke-casorioBlue' : 'stroke-casorioPink'}"
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
		class="flex-col w-screen h-screen fixed top-0 left-0 bg-bgAlt items-center justify-start pt-40 space-y-8 md:pt-0 md:relative md:bg-transparent md:w-auto md:h-auto md:flex md:space-y-0 md:flex-row md:items-center md:space-x-10 2xl:space-x-12 md:mt-0 {showMenu
			? 'flex'
			: 'hidden'}"
	>
		<a
			class="hover:text-blue-400 uppercase text-base 2xl:text-lg {$page.route.id == '/'
				? 'border-b-4 border-casorioPink'
				: 'border-b-4 border-transparent'}"
			href="/"
			on:click={toggleNavbar}>Home</a
		>
		{#each nav as navItem}
			<a
				class="hover:text-blue-400 uppercase text-base 2xl:text-lg {$page.route.id == navItem.path
					? 'border-b-4 border-casorioPink'
					: 'border-b-4 border-transparent'}"
				href={navItem.path}
				data-sveltekit-preload-data={navItem.preload}
				on:click={toggleNavbar}>{navItem.title}</a
			>
		{/each}
	</div>
</nav>

<slot />

<!-- footer, uncomment if needed
<footer
	class="md:max-h-[10vh] md:h-[10vh] relative w-full flex flex-wrap items-center flex-col justify-end font-body text-casorioBlue uppercase text-xs pb-3"
>
	<span>2023</span>
	<span>Maico e Rafa</span>
</footer> -->
