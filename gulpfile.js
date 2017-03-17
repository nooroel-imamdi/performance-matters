var gulp = require('gulp'),
    criticalCss = require('gulp-critical-css'),
    imagemin = require('gulp-imagemin'),
    webp = require('gulp-webp'),
    cleanCSS = require('gulp-clean-css'),
    concatCss = require('gulp-concat-css'),
    concatJS = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    pump = require('pump');

gulp.task('default', () => {
gulp.src('src/file.css')
    .pipe(criticalCss())
    .pipe(gulp.dest('dist'))
});

// gulp.task('images', function(){
//   gulp.src('src/assets/img/**/*')
//     .pipe(cache(imagemin({ optimizationLevel: 3, progressive: true, interlaced: true })))
//     .pipe(gulp.dest('dist/img/'));
// });

gulp.task('default', function () {
    return gulp.src('src/assets/img/**/*')
        .pipe(webp())
        .pipe(gulp.dest('src/assets/img/webp'));
});

gulp.task('default', function() {
  return gulp.src(['src/dist/css/fonts.css' , 'src/dist/css/bootstrap.css' , 'src/assets/css/src/docs.css'])
    .pipe(concatCss('style.css'))
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest('src/dist/css'));
});

gulp.task('default', function() {
    return gulp.src(['src/assets/js/vendor/jquery.min.js' , 'src/dist/js/bootstrap.js','src/assets/js/docs.min.js', 'src/assets/js/ie10-viewport-bug-workaround.js'])
        .pipe(concatJS('compress.js'))
        .pipe(gulp.dest('src/dist/js'));
});

gulp.task('default', function (cb) {
  pump([
        gulp.src('src/dist/js/compress.js'),
        uglify(),
        gulp.dest('src/dist/js')
    ],
    cb
  );
});
