export default class Car {
  constructor(model,licensePlate) {
    this._model = model;
    this._licensePlate = licensePlate;
  }

  get model(){
    return this._model;
  }

  get licensePlate() {
    return this._driver;
  }

  set model(model) {
    this._model = model;
  }

  set licensePlate(licensePlate) {
    this._licensePlate = licensePlate;
  }

}
