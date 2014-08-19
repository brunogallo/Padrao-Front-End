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
		minify: {
			expand : true,
			cwd: 'css/**',
			src: ['*.css','!*.min.css'],
			dest: 'build/assets/css/',
			ext: '.css'
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
		}
	},

	sass: {
		dist: {
			files: {
			  'assets/css/style.css':'assets/sass/main.scss'
			}
		}
	}, // end sass
	
	watch: {
      dist: {
        files: [
          'assets/_js/**/*',
          'assets/_sass/**/*'
        ],
        tasks: ['uglify','sass']
      }
    } // watch
	
  });


  // Plugins do Grunt
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-htmlmin');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Tarefas que serão executadas
  grunt.registerTask('compile',['sass']);
  grunt.registerTask('minify',['uglify','cssmin','htmlmin']);
  grunt.registerTask('build',['compile','minify']);
};