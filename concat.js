module.exports = function($){
    'use strict';

    $.gulp.task('concat', function () {
        return $.gulp.src( "./source-dev/**/*.ts" )
            .pipe( $.typeScript({
        			noImplicitAny: true,
        			out: 'angular-semantic-ui.js'
        		}))
            .pipe( $.gulp.dest('./dist'));
    });
}
