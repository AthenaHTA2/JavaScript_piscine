/*Create a function named triangle that takes a string and a number as arguments. Your function will return a string representing a triangle.
The string will denote the characters which construct the triangle, and the number denotes its height.*/

/*Example from exercise description:
const times = (nb) => {
    let result = 0
    let count = 0
    while (count <(nb)){
        count = count + 1
        result = result + n
    }
    return result
}
Falsey values in JavaScript:
1) false
2) Zero of Number type: 0 and also -0, 0.0, and hex form 0x0 (thanks RBT)
3) Zero of BigInt type: 0n and 0x0n (new in 2020, thanks GetMeARemoteJob)
4) "", '' and `` - strings of length 0
5) null
6) undefined
7) NaN
8) document.all (in HTML browsers only)


*/

function triangle(str, nb) {
  let out = "";
  for (var i = 0; i < nb; i++) {
    //console.log("i: ", i);
    for (var j = 0; j <= i; j++) {
      //console.log("j: ", j);

      if (j === i && j != nb - 1) {
        out = out + str + "\n";
      } else {
        out = out + str;
      }
    }
  }
  console.log(out);
  // console.log("\n");
  return out;
}

console.log(triangle(triangle("a", 5)));
