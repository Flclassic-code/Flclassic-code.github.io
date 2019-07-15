const gulp = require('gulp');

var cfg = require('../config.json').config;

var replace = require('gulp-replace');
var imgsizefix = require("gulp-imgsizefix");

const gulpif = require('gulp-if');
const pug = require('gulp-pug');
const emitty = require('emitty').setup(cfg.src.templates, 'pug');

/// Your "watch" task
gulp.task('pug_emitty', () => {
	// Shows that run "watch" mode
	global.watch = true;
	gulp.watch(cfg.src.templates + '/**/*.pug', ['template_page']);
});

gulp.task('template_page', () =>
	gulp.src(cfg.src.templates + '/*.pug')
		.pipe(gulpif(global.watch, emitty.stream()))
		.pipe(pug({ pretty: true }))
		.pipe(imgsizefix({
		    debug: false,
		    force: true // <-- default: false 
		  }))
		.pipe(replace('../', ''))
		.pipe(gulp.dest(cfg.src.root))
);