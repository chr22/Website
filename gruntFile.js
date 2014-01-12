(function() {
	'use-strict';
	
	var modRewrite = require('connect-modrewrite');
	
	module.exports = function(grunt) {	
		require('load-grunt-tasks')(grunt);
		
		// Project configuration.
		grunt.initConfig({
			pkg: grunt.file.readJSON('package.json'),
			uglify: {
				options: {
					banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
				},
				backend: {
					files: {
						'backend.min.js': ['app.js', 'routes/index.js', 'routes/posts.js']
					}	
				},
				frontend: {
					files: {
						'public/build/frontend.min.js': ['public/js/app.js', 'public/js/*.js', 'public/js/controllers/*.js', 'public/js/controllers/comments/*.js', 'public/js/controllers/posts/*.js', 'public/js/controllers/schedules/*.js']
					}
				}			
			},
			sass: {
				dist: {
					files: {
						'public/css/core.css' : 'sass/core.scss'
					}
				}
			},
			watch: {
				css: {
					files: '**/*.scss',
					tasks: ['sass']
				}
			},
			nodemon: {
				dev: {}
			},			
			concurrent: {
				target1: ['watch', 'nodemon'],
				target2: ['watch', 'nodemon', 'uglify']
			}
		});
		
		// Default task(s).
		grunt.registerTask('default', ['concurrent:target1']);
		grunt.registerTask('ugly', ['concurrent:target2']);	
	};
}());

