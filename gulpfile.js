const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const cssmin = require('gulp-cssmin');

// 编译任务
gulp.task('compile', function () {
  return gulp.src('components/css/*.scss')
    .pipe(sass.sync())
    .pipe(cssmin()) // 压缩 
    .pipe(gulp.dest('dist/css')); // 输出到 lib
});

// 构建任务，使用 gulp.series 来定义顺序
gulp.task('build', gulp.series('compile'));
