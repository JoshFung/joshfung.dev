/** @type {import('tailwindcss').Config}*/
const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			fontFamily: {
				stardom: ['Stardom', 'serif'],
				switzer: ['Switzer var', 'sans-serif']
			},
			colors: {
				'raisin-black': '#252323',
				'slate-grey': '#70798C',
				isabelline: '#F5F1ED',
				ivory: '#FFFDED',
				'yellow-isabelline': '#FFFFE3',
				bone: '#DAD2BC',
				khaki: '#A99985',
				'rich-black': '#0D1B2A',
				'oxford-blue': '#1B263B',
				'yinmn-blue': '#415A77'
			}
		}
	},

	plugins: []
};

module.exports = config;
