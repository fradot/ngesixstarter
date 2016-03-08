export default class Person {
  constructor(name,surname) {
    this._name = name;
    this._surname = surname;
  }

  get name(){
    return this._name;
  }

  get surname() {
    return this._surname;
  }

  set name(name) {
    this._name = name;
  }

  set surname(surname) {
    this._surname = surname;
  }

  sayHello() {
    return `Hello ${this._name} ${this._surname}!`;
  }
}
