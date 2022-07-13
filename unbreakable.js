/*Implement 2 functions:

    split that works like String.split, but takes the string as its first argument.

    join that works like Array.join, but take the array as its first argument.
*/

function split(str, elem) {
  let arr = [];
  let step = 1;
  if (elem.length > 1) {
    step = elem.length - 1;
  }
  for (let i = 0; i <= str.length - step; i++) {
    if (str.slice(i, i + elem.length) == elem) {
      // console.log(i);
      // console.log(str.slice(i));
      // console.log(str.slice(i, i + elem.length));
      if (str.slice(i).length == elem.length) {
        //console.log(str.slice(i).length);
        if (str.slice(0, i) == elem) {
          arr.push("");
        } else {
          arr.push(str.slice(0, i));
        }
        return arr;
      } else {
        // console.log(str.slice(i).length);
        // console.log(str.slice(0, i));
        if (str.slice(0, i) == elem) {
          arr.push("");
        } else {
          arr.push(str.slice(0, i));
        }
        // console.log(str.slice(0, i));
        //str = str.slice(i + step);
        //console.log(str);
        // i = i + step;
      }
    }
    //i = i - step;
  }

  arr.push(str);
  console.log(arr);
  return arr;
}

console.log(split("rrrr", "rr"));

function join(arr, elem) {
  let res = "";
  for (let i = 0; i < arr.length; i++) {
    // console.log(elem.length)
    if (elem.length == 0) {
      res += arr[i];
    } else {
      res += arr[i] + elem;
    }
  }

  res = res.slice(0, res.length - elem.length);
  return res;
}
