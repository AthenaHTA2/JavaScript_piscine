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
  "aqua",
  "blue",
  "turquoise",
  "green",
  "cyan",
  "navy",
  "purple",
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
  //for(let i = 0; i <=arrLength; i++){
  for (let s = 0; s <= arrSearch.length - 1; s++) {
    //To do: populate an array with all the colour matches
    if (colors.includes(arrSearch[s])) {
      let toAdd = colors.includes(arrSearch[s]);
      console.log(toAdd);
      let myDiv = document.createElement("div");
      document.body.appendChild(myDiv).classList.add(`${arrSearch[s]}`);
      myDiv.innerHTML = `${arrSearch[s]}`;
    }

    // let aMatch = `${arrSearch[s]}`; //colours
    // console.log(aMatch);
    // for (let c = 0; c <= arrLength; c++) {
    //   if (colors.includes(aMatch)) {
    //     let newDiv = theBody.createElement("div");
    //     theBody.appendChild(newDiv);
    //   }
    // }
    // //var matchColors = colors.match(aMatch); //Returns an array of all matches against the 'aMatch' RegExp
    // var matchColors = colors.include(aMatch); //Returns an array of all matches against the 'aMatch' RegExp
    // for (let i = 0; i < matchColors.length; i++) {
    //   colorDiv = document.createElement("div"); //generate a 'div' element
    //   colorDiv.className = `${matchColors[i]}`; // assign a class name equal to the colour
    //   colorDiv.innerHTML = `${matchColors[i]}`; // add the inner HTML to display the name of colour
    // }
  }
}

export function choseShade() {}
