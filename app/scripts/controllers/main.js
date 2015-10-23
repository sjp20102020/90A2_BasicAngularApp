'use strict';


angular.module('AppForGlow')
  .controller('formCtrl', ['$scope','UserServices','$interval',function ($scope, UserServices,$interval) {
      var currentDate=new Date();
      $scope.currentDate = currentDate.toISOString();

    //$scope.user = {};



    //this.User = {};
    $scope.saveUserForm = function(userObj, userForm) {

      this.User = {
        fullName : userObj.fullName,
        dob : userObj.dob,
        sex : userObj.sex
      };
      console.log(userObj);
      console.log(this.User);


     /* UserServices.saveUser(User,
        function(successResponse){
          console.log(successResponse);
      }, function(errorResponse){
          console.log(errorResponse);

      });*/


      UserServices.saveUser(this.User,
        function(successResponse){
          console.log(successResponse);
          $scope.showMsg = true;
          $scope.messages = "Data was successfully saved";
          $scope.resetUserForm(userForm);
        }, function(errorResponse){
          console.log(errorResponse);
          $scope.showMsg = true;
          $scope.messages = "Error while saving. Please try again. ";
          $scope.resetUserForm(userForm);
        });

       };


    $scope.resetUserForm = function(userForm) {
      if(userForm){
        userForm.$setPristine();
        userForm.$setUntouched();
      $scope.userDetails = {};
        this.resetMessage();
      }
    };

    this.resetMessage = function () {
      $interval(function () {
        $scope.messages = {};
        $scope.showMsg = false;
      }, 5000);

    };



  }]);
