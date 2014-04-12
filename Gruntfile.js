module.exports = function(grunt) {

    var Helpers = require('./tasks/helpers'),
        filterAvailable = Helpers.filterAvailableTasks,
        _ = grunt.util._;

    Helpers.pkg = require("./package.json");

    if (Helpers.isPackageAvailable("time-grunt")) {
        require("time-grunt")(grunt);
    }

    // Loads task options from `tasks/options/`
    // and loads tasks defined in `package.json`
    var config = require('load-grunt-config')(grunt, {
        configPath: "tasks/options",
        init: false
    });
    grunt.loadTasks('tasks'); // Loads tasks in `tasks/` folder

    config.env = process.env;


    // Default Task
    // ------------------
    grunt.registerTask('default', "Build (in debug mode) & test your application.", ['test']);

    // Servers
    // -------------------
    grunt.registerTask('server', "Run your server in development mode, auto-rebuilding when files change.", [
        'clean:debug',
        'build:debug',
        'expressServer:debug',
        'watch'
    ]);

    grunt.registerTask('server:dist', "Build and preview a minified & production-ready version of your app.", [
        'dist',
        'expressServer:dist:keepalive'
    ]);

    // Acceptance testing
    // ---------------------
    grunt.registerTask('test', "Wake up test application and run all acceptance cukes", [
        'build:test',
        'cucumberjs'
    ]);

    // Worker tasks
    // =================================
    grunt.registerTask('build:staging', [ 'build:common', 'concurrent:debug', 'copy:assemble', 'copy:dist' ]);
    grunt.registerTask('build:debug',   [ 'build:common', 'concurrent:debug' ]);
    grunt.registerTask('build:test',    [ 'build:common', 'concurrent:test', 'copy:test' ]);

    grunt.registerTask('build:common', [
        "buildTemplates", "buildScripts", "buildStyles"
    ]);

    // Templates
    grunt.registerTask('buildTemplates', [
        'emblem:compile'
    ]);


    // Scripts
    grunt.registerTask('buildScripts', [
        'buildScripts:routes',
        'buildScripts:controllers',
        'buildScripts:models',
        'buildScripts:views'
    ]);


    grunt.registerTask('buildScripts:routes', [ 'coffee:routes', 'concat_sourcemap:routes' ]);
    grunt.registerTask('buildScripts:controllers', [ 'coffee:controllers', 'concat_sourcemap:controllers' ]);
    grunt.registerTask('buildScripts:models', [ 'coffee:models', 'concat_sourcemap:models' ]);
    grunt.registerTask('buildScripts:views', [ 'coffee:views', 'concat_sourcemap:views' ]);

    // Styles
    grunt.registerTask('buildStyles', filterAvailable([
        'less:compile',
        'cssmin'
    ]));

    // Parallelize most of the build process
    _.merge(config, {
        concurrent: {
            debug: [
                "browserify:transient",
                "indexHTMLApp"
            ],
            test: [
                "browserify:test",
                "indexHTMLTestApp"
            ]
        }
    });

    // Index HTML
    grunt.registerTask('indexHTMLApp', [ 'preprocess:indexHTMLApp' ]);
    grunt.registerTask('indexHTMLTestApp', [ 'preprocess:indexHTMLTestApp' ]);


    grunt.initConfig(config);
}
