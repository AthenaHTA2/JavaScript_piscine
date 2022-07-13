function repeat(a, b) {
  let text = "";
  let count = 1;
  while (count <= b) {
    text = text + a;
    count++;
  }
  return text;
}
//console.log(repeat("a", 3));

//cd public/js/tests
//node test.mjs ../../../piscine-js/ repeat //to test exercises before submitting
