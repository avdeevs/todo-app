var Helpers = require('../helpers');

var scripts = '{app,tests}/**/*.{js,coffee}',
    templates = 'app/templates/**/*.{hbs,handlebars,hjs,emblem}',
    styles = 'app/styles/**/*.{css,sass,scss,less,styl}',
    indexHTML = 'app/index.html',
    other = '{app,tests,public,vendor}/**/*';

module.exports = {
    application: {
        files: 'config/**/*.coffee',
        tasks: ['lock', 'browserify:transient', 'unlock']
    },
    routes: {
        files: ['{app,tests}/router.coffee', '{app,tests}/routes/mixins/*.coffee', '{app,tests}/routes/**/*.coffee'],
        tasks: ['lock', 'buildScripts:routes', 'unlock']
    },
    controllers: {
        files: ['{app,tests}/controllers/mixins/*.coffee', '{app,tests}/controllers/**/*.coffee', 'logic/**/*.coffee'],
        tasks: ['lock', 'buildScripts:controllers', 'unlock']
    },

    models: {
        files: ['{app,tests}/models/**/*.coffee'],
        tasks: ['lock', 'buildScripts:models', 'unlock']
    },

    views: {
        files: ['{app,tests}/views/mixin/*.coffee', '{app,tests}/views/**/*.coffee', '{app,tests}/helpers/**/*.coffee', '{app,tests}/components/**/*.coffee'],
        tasks: ['lock', 'buildScripts:views', 'unlock']
    },


    templates: {
        files: [templates],
        tasks: ['lock', 'buildTemplates', 'unlock']
    },
    styles: {
        files: [styles],
        tasks: ['lock', 'buildStyles', 'unlock']
    },
    indexHTML: {
        files: [indexHTML],
        tasks: ['lock', 'indexHTMLApp', 'unlock']
    },
    other: {
        files: [other, '!'+scripts, '!'+templates, '!'+styles, '!'+indexHTML],
        tasks: ['lock', 'build:debug', 'unlock']
    },

    options: {
        debounceDelay: 200,
        livereload: Helpers.isPackageAvailable("connect-livereload")
    }
};
