'use-strict';

module.exports = function( grunt ) {

require('time-grunt')(grunt);

  grunt.initConfig({
  pkg: grunt.file.readJSON('package.json'),
  		
  		// Caminhos padrões
		paths: {
            build: {
                dev: 'dev',
                prod: 'deploy',
                env: 'env/ubuntu/www/default'
            },
            views:  'src/views',
            sass:   'src/scss',
            js:    'src/js',
            statics: 'src/statics'
        },
        
        // Uglify
		uglify: {
			options: {mangle: false},
			dev: {
				files: {'<%= paths.build.dev %>/assets/js/javascript.js':['<%= paths.js %>/main.js']}
			},
			prod: {
				files: {'<%= paths.build.prod %>/assets/js/javascript.js':['<%= paths.js %>/main.js']}
			},
			env: {
				files: {'<%= paths.build.env %>/assets/js/javascript.js':['<%= paths.js %>/main.js']}
			}
			
		},
	
		// CSSMin
		cssmin: {
			dev: {
				files:[
					{src: '<%= paths.build.dev %>/assets/css/style.css', dest: '<%= paths.build.dev %>/assets/css/style.css'}
				]
			},
			prod: {
				files:[
					{src: '<%= paths.build.dev %>/assets/css/style.css', dest: '<%= paths.build.dev %>/assets/css/style.css'}
				]
			},
			env: {
				files:[
					{src: '<%= paths.build.env %>/assets/css/style.css', dest: '<%= paths.build.env %>/assets/css/style.css'}
				]
			}
		},
		
		//Uncss
    
		uncss: {
		    options: {
		    	htmlroot: 'build',
		    	report: 'gzip'
		    },
			dev: {
				files:[
					{src: '<%= paths.build.dev %>/index.html', dest: '<%= paths.build.dev %>/assets/css/style.css'}
				]
			},
			prod: {
				files:[
					{src: '<%= paths.build.dev %>/index.html', dest: '<%= paths.build.dev %>/assets/css/style.css'}
				]
			},
			env: {
				files:[
					{src: '<%= paths.build.env %>/index.html', dest: '<%= paths.build.env %>/assets/css/style.css'}
				]
			}   
		},
		
		//SASS	
		sass: {	
			dev: {
				files: {'<%= paths.build.dev %>/assets/css/style.css':'<%= paths.sass %>/main.scss'}
			},
			prod: {
				files: {'<%= paths.build.prod %>/assets/css/style.css':'<%= paths.sass %>/main.scss'}
			},
			env: {
				files: {'<%= paths.build.env %>/assets/css/style.css':'<%= paths.sass %>/main.scss'}
			}
		},

		//HTMLMin
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
			dev: {
				files: [{expand: true,cwd: 'src/views/',src: '**/*.html',dest: '<%= paths.build.dev %>/'}]
			},
			prod: {
				files: [{expand: true,cwd: 'src/views/',src: '**/*.html',dest: '<%= paths.build.prod %>/'}]
			},
			env: {
				files: [{expand: true,cwd: 'src/views/',src: '**/*.html',dest: '<%= paths.build.env %>/'}]
			}
		},	
		
		//Watch
		watch: {
	      dev: {
	        files: ['<%= paths.js %>/**/*','<%= paths.sass %>/**/*'],
	        tasks: ['sass:dev']
	      },
	      prod: {
	        files: ['<%= paths.js %>/**/*','<%= paths.sass %>/**/*'],
	        tasks: ['sass:prod']
	      },
	      env: {
	        files: ['<%= paths.js %>/**/*','<%= paths.sass %>/**/*'],
	        tasks: ['sass:env']
	      }
	    },
	    
	    //Clean
		clean: {
		  dev: {
		    src: ['<%= paths.build.dev %>/**/*']
		  },		
		  prod: {
		    src: ['<%= paths.build.prod %>/**/*']
		  },		
		  env: {
		    src: ['<%= paths.build.env %>/**/*']
		  }
		},
		
		//Pageres
	    pageres: {
	        dev: {
	            options: {
	                url: 'www.terra.com.br',
	                sizes: ['1280x1000','1024x1000','800x1000','600x1000','480x1000','320x1000'],
	                crop: true,
	                dest: 'test/dev/screenshot'
	            }
	        },
	        prod: {
	            options: {
	                url: 'www.globo.com.br',
	                sizes: ['1280x1000','1024x1000','800x1000','600x1000','480x1000','320x1000'],
	                crop: true,
	                dest: 'test/deploy/screenshot'
	            }
	        },
	        env: {
	            options: {
	                url: 'www.ig.com.br',
	                sizes: ['1280x1000','1024x1000','800x1000','600x1000','480x1000','320x1000'],
	                crop: true,
	                dest: 'test/env/screenshot'
	            }
	        }
	    },
    
		//Imagemin
	    imagemin: {
			options: {
			    optimizationLevel: 7,
			    progressive: true
			},
	        dev: {
	            files: [{expand: true,cwd:'<%= paths.build.dev %>/assets/img',src: '**/*.{png,jpg,gif}',dest: '<%= paths.build.dev %>/assets/img'}]
	        },
	        prod: {
	            files: [{expand: true,cwd:'<%= paths.build.prod %>/assets/img',src: '**/*.{png,jpg,gif}',dest: '<%= paths.build.prod %>/assets/img'}]
	        },
	        env: {
	            files: [{expand: true,cwd:'<%= paths.build.env %>/assets/img',src: '**/*.{png,jpg,gif}',dest: '<%= paths.build.env %>/assets/img'}]
	        }
	    },  
	  
		//Browser Sync
		browserSync: {
			bsFiles: {src:'<%= paths.build.dev %>/**/*.*'},
			options: {
				server: {baseDir: "build"},
	            reloadDelay: 1000,
	            ghostMode: {
					scroll: true,
					links: true,
					forms: true,
					clicks: true,
					location: true
	            }
	        }
		},
		
		//Copy files
		copy: {
			dev: {
				expand: true,
				dot: true,
				cwd: '<%= paths.statics %>',
				src: '**',
				dest: '<%= paths.build.dev %>',
				flatten: true,
				filter: 'isFile',
			},
			env: {
				expand: true,
				dot: true,
				cwd: '<%= paths.statics %>',
				src: '**',
				dest: '<%= paths.build.env %>',
				flatten: true,
				filter: 'isFile',
			},
			prod: {
				expand: true,
				dot: true,
				cwd: '<%= paths.statics %>',
				src: '**',
				dest: '<%= paths.build.prod %>',
				flatten: true,
				filter: 'isFile',
			},
		},
  });

  // Plugins do Grunt
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-htmlmin');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-html-validation');
  grunt.loadNpmTasks('grunt-browser-sync');
  grunt.loadNpmTasks('grunt-pageres');
  grunt.loadNpmTasks('grunt-uncss');
  

  // Tarefas que serão executadas  
  grunt.registerTask('validate',['jshint', 'validation']);	// Valida arquivos js e html.

  //Tarefas para produção
  grunt.registerTask('compile:prod',['sass:prod']);	// Compila os arquivos .scss
  grunt.registerTask('minify:prod',['htmlmin:prod', 'uncss:prod', 'uglify:prod', 'cssmin:prod', 'imagemin:prod']);	// Minifica o html, css, js e optimiza as imagens.
  grunt.registerTask('build:prod',['clean:prod', 'copy:prod', 'compile:prod', 'minify:prod']);	// Executa as tarefas de minificar, limpar o diretório e compilar. 
  grunt.registerTask('validate:prod',['jshint:prod', 'validation:prod']);	// Valida arquivos js e html.
  grunt.registerTask('print:prod',['pageres:prod']);	// Tira print das páginas nas principais resoluções mobile.
  grunt.registerTask('live:prod', ["browserSync:prod", "watch:prod"]);	// Sincroniza browser com diferentes dispositivos.

  //Tarefas para desenv.
  grunt.registerTask('compile:dev',['sass:dev']);	// Compila os arquivos .scss
  grunt.registerTask('minify:dev',['htmlmin:dev', 'uncss:dev', 'uglify:dev', 'cssmin:dev', 'imagemin:dev']);	// Minifica o html, css, js e optimiza as imagens.
  grunt.registerTask('build:dev',['clean:dev', 'copy:dev', 'compile:dev', 'minify:dev']);	// Executa as tarefas de minificar, limpar o diretório e compilar. 
  grunt.registerTask('validate:dev',['jshint:dev', 'validation:dev']);	// Valida arquivos js e html.
  grunt.registerTask('print:dev',['pageres:dev']);	// Tira print das páginas nas principais resoluções mobile.
  grunt.registerTask('live:dev', ["browserSync:dev", "watch:dev"]);	// Sincroniza browser com diferentes dispositivos.

  //Tarefas para maquina virtual.
  grunt.registerTask('compile:env',['sass:env']);	// Compila os arquivos .scss
  grunt.registerTask('minify:env',['htmlmin:env', 'uncss:env', 'uglify:env', 'cssmin:env', 'imagemin:env']);	// Minifica o html, css, js e optimiza as imagens.
  grunt.registerTask('build:env',['clean:env', 'copy:env', 'compile:env', 'minify:env']);	// Executa as tarefas de minificar, limpar o diretório e compilar.
  grunt.registerTask('validate:env',['jshint:env', 'validation:env']);	// Valida arquivos js e html. 
  grunt.registerTask('print:env',['pageres:env']);	// Tira print das páginas nas principais resoluções mobile.
  grunt.registerTask('live:env', ["browserSync:env", "watch:env"]);	// Sincroniza browser com diferentes dispositivos.
};