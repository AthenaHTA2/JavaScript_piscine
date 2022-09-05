/* is.num = function(number) {
    return typeof number === 'number';
    }
  is.nan= function(NaN) {
    return NaN !== NaN;
  }
  is.str = function(string) {
    return typeof string === 'string';
    }
  is.bool = function(boolean) {
    return typeof boolean === 'boolean';
    }
  is.undef = function(undefined) {
    return typeof undefined === 'undefined';
  }
  is.def= function(defined) {
    return typeof defined !== 'undefined';
  }
  is.arr= function(array) {
    return array instanceof Array;
  }
  is.obj=function(o) {
    return null != o && 
      typeof o === 'object' && 
      Object.prototype.toString.call(o) === '[object Object]';
  }
  is.fun = function(value) {
    return typeof value === 'function';
    }
  is.truthy = function(value) {
    return !!value;
    }
  is.falsy= function(falsy) {
    return !falsy;
  }

  Add new function properties to the is object to check value types. Each function should take one argument, and return a boolean.

is.num: value is a number.
is.nan: value is NaN.
is.str: value is a string.
is.bool: value is a boolean.
is.undef: value is undefined.
is.def: value is defined.
is.arr: value is an array.
is.obj: value is a simple object or null objects.
is.fun: value is a function.
is.truthy: value is truthy.
is.falsy: value is falsy.

*/
is.num = (n) => typeof n === 'number'
is.nan = (n) => Number.isNaN(n)
is.str = (n) => typeof n === 'string'
is.bool = (n) => typeof n === 'boolean'
is.undef = (n) => n === undefined
is.def = (n) => !is.undef(n)
is.arr = (n) => Array.isArray(n)
is.obj = (n) => typeof n === 'object' && !is.fun(n) && !is.arr(n) && n !== null
is.fun = (n) => typeof n === 'function'
is.truthy = (n) => !!n
is.falsy = (n) => !n