/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/pages/*.tsx', './src/components/*.tsx'],
	theme: {
		extend: {
			fontFamily: {
				poppins: ['Poppins', 'sans-serif'],
			},
		},
	},
	plugins: [],
};
