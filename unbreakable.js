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
  for (let i = 0; i <= str.length - elem.length; i++) {
    if (str.slice(i, i + elem.length) == elem) {
      if (str.length == elem.length) {
        arr.push(str.slice(0, i));
        return arr;
      } else {
        arr.push(str.slice(0, i));
        str = str.slice(i + step);
        console.log(str);
        i = 0;
      }
    }
    i = i - step;
  }
  arr.push(str);
  return arr;
}

/*function join(arr, elem) {
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
*/

//console.log(split("rrrr", "rr"));
