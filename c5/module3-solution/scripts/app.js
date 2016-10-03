(function() {
	'use strict';

	angular.module('NarrowItDownApp', [])
		.controller('NarrowItDownController', NarrowItDownController)
		.service('MenuSearchService', MenuSearchService)
		.directive('foundItems', FoundItemsDirective)
		.constant('baseUrl', 'https://davids-restaurant.herokuapp.com/');


	NarrowItDownController.inject = ['MenuSearchService'];

	function NarrowItDownController(MenuSearchService) {
		var nid = this;
		var menuSvc = MenuSearchService;
		nid.found = [];
		nid.search = '';
		nid.showError = false;

		nid.getItems = function(search) {
			if (search === '') return (nid.showError = true);
			menuSvc.getMatchedMenuItems()
				.then(items => nid.found = menuSvc.filterItems(search, items))
				.then(items => items.length === 0 ? nid.showError = true : nid.showError = false)
		};
		nid.removeItem = function(id) {
			nid.found.splice(id, 1);
		};

	}


	MenuSearchService.inject = ['$http', 'baseUrl'];

	function MenuSearchService($http, baseUrl) {
		var menuSvc = this;

		menuSvc.filterItems = function(searchTerm, array) {
			return array.filter(s => s.description.toLowerCase().includes(searchTerm));
		};
		menuSvc.getMatchedMenuItems = function(searchTerm) {
			return $http({
				url: (baseUrl + "/menu_items.json")
			}).then(res => res.data.menu_items);
		};

	}


	function FoundItemsDirective() {
		var ddo = {
			templateUrl: 'templates/foundItems.html',
			scope: {
				items: '<',
				onRemove: '&',
			},
			controller: NarrowItDownController,
			controllerAs: 'list',
			bindToController: true,
		};

		return ddo;
	}


})();