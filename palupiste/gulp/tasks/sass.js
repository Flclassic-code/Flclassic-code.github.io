var gulp   = require('gulp');
var cfg = require('../config.json').config;

var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var gcmq = require('gulp-group-css-media-queries');
var sourcemaps = require('gulp-sourcemaps');
var cleanCSS = require('gulp-clean-css');

var browserSync = require('browser-sync').create();
var reload = browserSync.reload;

gulp.task('sass', function () {
	return gulp.src(cfg.src.sass +'/**/*.scss')
	// .pipe(sourcemaps.init())	
	.pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError))
	.pipe(autoprefixer(['last 15 versions'], { cascade: true }))
	.pipe(gcmq())
	.pipe(cleanCSS({compatibility: 'ie8'}))
	// .pipe(sourcemaps.write('.'))
	.pipe(gulp.dest(cfg.src.css))
	.pipe(browserSync.reload({
		stream: true
	}));
});

gulp.task('sass:build', function () {
	return gulp.src(cfg.src.sass +'/**/*.scss')
	// .pipe(sourcemaps.init())	
	.pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError))
	.pipe(autoprefixer(['last 15 versions'], { cascade: true }))
	.pipe(gcmq())
	.pipe(cleanCSS({compatibility: 'ie8', level: {1: {specialComments: 0}} }))
	// .pipe(sourcemaps.write('.'))
	.pipe(gulp.dest(cfg.src.css))
	.pipe(browserSync.reload({
		stream: true
	}));
});

gulp.task('sass:watch', function () {
  gulp.watch( cfg.src.sass + '/**/*.scss', ['sass']);
});