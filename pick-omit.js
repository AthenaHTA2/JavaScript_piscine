/* Instructions:
Create two functions which taken an object and a string or array of strings. They should return a new object which:

pick: contains only those keys which appear in the string or array of strings.
omit: contains only those keys which do not match the string, or do not appear in the array of strings.
*/

//alternatives: arrStr = [].concat(str);  or: if (somevar.constructor.name == "Array") {..do something..}
//note: Array.from('foo') returns:Array ["f", "o", "o"]. Similar function: split(string, separator)
//Object.entries() : Returns an array containing all of the [key, value] pairs of a given object's own enumerable string properties.
//Object.fromEntries() : Returns a new object from an iterable of [key, value] pairs. (This is the reverse of Object.entries).

//Makes a new object that contains only those keys which appear in the string or array of strings.
//My own solution:
export function pick(obj1, str) {
  var arrStr = [];
  var selected1 = {}; //create an empty object
  if (typeof str === "string") {
    //If 'str' is not an array of strings,
    arrStr = [str]; // turn it into an array of strings
  }
  //now checking that 'obj1' keys equal strings in 'arrStr':
  arrStr.forEach(function(arrItem)){
    
  }
//   for (let i = 0; i < arrStr.length; i++) {
//     selected1 = obj1.filter(function (objKey) {
//       return objKey == arrStr[i];
//     });
//   }
// //Umair's solution that throws an error: Cannot read property 'undefined' of undefined on row 46
// function pick(obj, key) {
//   let result = {};
//   if (Array.isArray(key)) {
//     key.forEach((key) => {
//       if (obj[key] != undefined) {
//         result[key] = obj[key];
//       }
//     });
//   } else if (typeof key == "object") {
//     for (let key of Object.keys(obj)) {
//       if (obj[key] != undefined) {
//         result[key] = obj[key];
//       }
//     }
//   } else {
//     if (obj[key] != undefined) {
//       console.log(obj[key])
//       result[key] = obj[key];
//     }
//   }

//   return result;
// }

//Luis's solutions:
export function pick(obj, keys) {
  let reslt = {};
  if (Array.isArray(keys)) {
    keys.forEach((key) => {
      if (Object.keys(obj).includes(key)) {
        reslt[key] = obj[key];
      }
    });
  } else if (Object.keys(obj).includes(keys)) {
    reslt[keys] = obj[keys];
  }
  return reslt;
}

export function omit(obj, keys) {
  let reslt = {};
  Object.keys(obj).forEach((key) => {
    if (!keys.includes(key)) {
      reslt[key] = obj[key];
    }
  });

  return reslt;
}


//alternatively, using the filter() method to compare arrObjKeys and arrStr:
// for(let i=0; i< arrStr.length; i++){
// var arrUsedKeys =  arrObjKeys.filter(function(arrKeys) {
//   return arrKeys ==arrStr[i]
// });

//forEach approach:
// arrObjKeys.forEach((objKey) => {
// loop through array
// if (obj1[word] != undefined) {
//if an object key equals the array item
//append that key:value pair to the 'selected' object
//   }
// });

//new object contains only those keys which do not match the string, or do not appear in the array of strings.
