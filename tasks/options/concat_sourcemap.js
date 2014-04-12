module.exports = {

    routes: {

        files: {
            'tmp/public/assets/routes.js': [
                'tmp/javascripts/app/routes/mixins/*.js',
                'tmp/javascripts/app/routes/**/*.js'
            ]
        },

        options: { sourcesContent: true }
    },

    controllers: {

        files: {
            'tmp/public/assets/controllers.js': [
                'tmp/javascripts/app/controllers/mixins/*.js',
                'tmp/javascripts/app/controllers/**/*.js',
                'tmp/javascripts/app/logic/**/*.js'
            ]
        },

        options: { sourcesContent: true }
    },

    models: {

        files: {
            'tmp/public/assets/models.js': [
                'tmp/javascripts/app/models/**/*.js'
            ]
        },

        options: { sourcesContent: true }
    },

    views: {

        files: {
            'tmp/public/assets/views.js': [
                'tmp/javascripts/app/views/mixin/*.js',
                'tmp/javascripts/app/views/**/*.js',
                'tmp/javascripts/app/components/**/*.js',
                'tmp/javascripts/app/helpers/**/*.js'
            ]
        },

        options: { sourcesContent: true }
    },

    test: {
        src: 'tmp/javascripts/tests/**/*.js',
        dest: 'tmp/public/tests/tests.js',

        options: {
            sourcesContent: true
        }
    }
};