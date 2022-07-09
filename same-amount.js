/*Create a function named sameAmount, that takes three arguments: a string, and 2 regular expressions. Your function should return a boolean.
The objective is to confirm that the regular expressions match the string the same number of times.*/

function sameAmount(str, expr1, expr2) {
  let sameNumber = true;
  let new1 = new RegExp(expr1, "g");
  let new2 = new RegExp(expr2, "g");
  var a = str.match(new1);
  var b = str.match(new2);

  if (a == null) {
    a = 0;
  }

  if (b == null) {
    b = 0;
  }

  //   console.log(a);
  //   console.log(b);

  let length1 = 0;
  let length2 = 0;

  if (a == 0) {
    length1 = 0;
  } else {
    length1 = a.length;
  }

  if (b == 0) {
    length2 = 0;
  } else {
    length2 = b.length;
  }

  //   console.log(length1);
  //   console.log(length2);

  if (length1 == length2) {
    sameNumber = true;
  } else {
    sameNumber = false;
  }

  return sameNumber;
}

//console.log(sameAmount("data", /y/, /x/));
