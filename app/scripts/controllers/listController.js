(function(angular) {
	'use strict';

	angular.module('myApp.controllers')
			.controller('listController', [
				'$scope',
				'Cart',
				'Api',
				function($scope, Cart, Api) {

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

					$scope.addItem = function(item) {
						Cart.addItem(item);
					};

					$scope.removeItem = function(index) {
						Cart.removeItem(index);
					};

					$scope.$watch(function() {
						return Cart.items;
					}, function() {
						$scope.cartItems = Cart.items;
					});

				}]);

})(window.angular);