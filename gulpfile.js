'use strict';

var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var del = require('del');

gulp.task('clean', del.bind(null, ['dist']));

gulp.task('html', ['clean'], function () {
  return gulp.src('src/index.html')
    .pipe(gulp.dest('dist'));
});

gulp.task('css', ['html'], function () {
  return gulp.src('src/main.scss')
    .pipe($.sourcemaps.init())
    .pipe($.sass())
    .pipe($.postcss([], {to: 'dist/main.css'}))
    .pipe($.sourcemaps.write('.'))
    .pipe(gulp.dest('dist'));
});

gulp.task('css:without-option', ['html'], function () {
  return gulp.src('src/main.scss')
    .pipe($.sourcemaps.init())
    .pipe($.sass())
    .pipe($.postcss([]))
    .pipe($.sourcemaps.write('.'))
    .pipe(gulp.dest('dist'));
});

gulp.task('css:sass-only', ['html'], function () {
  return gulp.src('src/main.scss')
    .pipe($.sourcemaps.init())
    .pipe($.sass())
    .pipe($.sourcemaps.write('.'))
    .pipe(gulp.dest('dist'));
});
