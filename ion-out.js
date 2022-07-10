/*Create a function named ionOut, that receives a string and returns an array with every word containing 
'ion' following a 't'. The words should be returned without the 'ion' part.*/

/*solution: use Positive Lookahead: 
For example, the regular expression (T|t)he(?=\sfat) means: match either a lowercase t or an uppercase T, 
followed by the letter h, followed by the letter e. In parentheses we define a positive lookahead 
which tells the regular expression engine to match 'The' or 'the' only if it's followed by the word fat.*/

function ionOut(str) {
  //const reg = /[^ion]/;
  const reg = /(.)....t(?=ion)/g;
  console.log(reg);
  //const reg = /(.+)t(?=\ion)/g;
  var arr = str.match(reg);
  console.log(arr);
  if (arr == null) {
    return [];
  } else {
    console.log(arr);
    return arr;
  }
}

console.log(ionOut("transfusion"));
