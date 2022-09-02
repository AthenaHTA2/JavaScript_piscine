/*
Create a function named pronoun that accepts a string parameter. This function returns an object that will have all the personal pronouns, present in the string, as keys. Each key will have a sub object with the first word after each of the personal pronouns found in the string.
You must also a count property to the sub object, with the amount of occurrences of the pronoun.
Pronouns:
i
you
he
she
it
they
we
Example
const ex = 'Using Array Destructuring, you you can iterate through objects easily.'
{ you: { word: [ 'can' ], count: 2 } }
const ex = 'If he you want to buy something you have to pay.'
{
  he: { word: [], count: 1}
  you: { word: [ 'want', 'have' ], count: 2 }
}
*/
const pronouns = ["i", "you", "he", "she", "it", "we", "they"];
function pronoun(strg) {
  let reslt = {};
  let arr = strg.toLowerCase().match(/\w+/gi);
  arr.forEach((pro, i) => {
    if (pronouns.includes(pro.toLowerCase())) {
      if (!(pro in reslt)) {
        reslt[pro] = { word: [], count: 0 };
      }
      if (
        arr[i + 1] !== undefined &&
        !pronouns.includes(arr[i + 1].toLowerCase())
      ) {
        reslt[pro]["word"].push(arr[i + 1]);
      }
      reslt[pro]["count"] += 1;
    }
  });
  return reslt;
}
