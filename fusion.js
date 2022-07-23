/*Instructions:
The objective of this exercise is to merge objects into a new object depending on the values type.

Create a function named fusion that:

For array types, you will concatenate them.
fusion({ arr: [1, "2"] }, { arr: [2] }); // -> { arr: [ 1, '2', 2 ] }
fusion({ arr: [], arr1: [5] },{ arr: [10, 3], arr1: [15, 3], arr2: ["7", "1"] }); // ->{ arr: [ 10, 3 ], arr1: [ 5, 15, 3 ], arr2: [ '7', '1' ] }
For strings, you must concatenate them with a space.
fusion({ str: "salem" }, { str: "alem" }); // -> { str: 'salem alem' }
fusion({ str: "salem" }, { str: "" }); // -> { str: 'salem ' }
If they are numbers, you must add them.
fusion({ a: 10, b: 8, c: 1 }, { a: 10, b: 2 }); // -> { a: 20, b: 10, c: 1 }
If it is an object, you must join them recursively.
fusion({ a: 1, b: { c: "Salem" } }, { a: 10, x: [], b: { c: "alem" } }); // -> { a: 11, x: [], b: { c: 'Salem alem' } }
fusion( { a: { b: [3, 2], c: { d: 8 } } },{ a: { b: [0, 3, 1], c: { d: 3 } } }); // -> { a: { b: [ 3, 2, 0, 3, 1 ], c: { d: 11 } } }
In case of type mismatch you must replace it with the value of the second object (if it exists).
fusion({ a: "hello", b: [] }, { a: 4 }); // -> { a: 4, b: [] }

The 'reduce' method, used here for the nested number objects: 
The reduce object method receives two arguments: a function and an initial value. 
The function will run run for every value in the array, and receives two arguments as well: 
the accumulator, or acc , and the current value . The return of this function 
is then passed as the acc for the next iteration, until the last element.
*/

function fusion(obj1, obj2) {
  var item1;
  var item2;
  var newArr = [];
  var position;
  var temp;
  var count = 0;
  var arr_1_Item;
  var object2 = {};
  var result;
  //

  if (obj1 === undefined) {
    return obj2;
  }

  if (obj2 === undefined) {
    return obj1;
  }
  if (Array.isArray(obj1) && Array.isArray(obj2)) {
    //check if objects are arrays
    //merge arrays
    arr_1_Item = obj1[0];
    if (Array.isArray(arr_1_Item)) {
      //are 'obj1' and 'obj2' multi-dimensional arrays?
      for (let i = 0; i < obj2.length; i++) {
        if (i < obj1.length) {
          temp = obj1[i].concat(obj2[i]);
          newArr.push(temp);
        } else {
          newArr.push(obj2[i]);
        }
      }
    } else {
      obj1.forEach(function (arr_1_Item) {
        newArr = obj1.concat(obj2);
      });
    }
    result = newArr;
    //check if objects are strings
  } else if (typeof obj1 === "string" && typeof obj2 === "string") {
    if (
      typeof Object.entries(obj1).values === "string" &&
      typeof Object.entries(obj2).values === "string"
    ) {
      Object.keys(obj1).forEach((key) => {
        object2[obj1[key]] =
          Object.values(obj1[key]) + " " + Object.values(obj2[key]);
      });
      result = object2;
    }

    result = obj1 + " " + obj2;
    //check if objects are numbers
  } else if (typeof obj1 === "number" && typeof obj2 === "number") {
    result = obj1 + obj2;
  }
  //when number objects are nested in objects
  //from: https://stackoverflow.com/questions/42488048/how-can-i-sum-properties-from-two-objects
  //..but I couldn't get it to work  :-(
  // const deepMergeSum = (obj1, obj2) => {
  //   return Object.keys(obj1).reduce((acc, key) => {
  //     if (typeof obj2[key] === "object") {
  //       acc[key] = deepMergeSum(obj1[key], obj2[key]);
  //     } else if (obj2.hasOwnProperty(key) && !isNaN(parseFloat(obj2[key]))) {
  //       acc[key] = obj1[key] + obj2[key];
  //     }
  //     return acc;
  //   }, {});
  // };
  //creating a single object from 'obj1' and 'obj2'
  //from: https://stackoverflow.com/questions/8925820/javascript-object-push-function
  //again, I couldn't get it to work..
  // var data = [];
  // ...
  // ...
  // var tempData = Object.entries(obj1).concat(Object.entries(obj2));
  // console.log(tempData);
  // for (var index = 0; index < obj2.length; index++) {
  //   if (obj2[index].Status == "Valid") {
  //     tempData.push(obj2);
  //   }
  // }
  // data = tempData;
  // result = data.reduce((acc, obj) => (acc = deepMergeSum(acc, obj)));
  else if (
    typeof Object.entries(obj1)[0][1] === "number" &&
    typeof Object.entries(obj2)[0][1] === "number"
  ) {
    Object.keys(obj1).forEach((key) => {
      let sum = obj1[key] + obj2[key];
      // console.log(sum);
      // console.log(obj1[key]);
      // console.log(obj2[key]);
      object2[Object.keys(obj1)] = sum;
    });
    result = object2;

    //   }else{

    //   }
  } else if (typeof obj1 != typeof obj2) {
    //if type of objects is not the same
    result = obj2;
    //return result;
  }
  console.log(result);
  return result;
}

//Tests:
fusion({ nbr: 12 }, { nbr: 23 });
//fusion(({ a: 12, b: 2, c: 43 }, { a: 23, b: 2 }));
// fusion(
//   { a: { b: [1, 2], c: { d: 2 } } },
//   { a: { b: [0, 2, 1], c: { d: 23 } } }
// );
//fusion({ a: "str" }, { a: 1 });0
//fusion({ a: "A", b: "B", c: "C" }, { a: "B", b: "C" });
//fusion([1, "2"], [2]);

// fusion(
//   [[], [1]],
//   [
//     [12, 3],
//     [2, 3],
//     ["2", "1"],
//   ]

//Luis wonderful solution:
//   const fusion = (f, s) => {
//     if (Array.isArray(f) && Array.isArray(s)) {
//         return f.concat(s);
//     }

//     if (typeof f === "string" && typeof s === "string") {
//         return f + " " + s;
//     }

//     if (typeof f === "number" && typeof s === "number") {
//         return f + s;
//     }

//     if (f === undefined) {
//         return s;
//     }

//     if (s === undefined) {
//         return f;
//     }

//     if (typeof f != typeof s) {
//         return s;
//     }

//     if (f instanceof RegExp && s instanceof RegExp) {
//         return s;
//     }
//   //A set is a collection of items which are unique i.e no element can be repeated
//   //in other words if keys from object 'f' are different from keys in object 's'.
//     if (f instanceof Set && s instanceof Set) {
//         return s;
//     }

//     let reslt = {};
//   //step 1: join keys from f and s and turn them into an array
//     let keys = Object.keys(f).concat(Object.keys(s));
//     console.log("the concatenated keys: ", keys)
//     //filter the 'keys' array for first occurrence of each key.
//     //This gives an array of unique keys
//     keys.filter((key, i) => keys.indexOf(key) === i);
//   //using recursion to merge object 'f' and 's'
//     keys.forEach((key) => {
//         reslt[key] = fusion(f[key], s[key]);
//     });

//     return reslt;
//}
