'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass');
const runSequence = require('run-sequence');
const del = require('del');
const watch = require('gulp-watch');
const imagemin = require('imagemin');
const imageminPngquant = require('imagemin-pngquant');
const autoprefixer = require('gulp-autoprefixer');
const gitignore = require(`gitignore`);

gulp.task('sass', function(){
    return gulp.src(`./src/scss/*.scss`)
        .pipe(sass())
        .pipe(autoprefixer({
            browsers: ['last 5 versions'],
            cascade: false
        }))
        .pipe(gulp.dest(`./build/css`))
});

gulp.task('pug', function() {

});

gulp.task('clean', function() {
    del(`./build/`);
});

gulp.task('watch', function() {
    watch(`./src/scss/*.scss`, `./src/scss/**/*.scss`, function() {
        gulp.start('sass');
    })
});


gulp.task('imagemin', function () {
    gulp.src(`./src/img/**/*`)
        .pipe(imagemin())
        .pipe(gulp.dest(`./build/img`));
});


gulp.task('default', function() {
    runSequence(
        'clean',
        'sass',
        'pug'
    )
});



imagemin(['src/img/*'], './build/images', {use: [imageminPngquant()]}).then(() => {
});