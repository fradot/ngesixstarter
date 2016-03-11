import Car from '../src/js/Car';

describe('Car',() => {
  let c;

  beforeEach(() => {
      c = new Car('ACar 1.6 tdi','AX #####');
  });

  it('should be a ACar!',() => {
      expect(c.model).toEqual('ACar 1.6 tdi');
  });
});
