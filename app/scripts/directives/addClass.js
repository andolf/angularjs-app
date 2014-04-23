(function(angular) {
	'use strict';

	angular.module('myApp.directives')
			.directive('addClass', [
				function() {
					return {
						link: function(scope, element) {

							element.on('click', function() {
								element.toggleClass('button-red');
							});

						}
					};
				}
			]);

})(window.angular);