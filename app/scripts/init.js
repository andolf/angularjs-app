(function(angular) {
	'use strict';

	angular.module('myApp', []);
	angular.module('myApp.controllers', []);

	angular.module('myApp', [
				'ngResource',
				'ngRoute',
				'myApp',
				'myApp.controllers'
			])
			.config(['$routeProvider', function($routeProvider) {
				$routeProvider
						.when('/', {
							templateUrl: 'views/home.html'
						});
			}]);

}(window.angular));
