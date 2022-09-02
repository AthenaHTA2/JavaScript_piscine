// Create a function named deepCopy that copies objects and arrays recursively.
//https://javascript.plainenglish.io/how-to-deep-copy-objects-and-arrays-in-javascript-7c911359b089
function deepCopy(obj) {
  if (Array.isArray(obj)) {
    return clone(obj);
  }
  if (null == obj || "object" != typeof obj) return obj;
  var copie = obj.constructor();
  for (var attr in obj) {
    if (obj.hasOwnProperty(attr)) copie[attr] = obj[attr];
  }
  return copie;
}
function clone(arr) {
  return arr.map((el) => (Array.isArray(el) ? clone(el) : el));
}
/*
const deepCopyFunction = (inObject) => {
  let outObject, value, key
  if (typeof inObject !== "object" || inObject === null) {
    return inObject // Return the value if inObject is not an object
  }
  // Create an array or object to hold the values
  outObject = Array.isArray(inObject) ? [] : {}
  for (key in inObject) {
    value = inObject[key]
    // Recursively (deep) copy for nested objects, including arrays
    outObject[key] = deepCopyFunction(value)
  }
  return outObject
}
*/
