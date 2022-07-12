/*Instructions
Create a function named chunk which accepts an array and an integer representing a size.
Your function will chunk the array into sub-arrays, and return an array with each sub-array as its elements. The length of each sub-array is denoted by the size argument.
If the array cannot be split evenly, the last sub-array will contain the remaining elements.*/

function chunk(arr, lengthInner) {
  let outer = [];
  let inner = [];
  let numInner = Math.ceil(arr.length / lengthInner);
  // console.log(numInner);
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (count < numInner - 1) {
      for (let j = i; j < i + lengthInner; j++) {
        inner.push(arr[j]);
      }
      outer[count] = inner;
      i = i + lengthInner;
      count++;
    } else {
      //from index i till end of arr
      inner = arr.slice(i);
      i = arr.length - 1;
      count = numInner;
    }
  }
  console.log(outer);
  return outer;
}

console.log(chunk(["a", "b", "c", "d"], 2));
