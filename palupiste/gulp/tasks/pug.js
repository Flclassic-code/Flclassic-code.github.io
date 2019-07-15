var gulp   = require('gulp');
var cfg = require('../config.json').config;

var runSequence = require('run-sequence');

var pug = require('gulp-pug');
var pugPHPFilter = require('pug-php-filter');
var rename = require('gulp-rename');

var replace = require('gulp-replace');
var imgsizefix = require("gulp-imgsizefix");

var browserSync = require('browser-sync').create();
var reload = browserSync.reload;

gulp.task('pug', function () {
	return gulp.src(cfg.src.templates + "/*.pug")
	.pipe(pug({
		pretty: true,
		// filters: {
		// 	php: pugPHPFilter
		// },
		locals : {resize_img : require("image-size")}
	}))
  .pipe(imgsizefix({
      debug: false,
      force: true // <-- default: false 
    }))
  .pipe(replace('../', ''))
	// .pipe(rename(function (path) {
	// 	path.extname = ".php"
	// }))
	.pipe(gulp.dest(cfg.src.root))
});

gulp.task('pug:watch', function () {
  gulp.watch( cfg.src.templates + '/**/*.pug', ['pug'] );
});