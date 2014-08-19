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
	
	watch: {
      dist: {
        files: [
          'js/**/*',
          'scss/**/*'
        ],
        tasks: ['sass']
      }
    } // watch
	
  });

  // Plugins do Grunt
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-htmlmin');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-uncss');

  // Tarefas que serão executadas
  grunt.registerTask('compile',['sass']);
  grunt.registerTask('minify',['htmlmin','uncss','uglify','cssmin']);
  grunt.registerTask('build',['compile','minify']);
};