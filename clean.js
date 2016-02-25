module.exports = function ($) {
    'use strict';

    $.gulp.task('clean:development', function ( ) {
        return $.gulp.src( $.foldersPath.build, {read: false})
            .pipe( $.clean() );
    });



    $.gulp.task('clean:production', function ( ) {
        return $.gulp.src( $.foldersPath.dist, {read: false})
            .pipe( $.clean() );
    });
}
