module.exports = {
    transient: {
        files: {
            'tmp/public/assets/application.js': ['config/application.coffee', 'config/environments/transient.coffee']
        },
        options: {
            transform: ['coffeeify'],
            debug: true
        }
    },

    //test: {
    //    files: {
    //        'tmp/public/assets/application.js': ['config/application.coffee', 'config/environments/test.coffee']
    //    },
    //    options: { transform: ['coffeeify'] }
    //}
};
