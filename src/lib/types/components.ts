export type Navbar = NavbarItem[];

interface NavbarItem {
	title: string;
	path: string;
	preload: true | '' | 'off' | 'hover' | 'tap' | null | undefined;
}
