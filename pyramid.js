// Create a function named pyramid which works just like your triangle function. But, it should be pyramid shaped.
// This is my solution 1:
// function pyramid(str, nb) {
//   let out = "";
//   for (let i = 0; i < nb * 2; i++) {
//     //vertical axis
//     for (let j = 0; j <= i; j++) {//horizontal axis
//       if (j < nb - i) {
//         out += " ";
//       } else if (j >= nb - i && j < nb + i + 1) {
//         out += str;
//       } else {
//         out += " ";
//       }
//       if (j == i && i != nb - 1) {
//         out = out + "\n";
//         j = 0;
//       }
//     }
//   }
//   return out;
//  }

//This is my solution #2:

function pyramid(str, nb) {
  let out = "";
  //vertical axis
  for (let i = 0; i < nb; i++) {
    //horiz axis
    for (let j = 0; j <= nb * 2 - 1; j++) {
      if (j < nb - i) {
        out += " ";
      } else if (j > nb + i) {
        out += "";
      } else {
        out += str + "";
      }
      if (j == nb * 2 - 1 && i != nb - 1) {
        out += "\n";
      }
    }
  }
  return out;
}

//console.log(pyramid("#", 5));
//console.log(pyramid("{}", 7));
//console.log(pyramid("#", 10));
console.log(pyramid("+", 40));

// const pyramid = (str, nb) => {
//   const mid = Math.floor((2 * nb - 1) / 2);
//   for (let row = 0; row < nb; ++row) {
//     //for each row, make empty steps
//     let level = "";
//     for (let col = 0; col < 2 * nb - 1; col++) {
//       if (mid - row <= col && mid + row >= col) level += str;
//       else level += " ";
//     }
//     console.log(level);
//   }
// };
//pyramid(3);

// function pyramid(st, n) {
//   var result = "";
//   var pyra = "";
//   var output = "";
//   for (var i = 0; i < n; i++) {
//     var myspace = "";
//     for (let s = 0; s < n - i - 1; s++) {
//       myspace += " ";
//     }
//     for (var j = 1; j <= 2 * i + 1; j++) {
//       output += st;
//     }
//     result = myspace + output;
//     pyra += result + "\n";
//     //console.log(myspace + output);
//     output = "";
//   }
//   return result;
// }
// pyramid("#", 5);

// function pyramid(str, n) {
//   let res = "";
//   // If (e.g.) n=3;
//   const columnLength = n * 2 - 1; // 5
//   let middle = Math.floor(columnLength / 2); // middle would be 2
//   for (let row = 0; row < n; row++) {
//     // let's create the rows (row = horizontal)
//     let res = ""; // init our output inside of the 1st for loop
//     for (let col = 0; col < columnLength; col++) {
//       // creating the columns (column = vertical)
//       // The following formula would yield the result we need:
//       // (n * 2) - 1 => row=2;col=3; row=3;col=5; row=5;col=9
//       // We got 2 sides, right?
//       // So, before we insert '#' we need to make sure the following logic is met:
//       // Look at:  (middle - row) as being the left side and  (middle + row) as the right one.
//       // Only if both conditions are met, we want to insert the "#" sign
//       if (middle - row <= col && middle + row >= col) {
//         res += str;
//       } else {
//         // If '#' is NOT inserted then we want to insert something else, right?!
//         // In our case that would be an empty string
//         res += " ";
//       }
//     }
//     //res += res;
//     console.log(res);
//   }
//   //return res;
// }
