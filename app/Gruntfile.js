module.exports = function( grunt ) {

  grunt.initConfig({

	uglify: {
		options: {
			mangle: false
		},
		dist: {
			files: {
				'build/assets/js/javascript.js':['js/main.js']
			}
		}
	}, // end uglify
	
	cssmin: {
        dist: {
            files: [
                { src: 'build/assets/css/style.css', dest: 'build/assets/css/style.css' }
            ]
        }
    }, // end cssmin
    
	uncss: {
	    dist: {
	        options: {
	            htmlroot: 'build',
	            report: 'gzip'
	        },
            files: [
                { src: 'build/index.html', dest:'build/assets/css/style.css' }
            ]
	    } // end uncss
	},
	
	sass: {
		dist: {
			files: {
			  'build/assets/css/style.css':'scss/main.scss'
			}
		}
	}, // end sass

	htmlmin: {
			dist: {
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
			files: [{
                expand: true,
                cwd: 'html/',
                src: '**/*.html',
                dest: 'build/'
			}]
		} // end htmlmin
	},	
		
	watch: {
      dist: {
        files: [
          'js/**/*',
          'scss/**/*'
        ],
        tasks: ['sass']
      }
    }, // end watch
    
	clean: {
	  build: {
	    src: ['build/assets/*/**.css','build/assets/*/**.js','build/*.html','teste/screenshot/**']
	  }
	}, // end clean
	
    pageres: {
        prod: {
            options: {
                url: 'google.com.br',
                sizes: ['240x427', '320x480', '480x320', '768x1024', '1024x768', 'iphone 5s', '1920x1080'],
                crop: true,
                dest: 'test/screenshot'
            }
        }
    }, // end pageres
    
    imagemin: {
        dist: {
            options: {
                optimizationLevel: 7,
                progressive: true
            },
            files: [{
                expand: true,
                cwd: 'build/assets/img',
                src: '**/*.{png,jpg,gif}',
                dest: 'build/assets/img'
            }]
        }
    }, // end imagemin	  
	  
	browserSync: {
			bsFiles: {
			src : 'build/**/*.*'
		},
		options: {
			server: {
				baseDir: "build"
			},
            reloadDelay: 1000,
            ghostMode: {
				scroll: true,
				links: true,
				forms: true,
				clicks: true,
				location: true
            }
        }
	}, //end browser sync
	rsync: {
	    options: {
	        args: ['--verbose', '--chmod=Du=rwx,Dgo=rx,Fu=rw,Fgo=r'],
	        exclude: [".git*","*.scss","node_modules"],
	        recursive: true,
            compareMode: 'checksum'
	    },
	    dist: {
	        options: {
	            src: "build",
	            dest: "build/dist"
	        }
	    },
	    stage: { //Servidor de testes
	        options: {
	            src: "build/dist/",
	            dest: "/var/www/",
	            host: "192.168.56.101",
	            delete: true // Careful this option could cause data loss, read the docs!
	        }
	    },
	    prod: { //Servidor de produção
	        options: {
	            src: "build/dist",
	            dest: "/var/www/",
	            host: "user@live-host",
	            delete: true // Careful this option could cause data loss, read the docs!
	        }
	    }
	}, // end rsync
	jshint: {
		all: ['Gruntfile.js', 'js/*.js', 'build/assets/js/*.js']
	}, //end jshint
	validation: {
	    options: {
	        reset: grunt.option('reset') || false,
	        stoponerror: false
	    },
	    files: {
	        src: ['html/*.html', 'build/*.html']
	    }
	}
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
  
  grunt.loadNpmTasks('grunt-html-validation');
  grunt.loadNpmTasks('grunt-browser-sync');
  grunt.loadNpmTasks('grunt-rsync-2');
  grunt.loadNpmTasks('grunt-pageres');
  grunt.loadNpmTasks('grunt-uncss');
  
  // Tarefas que serão executadas
  grunt.registerTask('compile',['sass']);	// Compila os arquivos .scss
  grunt.registerTask('minify',['htmlmin', 'uncss', 'uglify', 'cssmin', 'imagemin']);	// Minifica o html, css, js e optimiza as imagens.
  grunt.registerTask('build',['clean', 'compile', 'minify']);	// Executa as tarefas de minificar, limpar o diretório e compilar. 
  grunt.registerTask('print',['pageres']);	// Tira print das páginas nas principais resoluções mobile.
  grunt.registerTask('validate',['jshint', 'validation']);	// Valida arquivos js e html.
  grunt.registerTask('live', ["browserSync", "watch"]);	// Sincroniza browser com diferentes dispositivos.

  grunt.registerTask('stage', ['build','rsync:stage']);	// Executa todas as tarefas e envia para o ambiente de desenvolvimento.
  grunt.registerTask('deploy', ['build', 'rsync:prod', 'print', 'test']);	// Da deploy e envia para o ambiente de produção.
};