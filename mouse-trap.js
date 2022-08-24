/*Develop a trap to capture the elements when the mouse is getting too close to the center of the page.

Create the following functions:

- createCircle: make it fire on every click on the page, and create a div at the position of the mouse on the screen, 
setting its background to white and its class to circle.

- moveCircle: make it fire when the mouse moves, and get the last circle created and make it move along with the mouse.

- setBox: which creates a box with the class box in the center of the page. When a circle is inside that box, 
it has to be purple (use the CSS global variable var(--purple) as its background). 
Once a circle enters the box, it is trapped inside and cannot escape.

Hint: Be careful, a circle cannot overlap the box which has walls of 1px. It has to be trapped strictly inside.

*/

let centerBox;
let screenPositionX;
let screenPositionY;
let newCircle;

export function setBox() {
  let bx = document.createElement("div");
  bx.style.alignItems = "auto";
  bx.style.background = "silver";
  bx.className = "box";
  centerBox = bx;
  document.body.appendChild(centerBox);
}

export function createCircle() {
  //Get mouse position on page
  document.onclick = function (e) {
    screenPositionX = e.pageX;
    screenPositionY = e.pageY;
    let circle = document.createElement("div");
    circle.className = "circle";
    circle.style.backgroundColor = "white";
    //make circle position equal to mouse position
    circle.style.left = screenPositionX - 25 + "px";
    circle.style.top = screenPositionY - 25 + "px";
    newCircle = circle;
    document.body.appendChild(newCircle);
  };
}

export function moveCircle() {
  //onmousemove = (event) => { };
  addEventListener("mousemove", (event) => {
    //Get circle and box coordinates
    const cData = newCircle.getBoundingClientRect();
    const bData = centerBox.getBoundingClientRect();
    //assign X & Y coordinates to new circle's left/right/top/bottom attributes
    let cLeft = cData.left - 25 + "px";
    let cRight = cData.right + 25 + "px";
    let cTop = cData.top - 25 + "px";
    let cBottom = cData.bottom - 25 + "px";

    //if circle is outside of box, circle follows mouse move
    if (newCircle.style.backgroundColor != "var(--purple)") {
      newCircle.style.left = event.clientX - 25 + "px";
      newCircle.style.top = event.clientY - 25 + "px";
    } else {
      //if circle is inside the box keep it inside
      if (event.clientX < bData.left) {
        newCircle.style.left = bData.left + 1 + "px"; //close left side
      } else {
        newCircle.style.left = event.clientX - 25 + "px";
      }
      if (event.clientY < bData.top) {
        newCircle.style.top = bData.top + 1 + "px"; //close top side
      } else {
        newCircle.style.top = event.clientY - 25 + "px";
      }
      if (event.clientX + 25 + "px" > bData.right - 1 + "px") {
        newCircle.style.left = bData.right - 51 + "px"; //close right side
      } else {
        newCircle.style.right = event.clientX + 25 + "px";
      }
      if (event.clientY + 50 + "px" > bData.bottom - 1 + "px") {
        newCircle.style.top = bData.bottom - 51 + "px"; //close bottom side
      } else {
        newCircle.style.bottom = event.clientY + 25 + "px";
      }
    }

    // circleData.left = event.pageX - 25 + "px";
    // circleData.right = event.pageX + 25 + "px";
    // circleData.top = event.pageY - 25 + "px";
    // circleData.bottom = event.pageY - 25 + "px";

    //check if circle is strictly inside the box, and if so than make it purple
    if (
      cLeft >= bData.left + 1 + "px" &&
      cRight <= bData.right - 1 + "px" &&
      cTop >= bData.top + 1 + "px" &&
      cBottom <= bData.bottom - 1 + "px"
    ) {
      newCircle.style.backgroundColor = "var(--purple)";
    }
  });
}

//moveCircle();
