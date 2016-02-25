module.exports = function ($) {
    'use strict';

    $.gulp.task('watch', function() {
        $.gulp.watch( $.foldersPath.source + 'components/**/*.js', ['typeScript:development']);
        // gulp.watch( $.foldersPath.source + 'main.styl', ['stylus']);
        $.gulp.watch( $.foldersPath.source + '/**/*.jade', ['jade']);
    });

}
