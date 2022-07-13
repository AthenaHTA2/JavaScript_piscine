/*
Create a function named get which takes two arguments:

    src: an object.
    path: a string representing a path.

Your function will return the value at the given path in the src object.
Example:

const src = { nested: { key: 'peekaboo' } }
const path = 'nested.key'
get(src, path) // -> 'peekaboo'

from w3schools.com:
You can access object properties in two ways: 
objectName.propertyName, or
objectName["propertyName"]

Objects can also have methods.
Methods are actions that can be performed on objects.
Methods are stored in properties as function definitions.
const person = {
  firstName: "John",
  lastName : "Doe",
  id       : 5566,
  fullName : function() {
    return this.firstName + " " + this.lastName;
  }
};

********** Object Methlds ***********

    let keys = Object.keys(object_name) //will return an array of keys;
    console.log('Keys ', keys); will print the keys;
   
    let vals = Object.values(object_name)// will return an array of all values;
     console.log('Vals', vals);

  let entries = Object.entries(object_name);//will return an array of all key-value pairs.
  console.log('Entries ', entries);

  the above methods will turn an 'object' into an iterable array, so that
  we can apply methods such as: foreach(), filter(), map(), reduce().
*/

const get = (src, path) => {
  if (src == null) {
    // null or undefined
    return src;
  }
  const parts = path.split(".");
  for (let i = 0; i < parts.length; ++i) {
    if (src == null) {
      // null or undefined
      return undefined;
    }
    const key = parts[i];
    src = src[key];
  }
  return src;
};

// //Test cases:
// console.log(get({ key: "value" }, "key")); //=== 'value';
// console.log(get({ nested: { key: "value" } }, "nested.key")); //=== 'value');
// console.log(get({ key: "value" }, "nx")); //=== undefined);
// console.log(get({ nested: { key: "value" } }, "nested.nx")); // === undefined);
// console.log(get({ nested: { key: "value" } }, "nx.nx")); // === undefined);
// console.log(get({ a: [{ b: t }] }, "a.0.b")); //=== t));
// console.log(get({ a: [{ b: t }] }, "a.0.b.toString")); // === t.toString);
