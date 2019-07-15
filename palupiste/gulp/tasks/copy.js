var gulp   = require('gulp');
var cfg = require('../config.json').config;

var replace = require('gulp-replace');

gulp.task('copy:html', function () {
	gulp
	.src( cfg.src.root + '/*.html' )
	.pipe(replace('main.js', 'main.min.js'))
	.pipe(gulp.dest(cfg.dest.root));
});

gulp.task('copy:sendmail', function () {
	gulp
	.src( cfg.src.root + '/sendmail.php' )
	.pipe(gulp.dest(cfg.dest.root));
});

gulp.task('copy:favicon', function () {
	gulp
	.src( cfg.src.root + '/favicon.ico' )
	.pipe(gulp.dest(cfg.dest.root));
});


gulp.task('copy:js', function () {
	gulp
	.src([
		cfg.src.js + '/libs.min.js',
		cfg.src.js + '/main.min.js',
		])
	.pipe(gulp.dest(cfg.dest.js));
});

gulp.task('copy:img', function () {
	gulp
	.src( cfg.src.img + '/**/*')
	.pipe(gulp.dest(cfg.dest.img));
});

gulp.task('copy:fonts', function () {
	gulp
	.src( cfg.src.fonts + '/**/*')
	.pipe(gulp.dest(cfg.dest.fonts));
});

gulp.task('copy:css', function () {
	gulp
	.src( cfg.src.css + '/**/*.css')
	.pipe(gulp.dest(cfg.dest.css));
});

gulp.task('copy:phpMailer', function () {
	gulp
	.src( cfg.src.phpMailer + '/**/*')
	.pipe(gulp.dest(cfg.dest.phpMailer));
});




