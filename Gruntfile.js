module.exports = function(grunt) {
	'use strict';

	// Project configuration.
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		distdir: 'dist',
		port: grunt.option('port') || 5000,
		connect: {
			server: {
				options: {
					keepalive: true,
					port: '<%= port %>',
					base: './app',
					hostname: '*'
				}
			}
		},

		copy: {
			assets: {
				processContentExclude: 'components',
				files: [
					{
						expand: true,
						dot: true,
						cwd: 'app',
						dest: '<%= distdir %>',
						src: [
								'*.html',
								'images/{,*/}*.{gif,svg,jpg,png}',
								'views/**/*',
								'scripts/shared/libs/*.js',
								'fonts/*'
						]
					}
				]
			}
		},

		compass: { // Compile Sass with Compass
			dist: {
				options: {
					config: 'config.rb',
					sassDir: 'dist/sass',
					cssDir: 'dist/css',
					trace: true,
					debugInfo: false,
					outputStyle: 'compressed'
				}
			},
			server: {
				options: {
					trace: true,
					debugInfo: false,
					config: 'config.rb',
					cssDir: 'app/css',
					sassDir: 'app/sass'
				}
			}
		},

		jshint: {
			options: {
				jshintrc: '.jshintrc'
			},
			files: ['Gruntfile.js', 'app/scripts/*.js', 'app/scripts/**/*.js'],
			test: {
				src: ['test/*.js', 'test/**/*.js'],
				options: {
					jshintrc: 'test/.jshintrc'
				}
			}
		},

		useminPrepare: {
			html: ['app/*.html'],
			options: {
				dest: '<%= distdir %>'
			}
		},

		usemin: {
			html: ['<%= distdir %>/*.html'],
			css: ['<%= distdir %>/css/*.css'],
			options: {
				dirs: ['<%= distdir %>']
			}
		},

		clean: { // Clean build target directory before building
			dist: {
				files: [
					{
						dot: true,
						src: ['.tmp', '<%= distdir %>/*', '!<%= distdir %>/.git*']
					}
				]
			}
		},

		uglify: { // Minify Javascript
			dist: {
				files: {
					'<%= distdir %>/scripts/tests.js': ['<%= distdir %>/scripts/tests.js'],
					'<%= distdir %>/scripts/exercises.js': ['<%= distdir %>/scripts/exercises.js'],
					'<%= distdir %>/scripts/menus.js': ['<%= distdir %>/scripts/menus.js'],
					'<%= distdir %>/scripts/student-menus.js': ['<%= distdir %>/scripts/student-menus.js']
				}
			}
		},

		cssmin: { // Minify CSS
			minify: {
				expand: true,
				cwd: '<%= distdir %>/css',
				src: ['<%= distdir %>/css/*.css', '!*.min.css']
			}
		},

		concat: { // Concatenate JS-files
			options: {
				separator: ';'
			}
		},

		rev: {
			options: {
				encoding: 'utf8',
				algorithm: 'md5',
				length: 8
			},
			files: {
				src: ['<%= distdir %>/css/*.css', '<%= distdir %>/scripts/*.js']
			}
		},

		watch: { // Watch-task with live-reloading in the browser (req. plugin)
			scripts: {
				files: ['<%= jshint.files %>'],
				options: {
					livereload: true
				}
			},
			views: {
				files: ['app/*.html', 'app/views/**/*.html'],
				options: {
					livereload: true
				}
			},
			compass: {
				files: ['app/sass/**/*.scss'],
				tasks: ['compass:server'],
				options: {
					livereload: true
				}
			}
		},

		concurrent: {
			target: {
				tasks: ['connect', 'watch'],
				options: {
					logConcurrentOutput: true
				}
			}
		},

		karma: {
			e2e: {
				configFile: 'test/karma-e2e.conf.js',
				singleRun: false
			},
			unit: {
				configFile: 'test/karma.conf.js',
				singleRun: false,
				background: true
			},
			continuous: {
				configFile: 'test/karma.conf.js',
				singleRun: true
			}
		}

	});

	// Load all npm-tasks specified in package.json
	require('load-grunt-tasks')(grunt);

	// Default task(s).
	grunt.registerTask('default', ['build']);
	grunt.registerTask('server', ['concurrent']);
	grunt.registerTask('test', ['jshint:test', 'karma:continuous']); // unit & browser testing

	// While building releases
	grunt.registerTask('build', [
		'karma:continuous',
		'clean:dist',
		'jshint',
		'useminPrepare',
		'concat',
		'copy:assets',
		'compass:dist',
		'svgmin',
		'imagemin',
		'replace:credentials',
		'replace:debug',
		'replace:debugsrc',
		'cssmin',
		'uglify',
		'rev',
		'usemin'
	]);

};