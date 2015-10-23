'use strict';

angular.module('AppForGlow')
  .factory('UserServices', ['$resource', function($resource){
    var service = {};


     service.saveUser = function(User, success, failure) {
     var result = $resource('http://api.mybackend.com/users/', {});
       result.save({}, User, success, failure);

     };



    return service;
  }]
);
