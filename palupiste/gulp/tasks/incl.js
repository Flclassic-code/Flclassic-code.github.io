var gulp   = require('gulp');
var cfg = require('../config.json').config;

var fileinclude = require('gulp-file-include');

var browserSync = require('browser-sync').create();
var reload = browserSync.reload;

// gulp.task('incl', ['sass'], function() {
// 	gulp.src([ cfg.src.htmlIncl + '/*.html'])
// 	.pipe(fileinclude({
// 		prefix: '@@',
// 		basepath: '@file'
// 	}))
// 	.pipe(gulp.dest(cfg.src.root))
// 	.pipe(browserSync.reload({
// 		stream: true
// 	}));

// });


// gulp.task('incl:watch', function() {
// 	gulp.watch(  cfg.src.htmlIncl + '/*.html', ['incl']);
// });