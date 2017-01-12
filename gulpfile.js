// Gulp
var gulp = require('gulp');

// Plugins
var path        = require('path');
var gutil       = require('gulp-util');
var stylus      = require('gulp-stylus');
var uglify      = require('gulp-uglify');
var concat      = require('gulp-concat');
var watch       = require("gulp-watch");
var imagemin    = require('gulp-imagemin');
var del         = require('del');
var browserSync = require('browser-sync').create();
var reload      = browserSync.reload;

// Caminhos
var paths = {
  css:    'app/assets/css/**/*.css',
  js:     'app/assets/js/**/*.js',
  img:    'app/assets/img/**/*',
  stylus: 'app/assets/stylus/',
  app: 'app/',
  build: 'build/'
}

// Tarefas

// Limpar
gulp.task('clean', function() {
  return del(['build']);
});

gulp.task('scripts', ['clean'], function() {
  return gulp.src(paths.js)
    .pipe(uglify())
    .pipe(concat('all.min.js'))
    .pipe(gulp.dest(paths.app+'build/assets/js'));
});

// Copiar e minificar imagens
gulp.task('imagens', ['clean'], function() {
  return gulp.src(paths.img)
    .pipe(imagemin({optimizationLevel: 5}))
    .pipe(gulp.dest(paths.app+'build/assets/img'));
});

// Liverealod
gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: paths.app
        }
    });
});

// stylus
gulp.task('stylus', function () {
  gulp.src(paths.stylus+'main.styl')
    .pipe(stylus({
      compress: true
    }))
    .pipe(gulp.dest(paths.css))
    .pipe(browserSync.stream());
});

// Rerun the task when a file changes
gulp.task('watch', function() {
  gulp.watch(paths.scripts, ['scripts']);
  gulp.watch(paths.img, ['imagens']);
  gulp.watch(paths.stylus+'/**/*.styl', ['stylus']);
  gulp.watch(paths.app+'*.html').on('change', browserSync.reload);
});

//taks to run
gulp.task('dev', ['clean', 'scripts', 'stylus', 'watch', 'browser-sync']);
gulp.task('build', ['clean', 'stylus', 'scripts', 'imagens']);
