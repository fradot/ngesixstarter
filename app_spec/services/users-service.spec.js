describe('Users service', function() {
  var UsersService;

  // Loading module
  beforeEach(angular.mock.module('ngesixstarter'));

  // Injecting UsersService
  beforeEach(inject((_UsersService_) => {
    UsersService = _UsersService_;
  }));

  // Verifying exixstence
  it('should exist', () => {
    expect(UsersService).toBeDefined();
  });

  // Users array
  it('should return all users', () => {
    var users = UsersService.all();

    expect(users).toBeDefined();
    expect(users.length).toBeGreaterThan(0);
  });
});
