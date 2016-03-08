import Car from '../src/js/Car';

describe('Car',() => {
  let c;

  beforeEach(() => {
      c = new Car('Golf 1.6 tdi','AX #####');
  });

  it('should be a Golf!',() => {
      expect(c.model).toEqual('Golf 1.6 tdi');
  });
});
