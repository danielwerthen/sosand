module.exports = function (grunt) {

	grunt.initConfig({
		"imagemagick-resize": {
			dev: {
				from: 'imgs/',
				to: 'imgs/thumbs/',
				files: '*.jpg',
				props: {
					width: 800
				}
			}
		}, 'imagemagick-hisrc': {
			dev: {
				files: 'imgs/*.jpg',
				suffix: ['-2x', '-1x', '-low']
			}
		}
	});

	grunt.loadNpmTasks('grunt-imagemagick');

	grunt.registerTask('resize', ['imagemagick-resize']);
};
