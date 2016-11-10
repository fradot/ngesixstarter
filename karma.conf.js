module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',

    browsers: ['PhantomJS'],

    frameworks: ['jasmine','browserify'],

    files: [
      './dist/js/app.js',
      './node_modules/angular-ui-router/release/angular-ui-router.js',
      './node_modules/angular-mocks/angular-mocks.js',
      './app_spec/services/**/*.js',
      './app_spec/controllers/**/*.js'
    ],

   preprocessors: {
      'app/**/*.js': ['browserify'],
      'app_spec/**/*.spec.js': ['browserify']
    },

    browserify: {
        debug: true,
        transform: [["babelify", { "presets": ["es2015"] }]]
    },

    reporters: ['spec'],

    colors: true,

    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_ERROR

  });
};
