'file strikt';
const
    gulp = require('gulp'),
    concat = require('gulp-concat'),
    sass = require('gulp-sass'),
    sourcemaps = require('gulp-sourcemaps'),
    notify = require('gulp-notify'), 
    plumber = require('gulp-plumber'),
    rename = require('gulp-rename'),
    cssmin = require('gulp-cssmin'),
    wiredep = require('wiredep').stream,
    del = require('del'),
    runSequence = require('run-sequence'),
    browserSync = require('browser-sync').create();
var
    paths = {
        pathWeb: '.',
        pathDist: 'dist'
    };

gulp.task('bower', function () {
    return gulp.src('index.php')
        .pipe(wiredep({
            src: [paths.pathWeb +    '/js/*.js'],
            devDependencies: true
        }))
        .pipe(gulp.dest('./'));
});

gulp.task('serve', function () {
    browserSync.init({
        proxy: "light-people"
    });
    browserSync.watch(paths.pathDist + "/**/*.*").on('change', browserSync.reload);
});

gulp.task('js', function () {
    return gulp.src(paths.pathWeb + '/js/**/*.js')
        .pipe(plumber({
            errorHandler: notify.onError(function (err) {
                return {
                    title: 'js',
                    message: err.message
                };
            })
        }))
        .pipe(gulp.dest(paths.pathDist + ''))
});

gulp.task('scss', function () {
    return gulp.src(paths.pathWeb + '/scss/main.scss')
        .pipe(plumber({
            errorHandler: notify.onError(function (err) {
                return {
                    title: 'Sass',
                    message: err.message
                };
            })
        }))
        .pipe(sourcemaps.init())
        .pipe(sass({includePaths: [paths.pathWeb + '/scss/**/*.scss']}))
        .pipe(sass({includePaths: [paths.pathWeb + '/scss/**/*.css']}))
        //.pipe(cssmin())
        //.pipe(rename({suffix: '.min'}))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(paths.pathDist + ''))
});

gulp.task('img', function () {
    return gulp.src(paths.pathWeb + '/img/**/*.*')
        .pipe(gulp.dest(paths.pathDist + '/img/'));
});

gulp.task('clean', function () {
    return del(paths.pathDist + '');
});

gulp.task('fonts', function () {
    return gulp.src(paths.pathWeb + '/fonts/**/*.*')
        .pipe(gulp.dest(paths.pathDist + '/fonts/'));
});

gulp.task('watch', function () {
    gulp.watch(paths.pathWeb + '/scss/**/*.scss', ['scss']);
    gulp.watch(paths.pathWeb + '/js/**/*.js', ['js']);
});

gulp.task('build', function () {
    return runSequence('clean',  'scss', 'js', 'img', 'fonts');
});

gulp.task('default', function () {
    return runSequence(['serve', 'watch']);
});
