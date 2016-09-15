(function(){
	'use strict';

	angular.module('ShoppingListCheckOff', [])
	.service('ShoppingListCheckOffService', function() {
		var toBuy = [
			{name:"orange", qty:4},
			{name:"lemon", qty:2},
			{name:"carrot", qty:3},
			{name:"apple", qty:6},
			{name:"banana", qty:6},
		];
		var alreadyBought = [];

		this.getAvailableItems = function() {
			return toBuy;
		};
		this.getBoughtItems = function() {
			return alreadyBought;
		};
		this.buyItem = function(name) {
			var i = toBuy.map(function(s) { return s.name; }).indexOf(name);
			var item = toBuy.splice(i, 1);
			this.addItem(item[0]);
		};
		this.addItem = function(item) {
			alreadyBought.push(item);
		};

	})
	
	.controller('ToBuyShoppingController', ['$scope', '$filter', 'ShoppingListCheckOffService',
	 function($scope, $filter, ShoppingListCheckOffService) {
	 	var shoppingService = ShoppingListCheckOffService;
	 	$scope.items = shoppingService.getAvailableItems();
	 	$scope.buyRequest = function(name) {
	 		console.log("buy_controller: name is:", name);
	 		shoppingService.buyItem(name);
	 	};
	}])

	.controller('AlreadyBoughtShoppingController', ['$scope', 'ShoppingListCheckOffService',
	 function($scope, ShoppingListCheckOffService) {
	 	var shoppingService = ShoppingListCheckOffService;
	 	$scope.boughtItems = shoppingService.getBoughtItems();
	}])
;
})();