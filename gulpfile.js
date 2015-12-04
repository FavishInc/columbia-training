var express = require('express');
var http = require('http');
var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('gulp-autoprefixer');
var livereload = require('gulp-livereload');

gulp.task('watch', function() {
  livereload.listen();
  gulp.watch('sass/**/*.scss', ['sass']);
});

gulp.task('sass', function() {
  gulp.src('./sass/**/*.scss')
      .pipe(sourcemaps.init())
      .pipe(sass().on('error', sass.logError))
      .pipe(autoprefixer({
            browsers: ['last 3 versions'],
            cascade: false
        }))
      .pipe(sourcemaps.write('../maps'))
      .pipe(gulp.dest('./css'))
      .pipe(livereload());
});

gulp.task('serve', function() {
  var app = express();
  app.use(express.static(__dirname));
  http.createServer(app).listen('8080');
});

gulp.task('default', ['sass', 'watch', 'serve']);
