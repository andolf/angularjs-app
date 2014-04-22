(function(angular) {
	'use strict';

	angular.module('myApp.controllers')
			.controller('viewController', [
				'$scope',
				function($scope) {

					$scope.hello = 'hello world';

				}]);

})(window.angular);