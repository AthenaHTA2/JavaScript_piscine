let clone1 = Object.assign({}, person);
Object.freeze(clone1);
let clone2 = Object.assign({}, person);
Object.freeze(clone2);
let samePerson = Object.assign(person);
person.age = (person.age + 1);
person.country = "FR";






