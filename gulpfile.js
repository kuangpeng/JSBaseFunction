var gulp = require('gulp'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify');

gulp.task('default', function() {

});

gulp.task('combine', function() {
    gulp.src('src/util_**.js')
        .pipe(concat('utilK.js'))
        .pipe(uglify({
            preserveComments: 'license'
        }))
        .pipe(gulp.dest('dist'));
});

gulp.task('combine2', function() {
    gulp.src(['src/debounce.js', 'src/getAbsoluteUrl.js', 'src/once.js', 'src/poll.js', 'src/simpleTemplateEngine.js'])
        .pipe(concat('utilFunction.js'))
        .pipe(uglify({
            preserveComments: 'license'
        }))
        .pipe(gulp.dest('dist'));
});

gulp.task('combineAll', function() {
    gulp.src('dist/*.js')
        .pipe(concat('utilTool.js'))
        .pipe(uglify({
            preserveComments: 'license'
        }))
        .pipe(gulp.dest('dist'));
});