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
    argv = require('yargs').argv,
    gulpif = require('gulp-if'),
    es6Conf = require('./esixstarter-conf.json'),
    dirs = es6Conf.dirs,
    banner = '/* ' + es6Conf.name + ' v' + es6Conf.version +
            ' | ' + es6Conf.author + ' */\n\n';


// -------- HELPER TASKS

gulp.task('lint:js', function () {
  return gulp.src([
      'gulpfile.js',
      dirs.src + '/js/*.js',
      dirs.test + '/*.spec.js'
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
   entries: [dirs.src + '/js/main.js'],
   debug: true,
   transform: [["babelify", { "presets": ["es2015"] }]]
  });

  return b.bundle()
    .pipe(source('main.min.js'))
    .pipe(buffer())
    // sourcemaps - currently not working
    // .pipe(gulpif(!argv.production,plugins.sourcemaps.init({loadMaps: true})))
    .pipe(gulpif(!argv.production,plugins.uglify({mangle:true})))
      .on('error', gutil.log)
    // .pipe(gulpif(!argv.production,plugins.sourcemaps.write('./')))
    .pipe(plugins.header(banner))
    .pipe(gulp.dest(dirs.dist + '/js'))
    .pipe(plugins.connect.reload());
});

gulp.task('styles', function () {
  return gulp.src([
        dirs.src + '/less/*.less'
  ]).pipe(plugins.header(banner))
    .pipe(plugins.plumber())
    .pipe(plugins.less())
    .pipe(plugins.autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
    .pipe(gulpif(argv.production,plugins.cssnano()))
    .pipe(plugins.concat('main.min.css'))
    .pipe(gulp.dest(dirs.dist + '/css'))
    .pipe(plugins.connect.reload());
});

gulp.task('source', function () {
  return gulp.src([
      dirs.src + '/**/*',
      '!' + dirs.src + '/less/*.less',
      '!' + dirs.src + '/less',
      '!' + dirs.src + '/js/*.js'
  ], {
      // Include hidden files by default
      dot: true
  }).pipe(gulp.dest(dirs.dist));
    // .pipe(plugins.connect.reload());
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
  runSequence(
      ['clean','test','lint:js'],
      'copy',
  done);
});

gulp.task('dev',['copy','connect'], function () {
   // Watching files
   gulp.watch(
        [dirs.src + '/js/*.js',dirs.test + '/*.js',
          dirs.src + '/less/*.less',dirs.src + '/*.html'],
        ['lint:js','scripts','styles','source']
    );

    // Starting Karma for test execution
    new Server({
      configFile: __dirname + '/karma.conf.js',
      singleRun: false,
      background: true
    }).start();
});

// Web Server
gulp.task('connect', function() {
    plugins.connect.server({
      root: [dirs.dist],
      livereload: true
    });
});

// Starting a web server and karma for tdd.
gulp.task('default', ['dev']);
