(function(){
  'use strict';

  angular.module('LunchCheck', [])

  .controller('LunchCheckController', ['$scope', function($scope) {
    $scope.message = "";
    $scope.lunchItems = "";
    $scope.tooManyItems = function(items) {
      // var arr = items.trim().split(' ').filter(function(s){s !== "";});
      var arr = items.trim().split(' ').filter(s => s !== ""); // ES6 arrow syntax
      if (arr.length === 0) {$scope.message = "Please enter data first."; return null;}
      if (arr.length <= 3 && arr.length > 0) $scope.message = "Enjoy!";
      if (arr.length > 3) $scope.message = "Too much!";
    };
  }])

  ;
})();