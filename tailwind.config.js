module.exports = {
	mode: "jit",
	purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			colors: {
				hp: {
					dark: "#0B3C5D",
					light: "#328cc1",
					gold: "#d9b310",
					black: "#1d2731",
					white: "#fafafa",
				},
			},
			fontFamily: {
				lato: ["Lato", "sans-serif"],
				mont: ["Montserrat", "sans-serif"],
				pacifico: ["Pacifico", "cursive"],
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
