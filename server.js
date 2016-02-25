module.exports = function ($){
    'use strict';

    $.gulp.task('server', function() {
        $.gulp.src( $.foldersPath.build )
            .pipe($.serverLiveReload({
                livereload: true,
                directoryListing: {
                    enable: true,
                    path: $.foldersPath.build
                },
                open: true
            }));
        });
}
