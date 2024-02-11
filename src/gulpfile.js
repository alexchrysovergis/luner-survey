const { src, dest } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const cleanCSS = require('gulp-clean-css');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');

function css() {
    return src('./src/scss/*.scss') //the src
        .pipe(sass())
        .pipe(concat('styles.min.css'))  // concat the scss into a single file
        .pipe(cleanCSS())  // minify it
        .pipe(dest('./dist/css/')); //the compiled css destination
}

exports.buildCss = css;