module.exports = function(grunt) {

	grunt.initConfig({
		unused: {
			options: {
				reference: 'img/',
				directory: ['_site/**/*.html'],
				days: 30,
				remove: false, // set to true to delete unused files from project
				reportOutput:'report.txt', // set to false to disable file output
				fail: false // set to true to make the task fail when unused files are found
			}
		}
	});

	grunt.loadNpmTasks('grunt-unused');
	grunt.registerTask('default', ['unused']);

};
