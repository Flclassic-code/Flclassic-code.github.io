var gulp = require('gulp'),
    browserSync = require('browser-sync'),
    autoprefixer = require('gulp-autoprefixer'),
    gp_concat = require('gulp-concat'),
    gp_rename = require('gulp-rename'),
    gp_uglify = require('gulp-uglify'),
    gp_sourcemaps = require('gulp-sourcemaps'),
    header = require('gulp-header'),
    rename = require('gulp-rename'),
    cssnano = require('gulp-cssnano'),
    sass = require('gulp-sass'),
    minify = require('gulp-minify');
    htmlrender = require('gulp-htmlrender'),
    sourcemaps = require('gulp-sourcemaps'),
     debug = require('gulp-debug'),
     cache = require('gulp-cached'),
     remember = require('gulp-remember'),
     gulpif = require('gulp-if'),
    package = require('./package.json');

const isDevelopment = !process.env.NODE_ENV || process.env.NODE_ENV == 'development';

gulp.task('css', function() {
    return gulp.src('src/scss/**/*.{scss,sass}')
        .pipe(sourcemaps.init())
        .pipe(sass({ errLogToConsole: true }))

        .pipe( gulpif(!isDevelopment, autoprefixer('last 7 version') ) )
        .pipe( gulpif(!isDevelopment, cssnano({ zindex: false, reduceIdents: false })) )
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('app/scss'))
});
gulp.task('browser-sync', function() {
    browserSync.init(null, {
        server: {
            baseDir: "app"
        },
        files: ['app/**/*']
    });
});
gulp.task('render', function() {
    return gulp.src('src/index.html', { read: false })
        .pipe(htmlrender.render())
        .pipe(gulp.dest('app'))
        .pipe(debug({title: '222222222'}))
});

gulp.task('js-fef', function(){
    return gulp.src(['src/js/plugins/*.*',  'src/js/scripts.js'])
        .pipe(gp_concat('libs.min.js'))
        .pipe(gulp.dest('app/js'))
});



gulp.task('allwatch', function() {
    gulp.watch("src/js/*.js", gulp.series('js-fef'));
    gulp.watch("src/scss/**/*.{scss,sass}", gulp.series('css'));
    gulp.watch(['src/*/*.html'], gulp.series('render'));
    gulp.watch(['src/*.html'], gulp.series('render'));
});

gulp.task('default', gulp.series('css', 'js-fef', 'render', gulp.parallel('allwatch', 'browser-sync') ));