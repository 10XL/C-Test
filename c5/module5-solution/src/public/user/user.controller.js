(function() {
	"use strict";

	angular.module('public')
		.controller('UserController', UserController);

	UserController.$inject = ['resUserInfo', 'menuItems', 'UserService'];

	function UserController(resUserInfo, menuItems, UserService) {
		var userCtrl = this;
		userCtrl.userInfo = resUserInfo;
		userCtrl.menuShortNames = menuItems.menu_items.map((s) => s.short_name);

		userCtrl.getItem = function(shortName) {
			var item = menuItems.menu_items.filter((i) => i.short_name==shortName);
			console.log('useCtrl::item', item);
			return item;
		};

		userCtrl.signUp = function(info) {
			userCtrl.userInfo = info;
			info.favItem = userCtrl.getItem(info.favorite);
			UserService.registerUser(info);
			return userCtrl.userInfo;
		};

	}


})();