const gulp = require('gulp');

const sass = require('gulp-sass');
const cssnano = require('gulp-cssnano');

const rev = require('gulp-rev');

gulp.task('css', function() {
    console.log('minifying css.... ');
    gulp.src('./assests/sass/**/*.scss')
        .pipe(sass())
        .pipe(csssnano())
        .pipe(gulp.dest('./assests.css'))

    return gulp.src('./assests/**/*.css');
})