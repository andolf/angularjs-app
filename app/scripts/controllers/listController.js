(function(angular) {
	'use strict';

	angular.module('myApp.controllers')
			.controller('listController', [
				'$scope',
				'$q',
				'Api',
				function($scope, $q, Api) {

					Api.test.get({
						id: '123'
					}, function(response) {
						$scope.response = response;
					});

					$scope.items = [
						{
							text: 'item1'
						},
						{
							text: 'item2'
						},
						{
							text: 'item3'
						}
					];

				}]);

})(window.angular);