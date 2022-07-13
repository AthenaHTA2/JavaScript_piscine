/*Implement 2 functions:

    split that works like String.split, but takes the string as its first argument.

    join that works like Array.join, but take the array as its first argument.
*/

function split(str, elem) {
  let arr = [];
  let step = elem.length;
  let app = "";

  if (str.length == 0) {
    arr.push(str);
  } else if (elem.length == 0) {
    for (let i = 0; i < str.length; i++) {
      arr.push(str[i]);
    }
  } else {
    //console.log(step);
    for (let i = 0; i <= str.length - step; i++) {
      if (str.slice(i, i + step) == elem) {
        arr.push(app);
        app = "";

        if (i <= str.length - 1 - step) {
          i = i + step - 1;
        } else {
          arr.push(app);
        }

        //return arr;
      } else {
        app = app + str[i];
        if (i == str.length - 1) {
          arr.push(app);
        }
      }
    }
  }
  return arr;
}

//arr.push(str);
//console.log(arr);

console.log("");
console.log("Test 1: ['a', 'b', 'c']");
console.log(split("a b c", " "));
console.log("");
console.log("Test 2: ['ggg', 'ddd', 'b']");
console.log(split("ggg - ddd - b", " - "));
console.log("");
console.log("Test 3: ['ee', 'ff', 'g', '']");
console.log(split("ee,ff,g,", ","));
console.log("");
console.log("Test 4: ['Riad']");
console.log(split("Riad", " "));
console.log("");
console.log("Test 5: ['', '', '']");
console.log(split("rrrr", "rr"));
console.log("");
console.log("Test 6: ['', 'i', '']");
console.log(split("rrirr", "rr"));
console.log("");
console.log("Test 7: ['R', 'i', 'a', 'd'])");
console.log(split("Riad", ""));
console.log("");
console.log("Test 8:  ['']");
console.log(split("", "Riad"));
console.log("");

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
