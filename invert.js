/*
Instructions:
Create a function named invert 
which takes an object and returns it with its keys and values inverted.

supporting literature:
- delete operator, e.g. 
- object initializer: new Object(), Object.create(),
  or using the 'literal notation' e.g. const object1 = {a: 'foo', b: 42, c:{}};
- create an empty object: let object = {}; let object = {foo:'bar', age: 42, baz: {myProp: 12}}
- access objects: object.foo, or object[foo], or object.baz.myProp
- to assign variables to an object: let Object = {var1, var2, var3....}
- spreaed properties: clonedObj = {...obj1} , where obj1 = {foo: 'bar', x: 42}
  or to merge: mergedObj = {...obj1, ...obj2}
  - methods:
  Object.assign()
  Object.create()
  Object.defineProperty()
  Object.defineProperties()
  Object.entries()
  Object.freeze()
  Object.fromEntries()
Object.getOwnPropertyDescriptor()
Object.getOwnPropertyDescriptors()
Object.getOwnPropertyNames()
Object.getOwnPropertySymbols()
Object.getPrototypeOf()
Object.is()
Object.isExtensible()
Object.isFrozen()
Object.isSealed()
Object.keys()
Object.preventExtensions()
Object.seal()
Object.setPrototypeOf()
Object.values()

*/

export function invert(object) {
  var temp = object.keys;
  object.keys = object.values;
  object.keys = temp;
}
