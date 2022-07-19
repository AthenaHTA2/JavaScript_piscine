/*Instructions

Being stuck at home, bored, desperate and coming up with a lot of weird ideas, a friend asks you to develop a tool to measure his ocular skills. One of those Monoyer charts that ophthalmologists use.

Generate a board where each new letter is harder, bigger, bolder and stronger.

Write the function generateLetters which creates 120 div elements, each containing a letter randomly picked through the uppercase alphabet, and whose style properties have to be increased:

each letter's font-size has to grow from 11 to 130 pixels.
font-weight has to be 300 for the first third of the letters, 400 for the second third, and 600 for the last third.
*/

export function generateLetters() {
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let letter;
  let elem = 0;
  while (elem < 120) {
    let myDiv = document.createElement("div"); //generate a 'div' element
    myDiv.id = `letter_${elem}`; // and give it an id
    letter = alphabet[Math.floor(Math.random() * alphabet.length)]; //generate a random letter
    myDiv.textContent = letter;
    myDiv.style.fontSize = 11 + elem; //increase  elements' font size from 11 to 130
    if (elem <= 39) {
      myDiv.style.fontWeight = 300; //first third of sample
    } else if (elem <= 79) {
      myDiv.style.fontWeight = 400; // second third of sample
    } else {
      myDiv.style.fontWeight = 600; // last third of sample
    }
    document.body.appendChild(myDiv);
    elem++;
  }
}
