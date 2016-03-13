module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',

    browsers: ['PhantomJS'],

    frameworks: ['jasmine','browserify'],

    files: [
      'src/js/**/*.js',
      'test/**/*.js',
    ],

   preprocessors: {
      'src/js/**/*.js': ['browserify'],
      'test/**/*.spec.js': ['browserify']
    },

    browserify: {
        debug: true,
        transform: [["babelify", { "presets": ["es2015"] }]]
    },

    reporters: ['spec'],

    colors: true,

    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO

  });
};
