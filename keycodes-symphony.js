/*Instructions:

Like an inspired Beethoven who's about to write his Moonlight Sonata, 
you're about to compose a colorful symphony of letters with your keyboard.
Write the function compose:

Make it fire every time a key is pressed.
Create a new div with the class note when a letter of the lowercase alphabet is pressed. 
It should have a unique background color generated using the key of the event. It should also displays the corresponding pressed character.
When Backspace is pressed, delete the last note.
When Escape is pressed, clear all the notes.

Constructor:
- KeyboardEvent() constructor creates a new KeyboardEvent object;
 
Properties:
 KeyboardEvent.altKey, KeyboardEvent.code, KeyboardEvent.ctrlKey, 
 KeyboardEvent.isComposing, KeyboardEvent.key, KeyboardEvent.location, 
 KeyboardEvent.metaKey, KeyboardEvent.repeat, KeyboardEvent.shiftKey

 Methods:
 - KeyboardEvent()
- KeyboardEvent.key : Returns a number representing the Unicode reference number of the key. 
  This property is used only b the 'keypress' event.

  Events:
  - keydown
  -keypress
  - keyup

*/

export function compose() {
  let myDiv;
  document.addEventListener(
    "keydown",
    (event) => {
      const keyName = event.key;
      //  if (`${keyName}` >= "a" && `${keyName}` <= "z") {
      myDiv = document.createElement("div"); //generate a 'div' element
      myDiv.className = "note";
      document.body.appendChild(myDiv);
      //Generate a random colour to apply to myDiv background:
      var x = Math.floor(Math.random() * 256);
      var y = Math.floor(Math.random() * 256);
      var z = Math.floor(Math.random() * 256);
      var bgColor = "rgb(" + x + "," + y + "," + z + ")";
      //alert(`bgr colour :`+ bgColor)
      myDiv.style.background = bgColor;
      myDiv.textContent = `${keyName}`
      
      alert(`Key pressed + ${keyName}`);
      console.log(keyName);
      // }
      if (keyName === "Control") {
        // do not alert when only Control key is pressed.
        return;
      }

      if (event.ctrlKey) {
        // Even though event.key is not 'Control' (e.g., 'a' is pressed),
        // event.ctrlKey may be true if Ctrl key is pressed at the same time.
        alert(`Combination of ctrlKey + ${keyName}`);
      } else {
        //alert(`Key pressed ${keyName}`);
      }
    },
    false
  );

  //document.addEventListener('keyup', (event) => {
  //     const keyName = event.key;

  //     // As the user releases the Ctrl key, the key is no longer active,
  //     // so event.ctrlKey is false.
  //     if (keyName === 'Control') {
  //       alert('Control key was released');
  //     }
  //   }, false);
  // let letter = KeyboardEvent.key
  // alert(letter)
  // console.log(letter)
  //     const keyboard = navigator.keyboard;
  // keyboard.getLayoutMap()
  // .then(keyboardLayoutMap => {
  //   const upKey = keyboardLayoutMap.get('KeyW');
  //   window.alert('Press ' + upKey + ' to move up.');
  // })

  //KeyboardEvent.DOM_KEY_LOCATION_STANDARD

  //an example for onKeyPress:
  //  type="text" onKeyPress="handleInput(this.value)"

  //     function handleInput(value){
  //         alert(value);
  //     }
}
