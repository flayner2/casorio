/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme');

const themeYellow = {
	bg: '#FEF6E1',
	bgAlt: '#F4D8E4',
	casorioRed: '#EA2F35',
	casorioBlue: '#0178AE',
	casorioYellow: '#F2C200',
	casorioPink: '#F270A7',
	casorioBlack: '#4D4A44',
	molduraBlue: '#328FB6',
	molduraRed: '#EC5556'
};

const themePink = {
	bg: '#F4D8E4',
	bgAlt: '#FEF6E1',
	casorioRed: '#E12935',
	casorioBlue: '#016AB0',
	casorioYellow: '#E8AA00',
	casorioPink: '#E862A9',
	casorioBlack: '#4A4144',
	molduraBlue: '#328FB6',
	molduraRed: '#EC5556'
};

const theme = 'yellow';

module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		fontFamily: {
			body: ['Varela Round', ...defaultTheme.fontFamily.sans],
			title: ['Nunito', ...defaultTheme.fontFamily.sans]
		},
		extend: {
			colors: theme == 'yellow' ? themeYellow : themePink
		}
	},
	plugins: []
};
