'use strict';

describe('Controller: formCtrl', function () {

  // load the controller's module
  beforeEach(module('AppForGlow'));

  var formCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    formCtrl = $controller('formCtrl', {
      $scope: scope
      // place here mocked dependencies
    });



  }));

  it('should pass a dummy test', function () {
    expect(formCtrl).toBeTruthy();
  });

  it('should have currentDate defined', function () {
    expect(scope.currentDate).toBeTruthy();
  });

  it('should have saveUserForm defined', function () {
    expect(scope.saveUserForm).toBeTruthy();
  });

  it('should have resetUserForm defined', function () {
    expect(scope.resetUserForm).toBeTruthy();
  });

  it('should have resetMessage defined', function () {
    expect(formCtrl.resetMessage).toBeTruthy();
  });

});
