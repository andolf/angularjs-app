(function(angular) {
	'use strict';

	angular.module('myApp.services')
			.factory('Cart', [
				function() {

					return {
						items: [],
						removeItem: function(index) {
							this.items.splice(index, 1);
						},
						addItem: function(item) {
							this.items.push(item);
						}
					};

				}]);

})(window.angular);
