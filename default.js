module.exports = function ($){
    'use strict';

    $.gulp.task('default', $.sync.sync(['clean', 'concat', 'uglify']));
}
