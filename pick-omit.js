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
//
//    My own solution for 'pick':
function pick(obj1, str) {
  var arrStr = [];
  var selected1 = {}; //create an empty object
  if (typeof str === "string") {
    //If 'str' is not an array of strings,
    arrStr = [str]; // turn it into an array of strings
    //console.log("string to array - ", arrStr);
  } else {
    arrStr = str;
    //console.log("array to begin with", arrStr);
  }
  //now checking that 'obj1' keys equal strings in 'arrStr':
  arrStr.forEach(function (arrItem) {
    //console.log(arrItem);
    if (Object.keys(obj1).includes(arrItem)) {
      // console.log(Object.keys(obj1).includes(arrItem));
      //if the array of keys from 'obj1' includes the 'arrItem' from 'arrStr' array
      selected1[arrItem] = obj1[arrItem]; //add the 'arrItem' key:value pair to the 'selected1' object.
    }
  });
  return selected1;
}

//pick({ firstName: "James", lastName: "Bond" }, ["firstName", "lastName"]);

//contains only those keys which do not match the string, or do not appear in the array of strings.

//  My own solution for 'omit':
function omit(obj2, str) {
  var arrStr = [];
  var selected2 = {}; //create an empty object
  if (typeof str === "string") {
    //If 'str' is not an array of strings,
    arrStr = [str]; // turn it into an array of strings
  } else {
    arrStr = str;
  }
  //now checking that 'obj2' keys don't equal strings in 'arrStr':
  const keysObj = Object.keys(obj2);
  keysObj.forEach(function (key) {
    if (!arrStr.includes(key)) {
      // console.log(Object.keys(obj1).includes(arrItem));
      //if the array of keys from 'obj1' includes the 'arrItem' from 'arrStr' array
      selected2[key] = obj2[key]; //add the 'arrItem' key:value pair to the 'selected1' object.
    }
  });
  return selected2;
}

// //Umair's solution for the 'pick' function:
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
// return selected1;
//}

//Luis's solution for pick:
// export function pick(obj, keys) {
//   let reslt = {};
//   if (Array.isArray(keys)) {
//     keys.forEach((key) => {
//       if (Object.keys(obj).includes(key)) {
//         reslt[key] = obj[key];
//       }
//     });
//   } else if (Object.keys(obj).includes(keys)) {
//     reslt[keys] = obj[keys];
//   }
//   return reslt;
// }

//Luis's solution for omit:
// function omit(obj, keys) {
//   let reslt = {};
//   Object.keys(obj).forEach((key) => {
//     if (!keys.includes(key)) {
//       reslt[key] = obj[key];
//     }
//   });

//   return reslt;
// }
