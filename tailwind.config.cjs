/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		fontFamily: {
			body: ['Varela Round', ...defaultTheme.fontFamily.sans],
			title: ['Nunito', ...defaultTheme.fontFamily.sans]
		},
		extend: {}
	},
	plugins: []
};
