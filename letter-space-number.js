//Create a function named letterSpaceNumber that accepts a string;
//returning an array with every instance of a letter, followed by a space, followed by a number,
//only if that number has only one digit, and is not followed by any letter.

function letterSpaceNumber(str) {
  const search = /\w\s\d(?!0|[a-z])/g; //new RegExp("wsd"); //"/\w\s\d/";
  let outcome = str.match(search);
  if (outcome == null) {
    return [];
  }
  return outcome;
}

console.log(letterSpaceNumber("He is 8 or 9 years old, not 10."));
