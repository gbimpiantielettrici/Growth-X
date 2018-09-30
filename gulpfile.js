var gulp = require('gulp');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var cssMin = require('gulp-css');


gulp.task('css', function() {

	gulp.src([
			'./css/style.css',
			'./css/materialize.css',
			'./css/materialize.min.css'
	])
		.pipe(concat('style.css'))
		.pipe(cssMin())
		.pipe(gulp.dest('./css'));

});

gulp.task('scripts', function() {

	gulp.src([
			'./js/facebookpixelcode.js',
			'./js/googleanalytics.js',
			'./js/googletagmanager.js',
			'./js/hotjar.js',
			'./js/init.js',
			'./js/materialize.js',
			'./js/materialize.min.js',
			'./js/sumome.js',
			'./js/typeform.js'
	])
		.pipe(concat('libs.js'))
		.pipe(uglify())
		.pipe(gulp.dest('./js'));

});

gulp.task('default', ['css', 'scripts']);
