/*
Split solution by Cassidy:
function split(str, pat) {
  let s = "";
  let cut = "";
  let answer = [];
  if (str.length < 1) {
    answer.push(str);
    return answer;
  }
  if (pat.length == 0) {
    for (let i = 0; i < str.length; i++) {
      answer.push(str[i]);
    }
    return answer;
  }
  if (pat.length >= 1) {
    for (let i = 0; i <= str.length; i++) {
      if (str[i] != pat[0] && str[i] != undefined) {
        s += str[i];
      }
      if (str[i] == pat[0] && pat.length <= 2) {
        if (i == str.length) {
        }
        if (i != 0) {
          answer.push(s);
        }
        s = "";
      }
    }
    for (let i = 0; i <= s.length; i++) {
      if (s[i] != pat[1] && s[i] != " ") {
        cut += s[i];
      }
      if (s[i] == pat[1] || i == s.length - 1) {
        if (s[i] != undefined) {
          answer.push(cut);
          cut = "";
        }
        if (i == s.length && str == "ee,ff,g,") {
          answer.push("");
          return answer;
        } else if (i == s.length && str != "ee,ff,g,") {
          return answer;
        }
      }
    }
    return answer;
  }
}

******************* My Solution *****************************


Implement 2 functions:

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
    for (let i = 0; i < str.length - step; i++) {
      arr.push(str[i]);
    }
  } else {
    //console.log(step);
    for (let i = 0; i <= str.length; i++) {
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
          console.log(str.slice(i - elem.length + 1));
          if (str.slice(i - elem.length + 1) == elem) {
            app = "";
          } else {
            arr.push(app);
          }
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
