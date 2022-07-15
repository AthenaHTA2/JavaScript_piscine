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
  document.getElementsByTagName("a.getArchitects");
  document.getElementsByTagName("span");
}

export function getClassical() {
  document.getElementsByTagName("a.getClassical");
  document.getElementsByTagName("a.getElementsByClassName(baroque modern)");
}

export function getActive() {
  document.getElementsByTagName("a.getArchitects.getClassical.getActive");
  document.getElementsByTagName(
    "a.getArchitects.getClassical.getActive(false)"
  );
}

export function getBonannoPisano() {
  document.getElementById("BonannoPisano");
  document.getElementsByTagName(
    "a.getArchitects.getClassical.getActive:not(#BonannoPisano)"
  );
}
