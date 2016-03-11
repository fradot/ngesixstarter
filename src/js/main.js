import Person from './Person';
import Car from './Car';

var john = new Person('John','Doe');
var aCar = new Car('ACar','AX ######');

var tpl = `Hi ${john.name} ${john.surname},` +
          `your new ${aCar.model} is wonderful!`;

console.log(tpl);
