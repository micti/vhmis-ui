const gulp = require('gulp')
const sass = require('gulp-sass')
const cleanCSS = require('gulp-clean-css')
const concat = require('gulp-concat')
const minify = require('gulp-minify')
const webpack = require('webpack-stream')
const sourcemaps = require('gulp-sourcemaps')

const clientPath = 'src/'
const jsClientPath = clientPath + '/js'
const cssClientPath = clientPath + '/css'
const jsFile = [
  // jsClientPath + '/token.js',
  // jsClientPath + '/modal.js',
  jsClientPath + '/main.js'
]

const cssFile = [
  cssClientPath + '/main.scss'
]

gulp.task('watch', () => {
  gulp.watch('src/js/**/**/*.js', ['js'])
  gulp.watch('src/css/**/*.scss', ['css'])
})

gulp.task('js', () => {
  gulp.src('src/js/index.js')
    .pipe(webpack(require('./webpack.config.js')))
    .pipe(gulp.dest('client/js'))
    .pipe(gulp.dest('docs/client/js'))
})

gulp.task('css', () => {
  gulp.src(cssFile)
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    // .pipe(cleanCSS())
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('client/css'))
    .pipe(gulp.dest('docs/client/css'))
})

gulp.task('default', ['css', 'js'])
