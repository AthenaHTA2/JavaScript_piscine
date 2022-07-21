/* 
Instructions:
You've been asked to freshen up a webpage, by displaying shades of cold colors.
Check the colors array provided in the data file below.
Write the generateClasses function. It creates a <style> tag inside the <head>. 
It should generate one class for each color in the colors array, which sets the background attribute like so:
.blue {
  background: blue;
}
Write the generateColdShades function which creates a <div> for each color of the colors array, 
whose name contains aqua, blue, turquoise, green, cyan, navy or purple. 
Each <div> must have the corresponding generated class and display the name of the color, like following:
<div class="blue">blue</div>
The function choseShade is triggered when clicking on a div. Write the body of this function. 
It accepts the shade of the clicked element as an argument, and replaces all the classes of all the other elements by the chosen shade.
Files
You only need to create & submit the JS file fifty-shades-of-cold.js, we're providing you the following files to download and test locally:
the HTML file fifty-shades-of-cold.html to open in the browser, which includes:
the JS script running some code, and which will enable you to run yours
some CSS pre-styled classes: feel free to use those as they are, or modify them.
the data file fifty-shades-of-cold.data.js from which you can import colors.
*/

import { colors } from "./fifty-shades-of-cold.data.js"; //HS: importing the 'colors' array
let arrLength = colors.length - 1;
let count = 0;
let colorDiv;
const arrSearch = [
  "blue",
  "turquoise",
  "green",
  "cyan",
  "navy",
  "purple",
  "aqua",
];

export function generateClasses() {
  let head = document.getElementsByTagName("head")[0];
  let newStyle = document.createElement("style");
  head.appendChild(newStyle);
  for (let j = 0; j <= arrLength; j++) {
    newStyle.innerHTML += `.${colors[j]} { background: ${colors[j]};}\n`;
  }
}

export function generateColdShades() {
  //check for each colour inside the 'colors' array if it matches any of the colours from the 'arrSearch' array.
  for (let s = 0; s <= arrLength; s++) {
    //To do: populate an array with all the colour matches
    // if (colors.includes(arrSearch[s])) {
    if (
      colors[s].includes("aqua") ||
      colors[s].includes("blue") ||
      colors[s].includes("turquoise") ||
      colors[s].includes("green") ||
      colors[s].includes("cyan") ||
      colors[s].includes("navy") ||
      colors[s].includes("purple")
    ) {
     // let toAdd = colors.includes(arrSearch[s]); //not used; also it returns 7 colours instead of 50
      // console.log(toAdd);
      let myDiv = document.createElement("div");
      myDiv.className = `${colors[s]}`;
      myDiv.innerHTML = `${colors[s]}`;
      document.body.appendChild(myDiv);
    }
  }
}

export function choseShade(c) {
  var elements = document.querySelectorAll("div"); // get all 'div' elements
  console.log(div);
  for (var i = 0; i < elements.length; i++) {
    elements[i].style.backgroundColor = c;
  }
}
