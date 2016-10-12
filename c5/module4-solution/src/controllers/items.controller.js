(function() {
	'use strict';

	angular.module('data')
		.controller('ItemCategoryController', ItemCategoryController);

	ItemCategoryController.$inject = ['items'];

	function ItemCategoryController(items) {
		var itemCategoryCtrl = this;
		itemCategoryCtrl.items = items;
	}

})();