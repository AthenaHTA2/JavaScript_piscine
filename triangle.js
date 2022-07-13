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
}*/

function triangle(str, nb) {
  let out = "";
  for (var i = 0; i < nb; i++) {
    for (var j = 0; j <= i; j++) {
      out += str;
    }

    out += "\n";
  }
  console.log(i);
  console.log(j);
  console.log(out);
}

console.log(triangle(triangle("a", 5)));
