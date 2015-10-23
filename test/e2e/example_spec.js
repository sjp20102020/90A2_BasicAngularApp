'use strict';

describe('Angular Form App', function() {
  beforeEach(function () {
    browser.get('/');
  });

  describe('Loading of the form', function () {
  it('should display title as "User Details Form" when I load form page', function() {
    expect(browser.getTitle()).toBe('User Details Form');
  });

  it('should display the heading as "User Details Form" when I load form page ', function () {
    expect(element(by.css('.container div h2')).getText()).toBe('User Details Form');

  });


  });


  describe('Form Fields functionality', function () {
    xit('should display error message when black is entered full name text field', function () {
      var nameField = element(by.model('userDetails.fullName'));
      nameField.sendKeys('');
      var dobField = element(by.model('userDetails.dob'));
      dobField.click();
      expect(element(by.css('ng-messages="userDetailsForm.uFullName.$error"')).isPresent());
    });



  } );



});
