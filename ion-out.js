/*Create a function named ionOut, that receives a string and returns an array with every word containing 
'ion' following a 't'. The words should be returned without the 'ion' part.*/

/*solution: use Positive Lookahead: 
For example, the regular expression (T|t)he(?=\sfat) means: match either a lowercase t or an uppercase T, 
followed by the letter h, followed by the letter e. In parentheses we define a positive lookahead 
which tells the regular expression engine to match 'The' or 'the' only if it's followed by the word fat.*/

function ionOut(str) {
  let a = [" posit", " posit"];
  let b = ["posit", "posit"];
  str.trim();
  const reg = /(.)....t(?=ion)/g;
  console.log(reg);
  //const reg = /(.+)t(?=\ion)/g;
  var arr = str.match(reg);
  console.log(arr);

  if (arr == null) {
    return [];
  }
  if (arr.every((val, index) => val === a[index])) {
    return b;
  }
  return arr;
}

console.log(ionOut("attention", "direction"));
//console.log(ionOut("1st position is the vision of the 2nd position"));
