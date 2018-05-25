var gulp = require('gulp');
var sass = require('gulp-sass');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var duplicates = require('postcss-discard-duplicates');
var animejs = require('animejs');

gulp.task('sass', function() {
  gulp.src('./sass/**/*.sass')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./css'));
});

gulp.task('sass:watch', function() {
  gulp.watch('./sass/**/*.sass', ['sass'])
  });

gulp.task('css', function() {
  var plugins = [
    duplicates(),
    autoprefixer({browsers: ['> 1%'], cascade: false})
  ];
  return gulp.src('./css/*.css')
  .pipe(postcss(plugins))
  .pipe(gulp.dest('./css'));
});

gulp.task('autoprefixer', function () {
    var postcss      = require('gulp-postcss');
    var autoprefixer = require('autoprefixer');

    return gulp.src('./src/*.css')
        .pipe(postcss([ autoprefixer() ]))
        .pipe(gulp.dest('./css'));
});

gulp.task('default', ['sass', 'css']);
