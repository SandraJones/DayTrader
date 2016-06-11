//where we have task runners
//can find in school's docs

var gulp = require('gulp');
    var jshint = require('gulp-jshint');
    var watch = require('gulp-watch');

    gulp.task('default', ['lint', 'watch']);

    gulp.task('watch', function() {
        gulp.watch('./javascripts/**/*.js', ['lint']);
    });

    gulp.task('lint', function() {
        return gulp.src('./javascripts/**/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('jshint-stylish'));
    });