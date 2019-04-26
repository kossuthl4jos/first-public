module.exports = {
	presets: [
		['@babel/preset-env', {
			targets: {
				browsers: ['last 2 versions', 'ie >= 11']
			},
			modules: false
		}]
	],
	env: {
		test: {
			presets: [
				['@babel/preset-env', { targets: { node: 'current' } }]
			]
		}
	}
};
