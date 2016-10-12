(function() {
	'use strict';

	angular.module('data')
		.service('MenuDataService', MenuDataService);

	MenuDataService.inject = ['$http', 'baseUrl'];

	function MenuDataService($http, baseUrl) {
		var menuSvc = this;

		menuSvc.getAllCategories = function() {
			return $http({
				url: baseUrl + '/categories.json'
			}).then(res => res.data);
		};

		menuSvc.getItemsForCategory = function(categoryShortName) {
			return $http({
				url: baseUrl + '/menu_items.json?category=' + categoryShortName
			}).then(res => res.data);
		};
	}

})();