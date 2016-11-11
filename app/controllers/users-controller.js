export default class UsersController {

  constructor(UsersService) {

    'ngInject';

    this.users = UsersService.all();
  }

}
