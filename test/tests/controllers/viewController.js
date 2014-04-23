describe('Controller:', function() {
	'use strict';

	var $rootScope, $scope, $controller;

	function createController () {
		return $controller('viewController', {
			$scope: $scope
		});
	}

	// Load modules for controller
	beforeEach(function () {
		module('myApp.controllers');
	});

	beforeEach(inject(function(_$rootScope_, _$controller_) {
		$rootScope = _$rootScope_;
		$scope = _$rootScope_.$new();
		$controller = _$controller_;
	}));

	describe('viewController', function() {

		it('should set string on hello', function() {
			createController();
			expect($scope.hello).toBe('hello world');
		});

	});

});