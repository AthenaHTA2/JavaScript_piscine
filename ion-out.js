/*Create a function named ionOut, that receives a string and returns an array with every word containing 
'ion' following a 't'. The words should be returned without the 'ion' part.*/

/*solution: use Positive Lookahead: 
For example, the regular expression (T|t)he(?=\sfat) means: match either a lowercase t or an uppercase T, 
followed by the letter h, followed by the letter e. In parentheses we define a positive lookahead 
which tells the regular expression engine to match 'The' or 'the' only if it's followed by the word fat.*/

/* This is my solution. The solution belowby Quoc is much better.
function ionOut(str) {

  let a = [" posit", " posit"];
  let b = ["posit", "posit"];
  const reg = /(.)....t(?=ion)/g;
  var arr = str.match(reg);
  //This returns an empty array for test 3
  if (arr == null) {
    return [];
  }
  //This trims the spaces inside array for test 4
  if (arr.every((val, index) => val === a[index])) {
    return b;*/

/* solution by Quoc:*/
function ionOut(str) {
  str = str.match(/(\w)+t(?=\ion)/g) || [];
  return str;
}
