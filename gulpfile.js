var gulp = require('gulp'),
    plugins = require('gulp-load-plugins')(),
    browserify = require('browserify'),
    babelify = require('babelify'),
    ngAnnotate = require('browserify-ngannotate'),
    source = require('vinyl-source-stream'),
    buffer = require('vinyl-buffer'),
    gutil = require('gulp-util'),
    templateCache = require('gulp-angular-templatecache'),
    // Temporary solution until gulp 4
    // https://github.com/gulpjs/gulp/issues/355
    runSequence = require('run-sequence'),
    Server = require('karma').Server,
    es6Conf = require('./project-conf.json'),
    packageJson = require('./package.json'),
    dirs = es6Conf.dirs,
    banner = '/* ' + packageJson.name + ' v' + packageJson.version +
            ' | ' + packageJson.author + ' */\n\n';

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
      dirs.dist,
      dirs.app + "/js/partials"
  ]).then(function () {
      done();
  });
});

gulp.task('partials', function () {
  return gulp.src(dirs.app + '/js/**/*.html')
    .pipe(templateCache(
      'index.js', {
        "module":'app.partials',
        "standalone": true,
        "moduleSystem": "ES6"
      }
    ))
    .pipe(gulp.dest(dirs.app + '/js/partials'));
});

gulp.task('scripts',['partials'], function () {
  return browserify(dirs.app + '/js/app.js')
    .transform(babelify, { "presets": ["es2015"] })
    .transform(ngAnnotate)
    .bundle()
    .pipe(source('app.js'))
    .pipe(buffer())
    .pipe(plugins.sourcemaps.init({loadMaps: true}))
      .pipe(plugins.uglify({mangle:true}))
      .pipe(plugins.header(banner))
        .on('error', gutil.log)
    .pipe(plugins.sourcemaps.write('./'))
    .pipe(gulp.dest(dirs.dist + '/js'));
});

gulp.task('styles', function () {
  return gulp.src([
        dirs.app + '/styles/*.less'
  ]).pipe(plugins.sourcemaps.init({loadMaps: true}))
      .pipe(plugins.less())
      .pipe(plugins.autoprefixer({
              browsers: ['last 2 versions'],
              cascade: false
          }))
      .pipe(plugins.cssnano())
      .pipe(plugins.header(banner))
    .pipe(plugins.sourcemaps.write('./'))
    .pipe(gulp.dest(dirs.dist + '/css'));
});

gulp.task('source', function () {
  return gulp.src([
      dirs.app + '/**/*',
      '!' + dirs.app + '/styles{,/**/*.less}',
      '!' + dirs.app + '/js{/*,/*/**.html,/**/*.js,/app.js}'
  ], {
      // Include hidden files by default
      dot: true
  }).pipe(gulp.dest(dirs.dist));
});

gulp.task('watch', function (done) {
  // Watching files
  gulp.watch(
       [dirs.app + '/**/*.js',
        '!' + dirs.app + '/js/partials/**/*.js',
         dirs.app + '/styles/**/*.less',
         dirs.app + '/**/*.html'],
       ['lint:js','reload']
     );
});

gulp.task('reload', ['scripts','styles','source'] , function(){
    gulp.src(dirs.dist + '/**/*')
      .pipe(plugins.connect.reload());
});

gulp.task('karma', function (done) {
   // Starting Karma for test execution
   var server = new Server({
     configFile: __dirname + '/karma.conf.js',
     singleRun: false,
     background: true
   },done).start();
});

gulp.task('connect', function() {
    // Web Server
    plugins.connect.server({
      root: [dirs.dist],
      livereload: true
    });
});


// -------- TEST TASK

gulp.task('test', function (done) {
   new Server({
     configFile: __dirname + '/karma.conf.js',
     singleRun: true
   },done).start();
 });


// -------- MAIN TASKS

gulp.task('build', function (done) {
  runSequence(['clean'],
      ['test','lint:js'],
      ['scripts','styles','source'],
  done);
});

gulp.task('dev', function (done) {
   runSequence(
        ['clean'],
        ['scripts','styles','source'],
        ['connect','watch','karma'],
   done);
});

// Starting a web server and karma for tdd.
gulp.task('default',['dev']);
