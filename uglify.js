module.exports = function($){
    'use strict';

    $.gulp.task('uglifyjs:production', function( production ) {
        $.gulp.src( $.foldersPath.dist + '/angular-semantic-ui.js')
            .pipe( $.uglifyjs('angular-semantic-ui.min.js') )
            .pipe( $.gulp.dest( $.foldersPath.dist ) );
    });
}
