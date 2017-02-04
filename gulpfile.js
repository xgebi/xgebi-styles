var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var sass = require('gulp-sass');
var debug = require('gulp-debug');

// Compile sass into CSS & auto-inject into browsers
gulp.task('styleguide-sass', function () {
    return gulp.src('./scss/styleguide.scss')
        .pipe(debug({ title: 'unicorn:' }))
        .pipe(sass({ includePaths: ['node_modules/modularscale-sass/stylesheets/'] }).on('error', sass.logError))
        .pipe(gulp.dest('./src/styleguide'));
});

gulp.task('styleguide', ['styleguide-sass'], function () {
    browserSync.init({
        server: "./src/styleguide"
    });
    gulp.watch("scss/styleguide.scss", ['styleguide-sass']);
    gulp.watch("scss/styleguide/**/*.scss", ['styleguide-sass']);
    gulp.watch("src/css/styleguide.css").on('change', browserSync.reload);
    gulp.watch("src/**/*.html").on('change', browserSync.reload);
})

gulp.task('sarahgebauer-sass', function () {
    return gulp.src('./scss/sarahgebauer.scss')
        .pipe(debug({ title: 'unicorn:' }))
        .pipe(sass({ includePaths: ['node_modules/modularscale-sass/stylesheets/'] }).on('error', sass.logError))
        .pipe(gulp.dest('./src/sarahgebauer'));
});

gulp.task('sarahgebauer', ['sarahgebauer-sass'], function () {
    browserSync.init({
        server: "./src/sarahgebauer"
    });
    gulp.watch("scss/sarahgebauer.scss", ['sarahgebauer-sass']);
    gulp.watch("scss/sarahgebauer/**/*.scss", ['sarahgebauer-sass']);
    gulp.watch("src/css/sarahgebauer.css").on('change', browserSync.reload);
    gulp.watch("src/**/*.html").on('change', browserSync.reload);
})