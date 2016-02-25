module.exports = function ($){
    'use strict';

    $.gulp.task('typeScript:development', function( ) {
        return $.gulp.src( $.foldersPath.source + "/components/**/*.ts" )
            .pipe( $.typeScript({
                noImplicitAny: true,
            }))
            .pipe($.gulp.dest( $.foldersPath.build + '/components' ));
    });



    $.gulp.task('typeScript:production', function( ) {
        return $.gulp.src( $.foldersPath.source + "/components/**/*.ts" )
            .pipe( $.typeScript({
                noImplicitAny: true,
                out: 'angular-semantic-ui.js'
            }))
            .pipe($.gulp.dest( $.foldersPath.dist ));
    });
}
