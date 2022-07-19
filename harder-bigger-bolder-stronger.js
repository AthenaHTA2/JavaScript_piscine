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
    let newDiv = document.createElement("div"); //generate a 'div' element
    newDiv.id = `div-${elem}`; // and give it an id
    letter = alphabet[Math.floor(Math.random() * alphabet.length)]; //generate a random letter
    document.getElementById(`div-${elem}`).textContent = "letter";
    document.getElementById(`div-${elem}`).style.fontSize = 11 + elem; //increase  elements' font size from 11 to 130
    if (elem <= 39) {
      document.getElementById(`div-${elem}`).style.fontWeight = 300; //first third of sample
    } else if (elem <= 79) {
      document.getElementById(`div-${elem}`).style.fontWeight = 400; // second third of sample
    } else {
      document.getElementById(`div-${elem}`).style.fontWeight = 600; // last third of sample
    }
    document.append(newDiv);
    elem++;
  }
}
