var gulp = require('gulp');
var browserify = require('gulp-browserify');
var livereload = require('gulp-livereload');
var watch = require('gulp-watch');

var app = {
	base:'./public/desktop/',
	src:'./public/desktop/app.js',
	dest:'./public/build/',
	bower:'./public/bower/'
}
// Basic usage
gulp.task('scripts', function() {
    // Single entry point to browserify
    gulp.src(app.src)
    .pipe(browserify({
    	shim: { 
    		angular: {
    			path: app.bower + './angular/angular.js',
    			exports: 'angular'
    		},
        },
        insertGlobals : true,
        debug : !gulp.env.production
    }))
    .pipe(gulp.dest(app.dest))
});

gulp.task('default', function(){
	gulp.run('scripts');

   livereload.listen();
    // 监听文件变化
    gulp.watch(app.base + '/**/**/*.js', function(){
    	gulp.run('scripts');
    }).on('change', livereload.changed);
});