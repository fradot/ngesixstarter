describe('Users controllers', function() {
  var UsersController,UsersService;

  // Loading module
  beforeEach(angular.mock.module('ngesixstarter'));

  // Injecting Controller
  beforeEach(inject(function($controller,_UsersService_) {
    UsersController = $controller('UsersController');
    UsersService = _UsersService_;
  }));

  // Verifying exixstence
  it('should exist', function() {
    expect(UsersController).toBeDefined();
  });

});
