var gulp = require('gulp');
    sass = require('gulp-sass');
    uglify = require('gulp-uglify');
    watch = require('gulp-watch');

gulp.task('compress', function() {
  gulp.src('src/*.js')
  .pipe(uglify())
  .pipe(gulp.dest('dist'));
});

gulp.task('styles', function() {
  gulp.src('sass/**/*.scss')
  .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
  .pipe(gulp.dest('dist/css'));
});

gulp.task('watch', function() {
  gulp.watch('./sass/*/*.scss', ['styles'])
});

gulp.task('default', ['compress', 'styles', 'watch']);
