import Person from '../src/js/lib/Person';

describe('Person',() => {
  let p;

  beforeEach(() => {
      p = new Person('John','Doe');
  });

  it('should say Hello John Doe!',() => {
      expect(p.sayHello('John','Doe')).toEqual('Hello John Doe!');
  });
});
