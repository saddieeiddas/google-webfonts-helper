var gulp = require('gulp');
var googleWebFonts = require('gulp-google-webfonts');
var del = require('del');

gulp.task('clean', function() {
  return del.sync('fonts/**');
});

gulp.task('fonts', ['clean'], function () {
    return gulp.src('./fonts.list')
      .pipe(googleWebFonts())
      .pipe(gulp.dest('fonts'));
});

gulp.task('default', ['fonts']);
