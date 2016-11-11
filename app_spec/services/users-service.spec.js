describe('Users service', function() {
  var UsersService;

  beforeEach(angular.mock.module('ngesixstarter'));

  beforeEach(inject((_UsersService_) => {
    UsersService = _UsersService_;
  }));

  it('should exist', () => {
    expect(UsersService).toBeDefined();
  });

  it('should return all users', () => {
    var users = UsersService.all();

    expect(users).toBeDefined();
    expect(users.length).toBeGreaterThan(0);
  });
});
