var gulp   = require('gulp');
var cfg = require('../config.json').config;

var browserSync = require('browser-sync').create();
var reload = browserSync.reload;

gulp.task('browserSync', function() {
	browserSync.init({
		server: {
			baseDir: cfg.src.root
		},
		files: [ cfg.src.js+'/*.js', cfg.src.root+'/*.html', cfg.src.css+'/*.css']
	})
})

// gulp.task('browserSync', function() {
//  browserSync.init({
//      proxy: "localhost:8888/longevity/"
//  });
// });