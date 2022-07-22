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


*/

function fusion(obj1, obj2) {
  var item1;
  var item2;
  var newArr = [];
  var position;
  var temp;
  var count = 0;
  var arr_1_Item;
  var result;
  //
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
  } else if (typeof obj1 === "string" && typeof obj2 === "string") {
    //check if objects are strings
    result = obj1 + " " + obj2;
  } else if (Object.getPrototypeOf(obj1) != Object.getPrototypeOf(obj2)) {
    result = obj2;
  }

  console.log(result);
  return result;
}

fusion({ a: "str" }, { a: 1 });
//fusion({ a: "A", b: "B", c: "C" }, { a: "B", b: "C" });
//fusion([1, "2"], [2]);

// fusion(
//   [[], [1]],
//   [
//     [12, 3],
//     [2, 3],
//     ["2", "1"],
//   ]
// );
