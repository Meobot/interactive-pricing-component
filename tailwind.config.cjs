/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
	  "./index.html",
	  "./src/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
	  extend: {
		backgroundImage: {
			'Header-bg': "url('/images/pattern-circles.svg')"
		},
		colors: {
			softCyan: "hsl(174, 77%, 80%)",
			strongCyan: "hsl(174, 86%, 45%)",
			lightGrayishRed: "hsl(14, 92%, 95%)",
			lightRed: "hsl(15, 100%, 70%)",
			paleBlue: "hsl(226, 100% 87%)",
			veryPaleBlue: "hsl(230, 100%, 99%)",
			veryLightGrayishBlue: "hsl(224, 65%, 95%)",
			lightGrayishBlue: "hsl(223, 50%, 87%)",
			grayishBlue: "hsl(225, 20%, 60%)",
			desaturatedBlue: "hsl(227, 35%, 25%)",
		},
		fontFamily: {
			manrope: ["Manrope", "sans-serif"],
		}
	  },
	},
	plugins: [],
  }