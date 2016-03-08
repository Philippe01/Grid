
'use strict';

// Require
var gulp 					= require('gulp');
var sass 					= require('gulp-sass');
var autoprefixer 	= require('gulp-autoprefixer');
var sourcemaps 		= require('gulp-sourcemaps');
var livereload 		= require('gulp-livereload');
var shorthand     = require('gulp-shorthand');


gulp.task('sass', function () {
  gulp.src( 'scss/**/*.scss' )
		.pipe(sourcemaps.init())
			.pipe( sass().on('error', sass.logError) )
			.pipe( autoprefixer({ remove: false }) )
		.pipe( sourcemaps.write( 'css/' ) )
		.pipe( gulp.dest( 'css/' ) )
		.pipe( livereload() );
});


gulp.task('shorthand', function () {
    return gulp.src('css/*.css')
      .pipe( shorthand() )
      .pipe( gulp.dest('css/*.css') );
});

gulp.task('sass-watch', function () {
	livereload.listen();
  gulp.watch( 'scss/**/*.scss', ['sass'])
});
