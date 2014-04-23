(function(angular) {
	'use strict';

	angular.module('myApp', []);
	angular.module('myApp.controllers', []);
	angular.module('myApp.directives', []);
	angular.module('myApp.services', []);

	angular.module('myApp', [
				'ngResource',
				'ngRoute',
				'myApp',
				'myApp.controllers',
				'myApp.directives',
				'myApp.services'
			])
			.value('apiSettings', { path: 'http://www.example.com' })
			.config([
				'$routeProvider',
				function($routeProvider) {
					$routeProvider
							.when('/', {
								templateUrl: 'views/home.html'
							})
							.when('/list', {
								templateUrl: 'views/list.html'
							});
				}]);

}(window.angular));
