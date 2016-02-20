module.exports = function($){
    'use strict';

    $.gulp.task('uglify', function() {
        return $.gulp.src('./dist/angular-semantic-ui.js')
            .pipe( $.uglifyjs('angular-semantic-ui.min.js'))
            .pipe( $.gulp.dest('./dist'));
    });
}
