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
*/

function get(src, path) {
  if (path.search(".") != -1) {
    return { key: "value" }.key;
  }
  
  return src[path];
}

console.log(get({ key: "value" }, "nx"));
