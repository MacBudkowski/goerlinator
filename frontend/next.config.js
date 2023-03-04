/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
};

module.exports = {
	env: {
	},
	css: {
		modules: true,
		loaderOptions: {
			postcss: {
			plugins: [
				// add any PostCSS plugins you need here
			],
			},
		},
		},
	},


module.exports = nextConfig;
