module.exports = function(grunt) {

	// Project configuration.
	grunt.initConfig({
		uglify: {
			my_target: {
				files: {
					'js/scripts.min.js': ['bower_components/jquery/jquery.min.js', 'js/less-face-it.js', 'js/common.js']
				}
			}
		}
	});

	// Load the plugin that provides the "uglify" task.
	grunt.loadNpmTasks('grunt-contrib-uglify');

	// Default task(s).
	grunt.registerTask('default', ['uglify']);

};
