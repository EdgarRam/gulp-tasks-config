module.exports = function ($){
    'use strict';

    $.gulp.task('default', $.sync.sync(
        [
            // Sync
            'clean:development',
            [
                // Async
                'typeScript:development',
                'jade',
            ],
            'server',
            'watch',
        ]
    ));

    $.gulp.task('production', $.sync.sync(
        [
            'clean:production',
            'typeScript:production',
            'uglifyjs:production',
        ]
    ));

}
