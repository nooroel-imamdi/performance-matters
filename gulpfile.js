var gulp = require('gulp'),
    criticalCss = require('gulp-critical-css'),
    imagemin = require('gulp-imagemin'),
    webp = require('gulp-webp'),
    cleanCSS = require('gulp-clean-css');

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

gulp.task('minify-css', function() {
  return gulp.src('src/assets/css/src/*.css')
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest('dist/min'));
});
