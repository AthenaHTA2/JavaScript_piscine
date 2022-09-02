/*
Let's buy groceries.
You have a grocery cart with some items you need. The item's name if the key, and the value will represent nutrition facts per 100 grams.
Create 3 functions that work like the .filter, .map and .reduce array methods, for the values in your grocery cart object. You can see their function names and how they work in the examples.
Examples
const nutrients = { carbohydrates: 12, protein: 20, fat: 5 }
console.log(filterValues(nutrients, (nutrient) => nutrient <= 12))
// output: { carbohydrates: 12, fat: 5 }
console.log(mapValues(nutrients, (v) => v+1))
// output: { carbohydrates: 13, protein: 21, fat: 6 }
console.log(reduceValues(nutrients, (acc, cr) => acc + cr))
// output: 37
*/
function filterValues(obj, func) {
  let reslt = {};
  for (let [key, value] of Object.entries(obj)) {
    if (func(value)) {
      reslt[key] = value;
    }
  }
  return reslt;
}
function mapValues(obj, func) {
  let reslt = {};
  for (let [key, value] of Object.entries(obj)) {
    reslt[key] = func(value);
  }
  return reslt;
}
function reduceValues(obj, func, ac) {
  if (ac == undefined) {
    return Object.values(obj).reduce(func);
  }
  return Object.values(obj).concat(ac).reduce(func);
}
