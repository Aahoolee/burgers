'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass');
const runSequence = require('run-sequence');
const del = require('del');
const watch = require('gulp-watch');
const imagemin = require('imagemin');
const imageminPngquant = require('imagemin-pngquant');

gulp.task('sass', function(){
    return gulp.src(`./src/*.scss`)
        .pipe(sass())
        .pipe(gulp.dest(`./build/css`))
});

gulp.task('pug', function() {

});

gulp.task('clean', function() {
    del('./build/');
});

gulp.task('watch', function() {
    watch(`./src/*.scss`, function() {
        gulp.start('sass');
    })
});


gulp.task('imagemin', function () {
    gulp.src('src/img/*.png')
        .pipe(imagemin())
        .pipe(gulp.dest('build/img'));
});


gulp.task('default', function() {
    runSequence(
        'clean',
        'sass',
        'pug'
    )
});



imagemin(['images/*.png'], 'build/images', {use: [imageminPngquant()]}).then(() => {
    console.log('Images optimized');
});