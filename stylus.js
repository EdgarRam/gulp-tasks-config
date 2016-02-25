module.exports = function ($) {
    'use strict';

    $.gulp.task('stylus:development', function () {
        $.gulp.src('source-dev/main.styl')
            .pipe($.stylus())
            .pipe($.gulp.dest( $.foldersPath.build ));
    });


    $.gulp.task('stylus:production', function () {
        $.gulp.src('source-dev/main.styl')
            .pipe($.stylus())
            .pipe($.gulp.dest( $.foldersPath.dist ));
    });
}
