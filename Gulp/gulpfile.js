// Include Gulp
var gulp = require('gulp');

// Include Plugins
var path        = require('path');
var gutil       = require('gulp-util');
var stylus      = require('gulp-stylus');
var uglify      = require('gulp-uglify');
var concat      = require('gulp-concat');
var watch       = require("gulp-watch");
var browserSync = require('browser-sync').create();
var reload      = browserSync.reload;

// Paths
var paths = {
  dev:    'app/dev',
  js:     'app/src/javascript',
  stylus: 'app/src/stylus'
}

//Tasks
//liverealod
gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: paths.dev
        }
    });
});

// stylus
gulp.task('stylus', function () {
  gulp.src(paths.stylus+'/main.styl')
    .pipe(stylus({
      compress: true
    }))
    .pipe(gulp.dest('app/dev/assets/css'))
    .pipe(browserSync.stream());
});

// concat, uglify js
gulp.task('scripts', function() {
  return gulp.src([paths.js+'/vendor/**/*.js', paths.js+'/main.js'])
  .pipe(concat('main.js'))
  .pipe(uglify())
  .pipe(gulp.dest('app/dev/assets/js'))
  .pipe(browserSync.stream());
});

// reloading browsers
gulp.task('jsReload', ['scripts'], browserSync.reload);

// Watch
gulp.task('watch', function() {
  gulp.watch(paths.js+'/**/*.js', ['scripts']);
  gulp.watch(paths.stylus+'/**/*.styl', ['stylus']);
  gulp.watch(paths.dev+'/*.html').on('change', browserSync.reload);
});

//taks to run
gulp.task('dev', ['stylus', 'scripts', 'browser-sync', 'watch']);





// build
//grunt.registerTask('dist', ['clean', 'copy', 'concat', 'uglify', 'cssmin', 'imagemin']);
