module.exports = function ($) {
    'use strict';

    $.gulp.task('jade', function ( ) {
        return $.gulp.src( $.foldersPath.source + '/**/*.jade')
            .pipe($.jade({
                pretty: true
            }))
            .pipe($.gulp.dest( $.foldersPath.build ));
    });
}
