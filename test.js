module.exports = function ($){
    'use strict';


    $.gulp.task('test', function (done) {
        new $.karmaServer({
            configFile:  $.foldersPath.rootPath + 'karma.conf.js',
            singleRun: true
        }, done).start();
    });
    

}