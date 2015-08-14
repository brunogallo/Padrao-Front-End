module.exports = function( grunt ) {

	'use strict';

	// time of tasks
	require('time-grunt')(grunt);

	// Load all tasks
	require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

	grunt.initConfig({
		// importa package manifest - informações
		pkg: grunt.file.readJSON('package.json'),

		// config
		config: {

			// Caminhos padrões
			paths: {
	            sass	:   	'app/assets/scss',
	            js		:     'app/assets/js',
			        ftp		: 		'www',
		          env		: 		{
		            						dev		: 	'app',
		            						dist	: 	'dist'
		          						}
			},
			meta: {
				banner: '/*\n' +
				' *  <%= pkg.title || pkg.name %> - v<%= pkg.version %>\n' +
				' *  <%= pkg.description %>\n' +
				' *  <%= pkg.url %>\n' +
				' *\n' +
				' *  Made by <%= pkg.author.name %>\n' +
				' */\n'
			}
    },
		// cssmin
		cssmin: {
			dist: {
				files:[
					{
						src: '<%= config.paths.env.dist %>/assets/css/main.css',
						dest: '<%= config.paths.env.dist %>/assets/css/main.css'
					}
				]
			}
		},

		// exec commands
		exec: {
		    cmd: 'npm install && bower install && grunt dev'
		},

		// uncss
		uncss: {
		    options: {
		    	htmlroot: 'build',
		    	report: 'gzip'
		    },
			dist: {
				files:{
					'<%= config.paths.env.dist %>/assets/css/main.css': ['<%= config.paths.env.dist %>/index.html']
				}
			}
		},

		// css lint
		csslint: {
			dev: {
				csslintrc: '.csslintrc'
			},
			strict: {
				src: ['<%= config.paths.env.dev %>/assets/css/**/*']
			}
		},

		// compile scss
		compass: {
			dev: {
				options: {
					config: 'config.rb',
					sassDir: '<%= config.paths.sass %>',
					cssDir: '<%= config.paths.env.dev %>/assets/css',
                    outputStyle: 'compact',
                    noLineComments: true
				}
			}
		},

		// watch
		watch: {
			options: {
				// debounceDelay: 500
			},
			sass: {
				files: ['<%= config.paths.sass %>/**/*'],
				tasks: ['compass:dev']
			}
		},

		// concat
		concat: {
			js: {
				src: ['<%= config.paths.env.dev %>/assets/js/**/*.js'],
				dest: '<%= config.paths.env.dist %>/assets/js/main.js'
			},
			css: {
				src: ['<%= config.paths.env.dev %>/assets/css/**/*.css'],
				dest: '<%= config.paths.env.dist %>/assets/css/main.css'
			}
		},

		// jshint
		jshint: {
			dev: {
				src: ['<%= config.paths.js %>/**/*']
			},
			beforeconcat: ['<%= config.paths.env.dev %>/assets/js/**/*.js'],
			afterconcat: ['<%= config.paths.env.dist %>/assets/js/main.js']
		},

    // uglify
		uglify: {
			dist: {
				files: [{
					expand: true,
					cwd: '<%= config.paths.env.dist %>/assets/js',
					src: 'main.js',
					dest: '<%= config.paths.env.dist %>/assets/js'
				}]
			}
		},

		//imagemin
    imagemin: {
			options: {
		    optimizationLevel: 7,
		    progressive: true
			},
	    dist: {
        files: [
					{
	        	expand: true,
	        	cwd: '<%= config.paths.env.dev %>/assets/img/**/',
	        	src: ['**/*.png','**/*.jpg','**/*.jpeg','**/*.gif'],
	        	dest: '<%= config.paths.env.dist %>/assets/img'
	        }
				]
	    }
    },

		//htmlmin
		htmlmin: {
			options: {
				removeCommentsFromCDATA: true,
				removeComments: true,
				collapseWhitespace: true,
				collapseBooleanAttributes: true,
				removeAttributeQuotes: true,
				removeRedundantAttributes: true,
				useShortDoctype: true,
				removeEmptyAttributes: true,
				removeOptionalTags: true,
				removeEmptyElements: false
			},
			dist: {
				files: [{
					expand: true,
					cwd: '<%= config.paths.env.dev %>',
					src: '**/*.html',
					dest: '<%= config.paths.env.dist %>'
				}]
			}
		},

		//copy files
		copy: {
			dist: {
				expand: true,
				dot: true,
				cwd: '<%= config.paths.env.dev %>',
				src: [
					'*.*',
					'assets/fonts/**',
					'assets/videos/**'
				],
				dest: '<%= config.paths.env.dist %>'
			},
		},

		// clean
		clean: {
			dist: {
				src: ['<%= config.paths.env.dist %>']
			}
		},

		// browserSync
		browserSync: {
	    dev: {
        bsFiles: {
          src : [
          	'<%= config.paths.env.dev %>/assets/img/**/*.{png,jpg,gif}',
          	'<%= config.paths.env.dev %>/assets/css/**/*.css',
          	'<%= config.paths.env.dev %>/assets/js/**/*.js',
          	'<%= config.paths.env.dev %>/**/*.html'
          ]
        },
        options: {
          watchTask: true,
					server: {
						baseDir: "app/"
					},
					ghostMode: {
            scroll: true,
            links: true,
            forms: true,
            clicks: true,
            location: true
					}
        }
	    }
		}
	});

	// watch
	grunt.registerTask('dev', ['browserSync', 'watch']);

	// build
	grunt.registerTask('dist', ['clean', 'copy', 'concat', 'uglify', 'cssmin', 'imagemin']);

	// test
	grunt.registerTask('test', ['csslint:dev','jshint:dev']);
};
