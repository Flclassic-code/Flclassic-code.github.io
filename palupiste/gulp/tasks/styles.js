var gulp   = require('gulp');
var cfg = require('../config.json').config;

var concat       = require('gulp-concat');


gulp.task('styles', function() {
  return gulp.src([
  	// cfg.src.root + '/*.css', 
  	cfg.src.css + '/style.css' 
  	])
    .pipe(concat('styles.min.css'))
    .pipe(gulp.dest(cfg.src.css));
});