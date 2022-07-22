/* Instructions:
Create two functions which taken an object and a string or array of strings. They should return a new object which:

pick: contains only those keys which appear in the string or array of strings.
omit: contains only those keys which do not match the string, or do not appear in the array of strings.
*/

//alternatives: arrStr = [].concat(str);  or: if (somevar.constructor.name == "Array") {..do something..}
//note: Array.from('foo') returns:Array ["f", "o", "o"]. Similar function: split(string, separator)
//Object.entries() : Returns an array containing all of the [key, value] pairs of a given object's own enumerable string properties.
//Object.fromEntries() : Returns a new object from an iterable of [key, value] pairs. (This is the reverse of Object.entries).

//new object contains only those keys which appear in the string or array of strings.
export function pick(obj1, str) {
  var selected = {}; //create an empty object
  var arrObjPairs = Object.entries(obj1); // make an array of 'obj1' string keyed:property [key, value] pairs.
  var arrObjKeys = Object.keys(obj1)// make an array of 'obj1' keys
  if (typeof str === "string") {
    //If 'str' is not an array of strings,
    var arrStr = [str]; // turn it into an array of strings
  }
  //now checking that 'obj1' keys equal strings in 'arrStr':
  for(let i=0; i< arrStr.length; i++){
    selected = obj1.filter(function(objKey){
      return objKey==arrStr[i]
    })
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

}

//new object contains only those keys which do not match the string, or do not appear in the array of strings.
export function omit(obj2, str) {}
