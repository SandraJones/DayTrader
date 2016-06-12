"use strict";

var jshint = require('gulp-jshint'); //reading in jshint library
var gulp = require('gulp');//tells use 3rd party library's code and call it gulp; you can reference a package you've installed iwth node
var watch = require('gulp-watch');
var sass = require('gulp-sass');//just accessing libraries we already installed

//define a default task gulp (hit enter) it will run sassify and watch
gulp.task('default', ['lint', 'sassify', 'watch']);
//we define the tasks same as watch for jshint, but it's watching a sass folder and all nested directories within the sass folder
gulp.task('watch', function() {
  gulp.watch('../sass/**/*.scss', ['sassify']);//watch all the files in the sass directory
  gulp.watch('../app/**/*.js', ['lint']);
  //gulp.watch for jshint could go here
});


//depends upon proper indentation
gulp.task('sassify', function () {
  return gulp.src('../sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))//call the sass function and log any errors you seee
    .pipe(gulp.dest('../css'));//after you compile it put it into this folder
});


//tells gulp to lint the javascript
gulp.task('lint', function() {
  return gulp.src('../app/**/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish'))
});
