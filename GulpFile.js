var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');

gulp.task('release', function() {
  return gulp.src('./js/*.js')
    .pipe(concat('main.js'))
    .pipe(gulp.dest('./'));
});

gulp.task('styles', function() {
  gulp.src('sass/**/*.scss')
    .pipe(sass({
      outputStyle: 'compressed'
    }).on('error', sass.logError))
    .pipe(gulp.dest('./css/'))
});

//Watch task
gulp.task('default', function() {
  gulp.watch('sass/**/*.scss', ['styles']);
});
