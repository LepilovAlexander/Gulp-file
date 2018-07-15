var gulp = require('gulp');
var browserSync = require('browser-sync');
var concatCSS = require('gulp-concat-css');
var rename = require('gulp-rename');
var less = require('gulp-less');
var autopref = require('gulp-autoprefixer');
var cleanCSS = require('gulp-clean-css');
var htmlmin = require('gulp-htmlmin');


// Static server
gulp.task('server', function() {
	browserSync.init({
		proxy: 'lessProject'
		});
	gulp.watch("less/*.less", [less]);
	gulp.watch("**/*.php").on('change', browserSync.reload);
	});

//Less
gulp.task('less', function(){
	return gulp.src('less/*.less')
	.pipe(less())
	.pipe(concatCSS('style.css'))
	.pipe(autopref('last 10 versions', 'ie 9'))
	.pipe(cleanCSS())
	.pipe(gulp.dest('css/'))
	.pipe(browserSync.stream());
	});
