describe('Directive:', function() {
	'use strict';

	var $rootScope, $scope, element;

	// Load modules for controller
	beforeEach(function() {
		module('myApp.directives');
	});

	beforeEach(inject(function(_$rootScope_, $compile) {
		$rootScope = _$rootScope_;
		$scope = _$rootScope_.$new();

		element = angular.element('<button add-class>Click me!</button>');
		$compile(element)($scope);
		$scope.$digest();
	}));

	describe('addClass', function() {

		it('should set class on click', function() {
			$(element).click();

			expect(element.hasClass('button-red')).toBe(true);
		});

	});

});