(function(angular) {
	'use strict';

	angular.module('myApp.services')
			.factory('Api', [
				'$resource',
				'apiSettings',
				function($resource, apiSettings) {

					var Api = {};

					Api.test = $resource(apiSettings.path + '/test/:id',
							{ id: '@id' }
					);

					return Api;

				}]);

})(window.angular);
