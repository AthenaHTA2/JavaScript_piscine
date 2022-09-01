let circle;
let box;

export function createCircle() {
  document.addEventListener(
    "click",
    (event) => {
      let x = document.createElement("div");
      x.classList.add("circle");
      x.style.background = "white";
      x.style.left = event.clientX - 25 + "px";
      x.style.top = event.clientY - 25 + "px";
      x.classList.add("following");
      circle = x;
      document.body.appendChild(circle);
    },
    false
  );
}

export function moveCircle() {
  addEventListener("mousemove", (event) => {
    const brE = circle.getBoundingClientRect();
    const brC = box.getBoundingClientRect();
    if (circle.style.background === "var(--purple)") {
      if (event.clientX < brC.left + 1) {
        circle.style.left = brC.left + 1 + "px";
      } else {
        circle.style.left = event.clientX - 25 + "px";
      }

      if (event.clientY < brC.top + 1) {
        circle.style.top = brC.top + 1 + "px";
      } else {
        circle.style.top = event.clientY - 25 + "px";
      }
      if (event.clientY + 25 > brC.bottom - 1) {
        circle.style.top = brC.bottom - 1 - 50 + "px";
      }
      if (event.clientX + 25 > brC.right - 1) {
        circle.style.left = brC.right - 1 - 50 + "px";
      }
    } else {
      circle.style.left = event.clientX - 25 + "px";
      circle.style.top = event.clientY - 25 + "px";
    }
    if (
      brE.left >= brC.left &&
      brE.top >= brC.top &&
      brE.bottom <= brC.bottom &&
      brE.right <= brC.right
    ) {
      circle.style.background = "var(--purple)";
    }
  });
}

export function setBox() {
  let x = document.createElement("div");
  x.classList.add("box");
  box = x;
  document.body.appendChild(box);
}
