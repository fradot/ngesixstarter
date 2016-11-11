describe('Users controllers', function() {
  var UsersController,UsersService;

  beforeEach(angular.mock.module('ngesixstarter'));

  beforeEach(inject(($controller,_UsersService_) => {
    UsersController = $controller('UsersController');
    UsersService = _UsersService_;
  }));

  it('should exist', () => {
    expect(UsersController).toBeDefined();
  });

  it('should contain an array of users', () => {
    expect(UsersController.users).toBeDefined();
    expect(UsersController.users.length).toBeGreaterThan(1);
  });

});
