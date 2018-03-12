var gulp = require('gulp');
// var runSequence = require('run-sequence');
var del = require('del');
var jshint = require('gulp-jshint');
// var uglify = require('gulp-uglify');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var cssmin = require('gulp-cssmin');
var rename = require('gulp-rename');
var plumber = require('gulp-plumber');
var browserSync = require('browser-sync').create();

var proxy = 'localhost';


gulp.task('clean', function() {
  return del(['build']);
});

gulp.task('lint', function() {
  return gulp.src('src/js/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});

// gulp.task('compress', function() {
//   gulp.src('js/*.js')
//     .pipe(uglify())
//     .pipe(gulp.dest('build'));
// });

gulp.task('sass', function() {
  return gulp.src('scss/**/*.scss')
    .pipe(plumber())
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false
    }))
    .pipe(gulp.dest('./css'))
    .pipe(browserSync.stream());
});

// gulp.task('cssmin', function () {
//   return gulp.src('src/css/style.css')
//     .pipe(cssmin())
//     .pipe(rename({suffix: '.min'}))
//     .pipe(gulp.dest('build'));
// });

gulp.task('copy', function() {
  return gulp.src([
    'src/**/*',
    '!src/_includes',
    '!src/**/_*',
    '!src/**/_*.html'
  ])
  .pipe(gulp.dest('build'));
});

gulp.task('serve', function() {
  browserSync.init({
    // server: {
    //   baseDir: 'src'
    // }
    proxy: proxy
  });

  gulp.watch(['scss/**/*.scss'], ['sass']);
  // gulp.watch([
  //   'src/**/*',
  //   '!scss/**/*.scss'
  //   ], ['copy']);
  gulp.watch('src/**/*.html').on('change', browserSync.reload);
});


gulp.task('default', ['clean', 'sass', 'serve']);
gulp.task('build', ['clean', 'sass', 'copy']);
