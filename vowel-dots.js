function vowelDots(str) {
  if (str.length == 0) return "";

  let text = str.match(vowels); //str.replace(str.match(vowels), str.match(vowels) + ".");
  text = str.replace(vowels, "$&.");

  return text;
}
const vowels = /[AEIOUaeiou]/g;
