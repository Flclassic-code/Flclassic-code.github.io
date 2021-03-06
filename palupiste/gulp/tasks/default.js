'use strict';

var gulp   = require('gulp');
var cfg = require('../config.json').config;

var runSequence = require('run-sequence');



var sass = require('gulp-sass');
// var rename = require('gulp-rename');
var sourcemaps = require('gulp-sourcemaps');

// var gutil = require( 'gulp-util' );
// var ftp = require( 'vinyl-ftp' );

var concat       = require('gulp-concat');
var jsmin = require('gulp-jsmin');

var browserSync = require('browser-sync').create();
var reload = browserSync.reload;

var fileinclude = require('gulp-file-include');

// var del         = require('del'); 
var autoprefixer = require('gulp-autoprefixer');
var spritesmith  = require('gulp.spritesmith');
var gcmq = require('gulp-group-css-media-queries');

var pug = require('gulp-pug');
var pugPHPFilter = require('pug-php-filter');

var cleanCSS = require('gulp-clean-css');




gulp.task('default', function () {
	runSequence(
		'browserSync',
		'sass',
		'pug',
		'pug:watch',
		// 'pug_emitty',
		'sass:watch'
	);
});