/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.tsx"],
	theme: {
		extend: {
			fontFamily: {
				poppins: ["Poppins", "sans-serif"],
			},
			colors: {
				"primary": "rgb(60,80,224)",
				"secondary": "rgb(128,202,238)",
				"meta-3": "#10b981",
				"meta-4": "rgb(49,61,74)",
				"meta-5": "rgb(37,154,230)",
				"boxdark": "rgb(36,48,63)",
				"boxdark-2": "rgb(26,34,44)",
				"strokedark": "rgb(46,58,71)",
				"stroke": "rgb(226,232,240)",
				"bodydark": "rgb(174,183,192)",
			},
		},
	},
	plugins: [],
};
