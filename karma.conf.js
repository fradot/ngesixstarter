module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',

    browsers: ['Chrome'],

    frameworks: ['jasmine','browserify'],

    files: [
      './app/js/app.js',
      './node_modules/angular-mocks/angular-mocks.js',
      './node_modules/angular-ui-router/release/angular-ui-router.js',
      './app_spec/services/**/*.js',
      './app/**/*.html'
    ],

   preprocessors: {
      './app/**/*.js': ['browserify'],
      './app_spec/**/*.spec.js': ['browserify'],
      './app/**/*.html': ['ng-html2js']
    },

    browserify: {
        debug: true,
        transform: [
            ['babelify', { 'presets': ['es2015'] }],
            'browserify-ngannotate'
          ]
    },

    ngHtml2JsPreprocessor: {
      stripPrefix: '/app',
      moduleName: 'templates'
    },

    // proxies : {
    //   '/js/layout/app-view.html': '/base/js/layout/app-view.html'
    // },

    reporters: ['spec'],

    colors: true,

    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_DEBUG

  });
};
