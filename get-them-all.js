/*- To create a simple live server, in VSC type either:
python3 -m http.server   or: &>/dev/null python3 -m http.server &

- Next type: xdg-open 'http://localhost:8000/'

- Now open the browser at the specified port:
http://localhost:8000/

- to show stats on local server: netstat -an  | grep 8000

To clear the server: 
sudo lsof -t -i tcp:8000 | xargs kill -9

HOWEVER, if you have the local server extension installed on VSC (as I do), 
you don't need to type <python3 -m http.server> and then <http://localhost:8000/>.
Instead, you simply type: code + <name of HTML file> + <enter>
This will open the browser and show your web page.

%%%%%%%%%%% Steps to begin DOM exercise #1: %%%%%%%%%%%%%%%
1) make a DOM folder and save the 'get-them-all.HTML', the 'get-them-all.data.js', and the 'get-them-all.js' files in the folder.
2) in the .js file, type four empty functions: getArchitects, getClassical, getActive, getBonannoPisano.
3) Type 'export' in front of each function. The web site elements will not show unless you type, and export the empty formulas in the 'get-them-all.js' file.
*/
export function getArchitects() {
  //1st array: the architects, all corresponding to a <a> tag.
  let arr1 = document.querySelectorAll("a");
  //2nd array: all the non-architects.
  let arr2 = document.querySelectorAll("span");
  return [arr1, arr2];
}

export function getClassical() {
  //1st array: the architects belonging to the classical class.
  let arr3 = document.querySelectorAll(".classical");
  //2nd array: the non-classical architects.
  let arr4 = document.querySelectorAll(".baroque, .modern");
  return [arr3, arr4];
}

export function getActive() {
  //1st array: the classical architects who are active in their class.
  let arr5 = document.querySelectorAll(".classical, .active");
  //2nd array: the non-active classical architects.
  let arr6 = document.querySelectorAll(".classical:not(.active)");
  return [arr5, arr6];
}

export function getBonannoPisano() {
  //the HTML element of the architect you're looking for, whose id is BonannoPisano.
  let pisano = document.querySelector("#BonannoPisano");
  console.log(pisano)
  //an array containing all the remaining HTML elements of active classical architects.
  let other = document.querySelectorAll("active.classical:not(#BonannoPisano");
  return [pisano, other]
}
