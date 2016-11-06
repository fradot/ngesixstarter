var gulp = require('gulp'),
    plugins = require('gulp-load-plugins')(),
    browserify = require('browserify'),
    source = require('vinyl-source-stream'),
    buffer = require('vinyl-buffer'),
    gutil = require('gulp-util'),
    // Temporary solution until gulp 4
    // https://github.com/gulpjs/gulp/issues/355
    runSequence = require('run-sequence'),
    Server = require('karma').Server,
    es6Conf = require('./esixstarter-conf.json'),
    dirs = es6Conf.dirs,
    banner = '/* ' + es6Conf.name + ' v' + es6Conf.version +
            ' | ' + es6Conf.author + ' */\n\n';


// -------- HELPER TASKS

gulp.task('lint:js', function () {
  return gulp.src([
      'gulpfile.js',
      dirs.app + '/**/*.js',
      dirs.test + '/**/*.spec.js'
  ]).pipe(plugins.plumber())
    .pipe(plugins.jshint())
    .pipe(plugins.jshint.reporter('jshint-stylish'))
    .pipe(plugins.jshint.reporter('fail'));
});

gulp.task('clean', function (done) {
  require('del')([
      dirs.dist
  ]).then(function () {
      done();
  });
});

gulp.task('scripts', function (done) {
  var b = browserify({
   entries: [dirs.app + '/app.js'],
   debug: true,
   transform: [["babelify", { "presets": ["es2015"] }]]
  });

  return b.bundle()
    .pipe(source('app.js'))
    .pipe(buffer())
    .pipe(plugins.sourcemaps.init({loadMaps: true}))
      .pipe(plugins.uglify({mangle:true}))
      .pipe(plugins.header(banner))
        .on('error', gutil.log)
    .pipe(plugins.sourcemaps.write('./'))
    .pipe(gulp.dest(dirs.dist + '/js'))
    .on('end', function () {
      gulp.src([
          dirs.dist + '/**/*'
        ]).pipe(plugins.connect.reload());
    });
});

gulp.task('styles', function () {
  return gulp.src([
        dirs.app + '/styles/*.less'
  ]).pipe(plugins.sourcemaps.init({loadMaps: true}))
      .pipe(plugins.less())
      .pipe(plugins.header(banner))
      .pipe(plugins.autoprefixer({
              browsers: ['last 2 versions'],
              cascade: false
          }))
      .pipe(plugins.cssnano())
    .pipe(plugins.sourcemaps.write('./'))
    .pipe(gulp.dest(dirs.dist + '/css'))
    .on('end', function () {
      gulp.src(dirs.dist + '/**/*.css')
        .pipe(plugins.connect.reload());
    });
});

gulp.task('source', function () {
  return gulp.src([
      dirs.app + '/**/*',
      '!' + dirs.app + '/styles{,/**/*.less}',
      '!' + dirs.app + '/{,/services,/directives,/controllers,/lib,/**/*.js,/app.js}'
  ], {
      // Include hidden files by default
      dot: true
  }).pipe(gulp.dest(dirs.dist))
  .on('end', function () {
    gulp.src(dirs.dist + '/**/*')
      .pipe(plugins.connect.reload());
  });
});

gulp.task('watch', function (done) {
  // Watching files
  gulp.watch(
       [dirs.app + '/**/*.js',
         dirs.app + '/styles/**/*.less',
         dirs.app + '/*.html'],
       ['lint:js','scripts','styles','source']
     ).on('end', done);
});

gulp.task('karma', function (done) {
   // Starting Karma for test execution
   var server = new Server({
     configFile: __dirname + '/karma.conf.js',
     singleRun: false,
     background: true
   });

   server.start();
   done();
});

gulp.task('connect', function() {
    // Web Server
    plugins.connect.server({
      root: [dirs.dist],
      livereload: true
    });
});

gulp.task('copy', ['scripts','styles','source']);


// -------- TEST TASK

gulp.task('test', function (done) {
   new Server({
     configFile: __dirname + '/karma.conf.js',
     singleRun: true
   },done).start();
 });


// -------- MAIN TASKS

gulp.task('build', function (done) {
  runSequence('clean',
      ['test','lint:js'],
      'copy',
  done);
});

gulp.task('dev', function (done) {
   runSequence('clean','copy',
        ['connect','watch','karma'],
   done);
});

// Starting a web server and karma for tdd.
gulp.task('default',['dev']);
