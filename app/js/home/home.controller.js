export default class HomeController {

  constructor(UsersService) {

    'ngInject';

    this.users = UsersService.all();
  }

}
