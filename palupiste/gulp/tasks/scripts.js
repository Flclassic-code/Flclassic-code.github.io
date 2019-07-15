var gulp   = require('gulp');
var cfg    = require('../config.json').config;

var concat     = require('gulp-concat');
var jsmin      = require('gulp-jsmin');

var browserSync = require('browser-sync').create();
var reload = browserSync.reload;


gulp.task('scripts', function() {
	return gulp.src([ 
		 cfg.src.js + '/**/*.js',
		"!" + cfg.src.js + '/**/main.js',
		"!" + cfg.src.js + '/**/main.min.js',
		"!" + cfg.src.js + '/**/libs.min.js' 
		])
	.pipe(concat('libs.min.js')) 
	.pipe(jsmin()) 
	.pipe(gulp.dest(cfg.src.js)); 
});

gulp.task('main', function() {
	return gulp.src([ 
		cfg.src.js + '/main.js'
		])
	.pipe(concat('main.min.js')) 
	.pipe(jsmin()) 
	.pipe(gulp.dest(cfg.src.js)); 
});



