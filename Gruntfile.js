module.exports = function( grunt ) {

  grunt.initConfig({

	uglify: {
		options: {
			mangle: false
		},
		my_target: {
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
	    prod: {
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
                dest: 'teste/screenshot'
            }
        }
    }, // end pageres
    
    imagemin: {
        prod: {
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
    }
    	
  });

  // Plugins do Grunt
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-uncss');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-htmlmin');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-pageres');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  
  // Tarefas que serão executadas
  grunt.registerTask('compile',['sass']);
  grunt.registerTask('minify',['htmlmin','uncss','uglify','cssmin','imagemin']);
  grunt.registerTask('build',['clean','compile','minify']);
  grunt.registerTask('deploy',['pageres']);
};