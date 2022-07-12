/*Instructions

Create a function named nasa that takes a number N as an argument and returns a string with all numbers from 1 to N separated by spaces. There are three exceptions:

    Convert numbers which are divisible by 3 to "NA".
    Convert numbers which are divisible by 5 to "SA".
    Convert numbers which are divisible by 3 and 5 to "NASA".*/

function nasa(N) {
  let str = "";
  for (let i = 1; i <= N; i++) {
    if (i < N) {
      if (i % 15 == 0) {
        str = str + "NASA ";
      } else if (i % 3 == 0) {
        str = str + "NA ";
      } else if (i % 5 == 0) {
        str = str + "SA ";
      } else {
        str = str + i.toString(10) + " ";
      }
    } else {
      if (i % 15 == 0) {
        str = str + "NASA";
      } else if (i % 3 == 0) {
        str = str + "NA";
      } else if (i % 5 == 0) {
        str = str + "SA";
      } else {
        str = str + i.toString(10);
      }
    }
  }
  console.log(str);
  return str;
}

console.log(nasa(15));
