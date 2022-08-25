let centerBox;
let newCircle;

export function createCircle() {
  document.addEventListener("click", function (e) {
    //get coordinates of click event
    let clickX = e.clientX;
    let clickY = e.clientY;
    //make a circle on each click
    let c = document.createElement("div");
    c.classList.add("circle");
    c.style.background = "white";
    //assign click event coordinates to circle
    c.style.left = clickX - 25 + "px"; //subtracting 25px because circle diameter is 50px
    c.style.top = clickY - 25 + "px";
    c.style.right = clickX + 25 + "px";
    c.style.bottom = clickY + 25 + "px";
    newCircle = c;
    document.body.appendChild(newCircle);
  });
}

export function moveCircle() {
  addEventListener("mousemove", (event) => {
    let boxData = centerBox.getBoundingClientRect();
    let cirData = newCircle.getBoundingClientRect();
    if (newCircle.style.background === "var(--purple)") {
      //if circle is inside of the box
      if (event.clientX < boxData.left) {
        newCircle.style.left = boxData.left + 1 + "px"; //1 + 25px radius
      } else {
        newCircle.style.left = event.clientX - 25 + "px";
      }
      if (event.clientX > boxData.right) {
        newCircle.style.left = boxData.right - 51 + "px"; //1 + 50px diameter
      } else {
        newCircle.style.right = event.clientX + 25 + "px"; //25 - 1
      }
      if (event.clientY < boxData.top) {
        newCircle.style.top = boxData.top + 1 + "px";
      } else {
        newCircle.style.top = event.clientY - 25 + "px";
      }
      if (event.clientY > boxData.bottom) {
        newCircle.style.top = boxData.bottom - 49 + "px"; // -1 + 50px diameter
      } else {
        newCircle.style.bottom = event.clientY + 25 + "px";
      }
    } else {
      //if circle is outside of the box
      newCircle.style.left = event.clientX - 25 + "px";
      newCircle.style.top = event.clientY - 25 + "px";
      newCircle.style.right = event.clientX + 25 + "px";
      newCircle.style.bottom = event.clientY + 25 + "px";
    }
    if (
      cirData.left >= boxData.left &&
      cirData.top >= boxData.top &&
      cirData.right <= boxData.right &&
      cirData.bottom <= boxData.bottom
    ) {
      newCircle.style.background = "var(--purple)";
    }
  });
}

export function setBox() {
  let b = document.createElement("div");
  document.querySelector("b");
  b.classList.add("box");
  b.style.backgroundColor = "green";
  centerBox = b;
  document.body.appendChild(centerBox);
}
