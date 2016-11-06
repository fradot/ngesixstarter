describe('Users service', function() {
  var UsersService;

  // Before each test load our api.users module
  beforeEach(angular.mock.module('api.users'));

  // Before each test set our injected Users factory (_Users_) to our local Users variable
  beforeEach(inject(function(_UsersService_) {
    UsersService = _UsersService_;
  }));

  // A simple test to verify the Users factory exists
  it('should exist', function() {
    expect(UsersService).toBeDefined();
  });
});
