describe('Home Controller', function() {
  var HomeController,UsersService;

  beforeEach(angular.mock.module('ngesixstarter'));

  beforeEach(inject(($controller,_UsersService_) => {
    HomeController = $controller('HomeController');
    UsersService = _UsersService_;
  }));

  it('should exist', () => {
    expect(HomeController).toBeDefined();
  });

  it('should contain an array of users', () => {
    expect(HomeController.users).toBeDefined();
    expect(HomeController.users.length).toBeGreaterThan(1);
  });

});
