/*
Today, your mission is to build a 3-column brick tower, maintain it and finally break it.

Create a function build which will create and display the amount of bricks passed as argument:

each brick has to be created as a div and added to the page at a regular interval of 100ms.
each brick will receive a unique id property, like the following:
<div id="brick-1"></div>
each brick in the middle column has to be set with the custom data attribute foundation, receiving the value true.
Each one of the two emojis in the top-right corner fires a function on click:

🔨: triggers the function repair. Write the body of that function. It receives any number of ids. For each id, it retrieves the HTML element, 
    and sets the repaired custom attribute to in progress if it is a brick situated in the middle column, and true if not.

🧨: triggers the destroy function. Erite the body of that function. It removes the current last brick in the tower.

Files:
You only need to create & submit the JS file build-brick-and-break.js, We're providing you the following file to download and test locally:

the HTML file build-brick-and-break.html can be opened in the browser, which includes:
the JS script running some code, and which will enable you to run your code.
some CSS pre-styled classes: feel free to use those as they are, or modify them.


Exercise documentation:

a) To create a new <div> and insert it before the element with the id 'div1':

HTML:

<html>
<head>
  <title>||Working with elements||</title>
</head>
<body>
  <div id="div1">The text above has been created dynamically.</div>
</body>
</html>


JavaScript:

document.body.onload = addElement;

function addElement () {
  // create a new div element
  const newDiv = document.createElement("div");

  // and give it some content
  const newContent = document.createTextNode("Hi there and greetings!");

  // add the text node to the newly created div
  newDiv.appendChild(newContent);

  // add the newly created element and its content into the DOM
  const currentDiv = document.getElementById("div1");
  document.body.insertBefore(newDiv, currentDiv);
}

b) To extend our 'HTMLUListElement' custom element, which represents the <ul> element:

// Create a class for the element
class ExpandingList extends HTMLUListElement {
  constructor() {
    // Always call super first in constructor
    super();

    // constructor definition left out for brevity
    // …
  }
}

// Define the new element
customElements.define('expanding-list', ExpandingList, { extends: "ul" });

If we wanted to create an instance of this element programmatically, we'd use a call along the following lines:

let expandingList = document.createElement('ul', { is : 'expanding-list' })

*/
// setInterval(build{
//   do this do that
//   and thatv EventCounts

//   when count --- clear interval
// }, 100)

// let timerId = setInterval(function () {}, 100);
//logic from :https://stackoverflow.com/questions/3583724/how-do-i-add-a-delay-in-a-javascript-loop
let x = 1;

let numBricks;
export function build(n) {
  numBricks = n;
  setTimeout(function () {
    // create a new div element
    let newDiv = document.createElement("div");
    // and give it an id
    newDiv.id = `brick-${x}`;
    document.body.append(newDiv);

    if (x % 3 == 2) {
      newDiv.setAttribute("foundation", "true");
    }
    x++;
    if (x <= n) {
      build(n);
    }
  }, 100);

  //   for (let i = 1; i <= n; i++) {
  //     for (let j = 1; j <= 3; j++) {
  //       // create a new div element
  //       let newDiv = document.createElement("div");
  //       // and give it an id
  //       newDiv.id = `brick-${i}`;
  //       document.body.append(newDiv);

  //       if (j === 2) {
  //         newDiv.setAttribute("foundation", "true");
  //       }

  //       //var currentDiv = document.getElementById("div1");
  //       //document.body.append(newDiv);

  //       // document.body.insertBefore(newDiv, currentDiv);

  //       // }
  //     }

  //     //clearInterval();

  //     // add the newly created element and its content into the DOM
  //     // const currentDiv = document.getElementById("div1");
  //     // document.body.insertBefore(newDiv, currentDiv);
  //   }

  // if (i == n) {
  //   clearInterval(timerId);
  // }
}

build();
export function destroy() {
  const element = document.getElementById(`brick-${numBricks}`);
  element.remove();
  numBricks = numBricks - 1;
}

export function repair(...ids) {
  do {
    document.getElementById(`brick-${i}`);
    if (Element.getAttribute("foundation")) {
      Element.setAttribute("in progress", "true");
    } else {
      Element.setAttribute("repaired", "true");
    }
  } while (i <= ids);
}

//repair(ids);

//destroy(n)
