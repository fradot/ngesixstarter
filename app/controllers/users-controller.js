export default class UsersController {

  constructor(usersService) {
    this.usersService = usersService;
  }

  all() {
    return this.usersService.all();
  }

}
