module.exports = function ($) {
    'use strict';

    $.gulp.task('clean', function () {
    	return $.gulp.src('./dist', {read: false})
    		.pipe( $.clean() );
    });
}
