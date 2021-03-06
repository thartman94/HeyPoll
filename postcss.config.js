const purgecss = [
	"@fullhuman/postcss-purgecss",
	{
		content: ["./components/**/*.js", "./pages/**/*.js"],
		defaultExtractor: (content) => content.match(/[\w-/:]+(?<!:)/g) || [],
	},
];
module.exports = {
	plugins: [
		"postcss-import",
		"tailwindcss/nesting",
		"tailwindcss",
		"autoprefixer",
		...(process.env.NODE_ENV === "production" ? [purgecss] : []),
	],
};
