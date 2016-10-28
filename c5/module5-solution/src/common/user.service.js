(function() {
  "use strict";

  angular.module('common')
    .service('UserService', UserService);


  UserService.$inject = ['$http', 'ApiPath'];

  function UserService($http, ApiPath) {
    var userSvc = this;
    userSvc.users = [{}];

    userSvc.newUser = function() {
        return {};
    };

    userSvc.reqUserInfo = function() {
      return userSvc.users[userSvc.users.length-1];
    };

    userSvc.registerUser = function(userData) {
      userSvc.users.push(userData);
      return userSvc[-1];
    };


  }



})();