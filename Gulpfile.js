var gulp = require('gulp'),
    sass = require('gulp-sass'),
    concat = require('gulp-concat'),
    minify = require('gulp-minify'),
    exec = require('gulp-exec'),
    rename = require('gulp-rename'),
    autoprefixer = require('gulp-autoprefixer'),
    del = require('del');

function pygments(cb) {
    var options = {
        continueOnError: false,
        pipeStdout: false
    };
    cb();
}

function scss() {
    return gulp.src('scss/style.scss')
        .pipe(sass()
            .on('error', sass.logError))
        .pipe(autoprefixer())
        .pipe(gulp.dest('static/css/'));
}

function minifyScss() {
    return gulp.src('scss/style.scss')
        .pipe(sass({ outputStyle: 'compressed' })
            .on('error', sass.logError))
        .pipe(autoprefixer())
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(gulp.dest('static/css/'));
}

exports.default = minifyScss;

function watch(cb) {
    gulp.watch('scss/**/*.scss', gulp.series(minifyScss));
    cb();
}

exports.watch = watch;