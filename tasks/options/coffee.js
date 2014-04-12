module.exports = {

    routes: {
        options: { bare: true },
        files: [{
            expand: true,
            cwd: 'app/',
            src: ['routes/mixins/*.coffee', 'routes/**/*.coffee'],
            dest: 'tmp/javascripts/app',
            ext: '.js'
        }]
    },

    controllers: {
        options: { bare: true },
        files: [{
            expand: true,
            cwd: 'app/',
            src: ['controllers/mixins/*.coffee', 'controllers/**/*.coffee', 'logic/**/*.coffee'],
            dest: 'tmp/javascripts/app',
            ext: '.js'
        }]
    },

    models: {
        options: { bare: true },
        files: [{
            expand: true,
            cwd: 'app/',
            src: ['models/**/*.coffee'],
            dest: 'tmp/javascripts/app',
            ext: '.js'
        }]
    },

    views: {
        options: { bare: true },
        files: [{
            expand: true,
            cwd: 'app/',
            src: ['views/mixin/*.coffee', 'views/**/*.coffee', 'components/**/*.coffee', 'helpers/**/*.coffee'],
            dest: 'tmp/javascripts/app',
            ext: '.js'
        }]
    },


    test: {
        options: {
            bare: true
        },
        files: [{
            expand: true,
            cwd: 'tests/',
            src: ['**/*.coffee', '!vendor/**/*.coffee'],
            dest: 'tmp/javascripts/tests',
            ext: '.js'
        }]
    }

};
