export default class UsersService {

    constructor() {}

    all () {
      return [
        {
          id:1,
          name:"John",
          surname:"Doe",
          github:"http://github.com/fradot"},
        {
          id:2,
          name:"Francesco",
          surname:"Tucceri",
          github:"http://github.com/fradot"
        }
      ];
    }
}
