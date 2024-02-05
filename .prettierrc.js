const config = {
	plugins: [require.resolve("prettier-plugin-go-template")],
	overrides: [
		{
			files: ["*.html"],
			options: {
				parser: "go-template",
			},
		},
	],
	printWidth: 90,
	tabWidth: 4,
	useTabs: true,
	proseWrap: "always",

	singleAttributePerLine: true,
};

module.exports = config;
