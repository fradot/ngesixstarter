import Person from './Person';
import Car from './Car';

var john = new Person('John','Doe');
var golf = new Car('car','AX ######');

var tpl = `Hi ${john.name} ${john.surname},` +
          `your new ${golf.model} is wonderful!`;

console.log(tpl);
