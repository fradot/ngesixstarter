import User from '../model/user.js';

export default class UsersService {

    constructor() {}

    all () {
      return [
        new User(1,"John","Doe","http://github.com/fradot"),
        new User(2,"Francesco","Tucceri","http://github.com/fradot")
      ];
    }
}
