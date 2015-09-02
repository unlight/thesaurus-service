"use strict";
var gulp = require("gulp");
var g = require("gulp-load-plugins")();

var paths = {
   ts: "src/**/*.ts",
   dest: "dist"
};

var tsOptions = {
   "target": "es5",
   "module": "commonjs",
   "typescript": require("typescript")
};

gulp.task("tswatch", function() {
   g.watch(paths.ts, {
      ignoreInitial: false,
      verbose: false
   }, g.batch(function(events, done) {
      events
         .pipe(g.tslint())
         .pipe(g.tslint.report("verbose"))
         //.pipe(g.sourcemaps.init())
         .pipe(g.typescript(tsOptions))
         //.pipe(g.sourcemaps.write())
         .pipe(gulp.dest(paths.dest));
      events.on("end", done);
      events.on("data", function (file) {
      	var niceRelativePath = file.path.slice(file.cwd.length + 1);
      	g.util.log(g.util.colors.magenta(niceRelativePath), "was changed");
      });
      events.on("error", g.util.beep);
   }));

});


gulp.task("compile", function() {
   gulp.src(paths.ts)
      //.pipe(g.sourcemaps.init())
      .pipe(g.typescript(tsOptions))
      //.pipe(g.sourcemaps.write())
      .pipe(gulp.dest(paths.dest));
});


gulp.task('test', function(done) {
   // Be sure to return the stream
   var karma = require('karma').server;
   karma.start({
      singleRun: false,
      files: [
         "test/test.js"
      ],
      // karma has its own autoWatch feature but Grunt watch can also do this
      // autoWatch: false,

      // testing framework, be sure to install the karma plugin
      frameworks: ['jasmine'],

      // browsers to test against, be sure to install the correct karma browser launcher plugin
      //browsers: ['Chrome'],

      // progress is the default reporter
      reporters: ['progress'],

      // map of preprocessors that is used mostly for plugins
      preprocessors: {

      },

      autoWatch: true,

      browsers: ['PhantomJS_custom'],

      // you can define custom flags
      customLaunchers: {
         'PhantomJS_custom': {
            base: 'PhantomJS',
            options: {
               settings: {
                  webSecurityEnabled: false
               },
            },
            flags: ['--load-images=false'],
            // debug: true
         }
      },

      // list of karma plugins
      plugins: [
         'karma-chrome-launcher',
         'karma-phantomjs-launcher',
         'karma-jasmine',
      ]
   }, done);
   // return gulp.src("test/test.js")
   //  .pipe(g.karma({
   //    configFile: 'karma.conf.js',
   //    action: 'run'
   //  }))
   //  .on('error', function(err) {
   // 	 console.error(err.stack);
   //    // Make sure failed tests cause gulp to exit non-zero
   //    throw err;
   //  });
});