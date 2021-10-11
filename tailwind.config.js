module.exports = {
	mode: "jit",
	purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			spacing: {
				px: "1px",
				"2px": "2px",
				14: "3.5rem",
				18: "4.5rem",
				28: "7rem",
				30: "7.5rem",
				36: "9rem",
				44: "11rem",
			},
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
			zIndex: {
				behind: "-1",
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
