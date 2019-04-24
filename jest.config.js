module.exports = {
	moduleFileExtensions: ['js', 'json', 'vue'],
	testURL: 'http://localhost/',
	transform: {
		'^.+\\.js$': '<rootDir>/node_modules/babel-jest',
		'.*\\.(vue)$': '<rootDir>/node_modules/vue-jest'
	},
	moduleNameMapper: {
		'^vue$': 'vue/dist/vue.common.js',
		'^src(.*)$': '<rootDir>/src/$1',
		'^test(.*)$': '<rootDir>/test/$1',
		'\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': '<rootDir>/test/mocks/file-mock',
		'\\.(css|less|scss|sass)$': '<rootDir>/test/mocks/style-mock'
	},
	snapshotSerializers: [
		'<rootDir>/node_modules/jest-serializer-vue'
	],
	setupFiles: ['<rootDir>/test/setup']
};
