'use strict';
describe('UserServices', function () {

  var userServices, $httpBackend;
  beforeEach(module('AppForGlow'));

  beforeEach(function () {
    angular.mock.inject(function ($injector) {
      $httpBackend = $injector.get('$httpBackend');
      userServices = $injector.get('UserServices');
    });
  });


  it('should check for UserServices exist', inject(function (UserServices) {
    var service = UserServices;
    expect(service).toBeDefined();

  }));

  it('should send a response when call the api', function () {
    $httpBackend.expect('POST', 'http://api.mybackend.com/users/').respond(200, 'success');
    var dummyUser = {
      fullName: "Siddy",
      dob: new Date('1980-01-01'),
      sex: "male"
    };
    userServices.saveUser(dummyUser);
    $httpBackend.flush();
    expect(userServices.saveUser).toBe('success');

  });

});
