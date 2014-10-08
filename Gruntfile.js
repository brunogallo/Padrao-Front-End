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
	            sass:   	'app/assets/sass',
	            js:     	'app/assets/js',
		        ftp: 		'www',
	            env: {
	                dev: 	'app',
	                dist: 	'dist'
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
		
		// uncss
		uncss: {
		    options: {
		    	htmlroot: 'build',
		    	report: 'gzip'
		    },
			dist: {
				files:{
					'<%= config.paths.env.dev %>/assets/css/main.css': ['<%= config.paths.env.dist %>/index.html']
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
					outputStyle: 'nested'
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
				tasks: ['compass:dev', 'csslint:strict']
			},
			js: {
				files: ['<%= config.paths.js %>/**/*'],
				tasks: ['jshint:dev']
			}
		},
		
		// concat
		concat: {
			options: {
				stripBanners: true,
				banner: '<%= config.meta.banner %>'
			},
			js: {
				src: ['<%= config.paths.env.dev %>/assets/js/**/*.js'],
				dest: '<%= config.paths.env.dist %>/assets/js/main.js',
			},
			css: {
				src: ['<%= config.paths.env.dev %>/assets/css/**/*.css'],
				dest: '<%= config.paths.env.dist %>/assets/css/main.css',
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
				options: {
					mangle: false,
					comments: false
				},
				files: [{
					expand: true,
					cwd: '<%= config.paths.env.dev %>/assets/js',
					src: '**/*.js',
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
	            files: [{
	            	expand: true,
	            	cwd:'<%= config.paths.env.dev %>/assets/imgs/**/*',
	            	src: ['**/*.png', '**/*.jpg', '**/*.jpeg', '**/*.gif'],
	            	dest: '<%= config.paths.env.dist %>/assets/imgs'
	            }]
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
				cwd: '<%= config.paths.dev %>',
				src: [
					'**',
					'*.{md,txt,htaccess}',
					'!<%= config.paths.assets %>/**/.{png,jpg,gif,jpeg}',
					'!<%= config.paths.assets %>/**/.{css,js}',
					'!<%= config.paths.assets %>/_**/**'
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
		
		// exec commands
		exec: {
		    cmd: 'npm install && bower install && grunt dev'
		},
		
		// keep multiple browsers & devices in sync when building websites.
		browserSync: {
		    dev: {
		        bsFiles: {
		            src : [
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
					// proxy: {
					// 	host: "192.168.0.11",
					// 	port: 8000
					// }
                }
		    }
		}
	});

	// watch
	grunt.registerTask('dev', ['browserSync', 'watch']);

	// build
	grunt.registerTask('dist', ['clean:dist', 'uglify:dist', 'copy:dist', 'concat:js', 'concat:css', 'compass:dist', 'imagemin:dist','htmlmin:dist']);
	
	// deploy
	//grunt.registerTask('deploy', ['ftp-deploy:build']);

	// compress
	//grunt.registerTask('zip', ['compress:dist','compress:dev','compress:all']);    
};
		