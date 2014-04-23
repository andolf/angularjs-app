describe('Controller:', function() {
	'use strict';

	var $rootScope, $scope, $controller, $httpBackend, Cart, Api;

	function createController() {
		return $controller('listController', {
			$scope: $scope
		});
	}

	// Load modules for controller
	beforeEach(function() {
		module('myApp');
		module('myApp.controllers');
	});

	beforeEach(inject(function(_$rootScope_, _$controller_, _$httpBackend_, _Cart_, _Api_) {
		$rootScope = _$rootScope_;
		$scope = _$rootScope_.$new();
		$controller = _$controller_;
		$httpBackend = _$httpBackend_;
		Cart = _Cart_;
		Api = _Api_;
	}));

	beforeEach(function () {

		Cart.items = [];

	});

	describe('listController', function() {

		it('should set items on scope', function() {
			createController();
			expect($scope.items.length).toBe(3);
		});

		it('should fetch an item', function() {

			var response = {
				test: 'test'
			};

			$httpBackend.expectGET('http://www.example.com/test/123')
					.respond(function() {
						return [200, response];
					});

			createController();

			$httpBackend.flush();

			runs(function() {
				expect($scope.response.test).toBe(response.test);
			});

		});

		it('should add item to cart', function () {
			createController();
			var item = { text: 'test' };
			$scope.addItem(item);
			expect(Cart.items.length).toBe(1);
			expect(Cart.items[0]).toBe(item);
		});

		it('should remove item from cart', function () {
			createController();
			Cart.items = [
				{ text: 'test' }
			];
			var index = 0;
			$scope.removeItem(index);
			expect(Cart.items.length).toBe(0);
			expect(Cart.items[0]).toBeUndefined();
		});

	});

});