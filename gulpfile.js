'esversion: 6';
 
var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
 
gulp.task('sass', (done) => {
  gulp.src('./scss/**/*.scss')
    .pipe(sass().on('error', sass.logError))    
    .pipe(autoprefixer())
    .pipe(gulp.dest('./css'))
    done();
});
 
gulp.task('sass:watch', () => {
  gulp.watch('./scss/**/*.scss', gulp.series('sass'));
});

