var gulp   = require('gulp');
var cfg    = require('../config.json').config;

var spritesmith  = require('gulp.spritesmith');

gulp.task('sprite', function() {
	var spriteData = 
	gulp.src(cfg.src.sprite + '/*.*') 
	.pipe(spritesmith({
		imgName: 'sprite.png',
		imgPath: '../img/sprite.png',
		cssName: '_sprite.scss',
		padding: 5,
		cssFormat: 'scss',
		cssTemplate: 'gulp/scss.template.new', // node node_modules/spritesheet-templates/lib/templates

		cssOpts: {
			cssSelector: function (item) {
				if (item.name.indexOf('-hover') !== -1) {
					return '.' + item.name.replace('-hover', ':hover');
				}
				else {
					return '.' + item.name;
				}
			}
		}

	}));

	spriteData.img.pipe(gulp.dest(cfg.src.img)); 
	spriteData.css.pipe(gulp.dest(cfg.src.sass)); 
});