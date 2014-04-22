module.exports = function (config) {
	'use strict';

	config.set({
		// base path, that will be used to resolve files and exclude
		basePath: '../',

		// testing framework to use (jasmine/mocha/qunit/...)
		frameworks: ['jasmine'],

		// list of files / patterns to load in the browser
		files: [
			'app/components/jquery/jquery.min.js',
			'app/components/angular/angular.js',
			'app/components/angular-mocks/angular-mocks.js',
			'app/components/angular-localstorage/localStorageModule.js',
			'app/components/angular-resource/angular-resource.min.js',
			'app/components/angular-route/angular-route.min.js',
			'app/components/angular-cookie/angular-cookie.min.js',
			'app/components/angular-mobile/angular-mobile.min.js',
			'app/components/angular-translate/angular-translate.min.js',
			'app/components/angular-hammer/angular-hammer.js',
			'app/components/jquery-ui/ui/minified/jquery.ui.core.min.js',
			'app/components/jquery-ui/ui/minified/jquery.ui.widget.min.js',
			'app/components/jquery-ui/ui/minified/jquery.ui.mouse.min.js',
			'app/components/jquery-ui/ui/minified/jquery.ui.droppable.min.js',
			'app/components/jquery-ui/ui/minified/jquery.ui.draggable.min.js',
			'app/components/angular-dragdrop/src/angular-dragdrop.min.js',
			'app/components/jquery-simulate/jquery.simulate.js',
			'app/components/hammerjs/dist/hammer.js',
			'app/scripts/**/*.js',
			'test/unit/**/*.js'
		],

		// list of files / patterns to exclude
		exclude: ['test/spec/**/*.js'],

		// web server port
		port: 8080,

		// level of logging
		// possible values: LOG_DISABLE || LOG_ERROR || LOG_WARN || LOG_INFO || LOG_DEBUG
		logLevel: config.LOG_INFO,

		// enable / disable watching file and executing tests whenever any file changes
		autoWatch: false,

		reporters: ['mocha', 'progress', 'coverage'],
		preprocessors: {
			'app/scripts/**/*.js': 'coverage'
		},
		coverageReporter: {
			type : 'html',
			dir: 'coverage/'
		},

		// Start these browsers, currently available:
		// - Chrome
		// - ChromeCanary
		// - Firefox
		// - Opera
		// - Safari (only Mac)
		// - PhantomJS
		// - IE (only Windows)
		browsers: ['PhantomJS'],

		plugins: [
			'karma-mocha-reporter',
			'karma-phantomjs-launcher',
			'karma-jasmine',
			'karma-coverage'
		]

		// Continuous Integration mode
		// if true, it capture browsers, run tests and exit
	});
};
