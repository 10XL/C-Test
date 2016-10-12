(function() {
  'use strict';

  angular.module('MenuApp')
    .config(RoutesConfig);

  RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider'];

  function RoutesConfig($stateProvider, $urlRouterProvider, $locationProvider) {

    $urlRouterProvider.otherwise('/');
    $locationProvider.html5Mode({
      enabled: true,
      requireBase: false
    });
    $stateProvider
    .state('home', {
        url: '/',
        templateUrl: 'src/templates/home.html'
      })

    .state('categories', {
      url: '/categories',
      templateUrl: 'src/templates/categories.html',
      controller: 'CategoryListController as categoryCtrl',
      resolve: {
        items: ['MenuDataService', function(MenuDataService) {
          return MenuDataService.getAllCategories();
        }]
      }
    })

    .state('items', {
      url: '/items/{shortName}',
      templateUrl: 'src/templates/items.html',
      controller: 'ItemCategoryController as itemCategoryCtrl',
      resolve: {
        items: ['$stateParams', 'MenuDataService',
        function($stateParams, MenuDataService) {
          return MenuDataService.getItemsForCategory($stateParams.shortName);
        }]
      }
    });
  }

})();