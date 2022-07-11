/*Create a function named vowelDots that receives a string. Your function should return a new string with a . after every vowel.

Your RegEx should be stored in a variable named vowels.

    a, e, i, o and u are considered as vowels here.
*/

function vowelDots(str) {
  if (str.length == 0) return "";

  let text = str.match(vowels); //str.replace(str.match(vowels), str.match(vowels) + ".");
  text = str.replace(vowels, "$&.");

  return text;
}
const vowels = /[AEIOUaeiou]/g;
