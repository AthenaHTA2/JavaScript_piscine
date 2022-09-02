/*
https://www.freecodecamp.org/news/javascript-debounce-example/#:~:text=In%20JavaScript%2C%20a%20debounce%20function%20makes%20sure%20that,a%20debounce%20function%20in%20JavaScript.%20What%20is%20debounce%3F
What is debounce?
The term debounce comes from electronics. When you’re pressing a button, let’s say on your TV remote, the signal travels to the microchip of the remote so quickly that before you manage to release the button, it bounces, and the microchip registers your “click” multiple times.
*/
function debounce(funct, wait) {
  let timer;
  return function () {
    const fnCall = () => funct.apply(this, arguments);
    clearTimeout(timer);
    timer = setTimeout(fnCall, wait);
  };
}
function opDebounce(funct, wait, immediate) {
  let timer;
  return function () {
    const fnCall = () => {
      timer = null;
      if (!immediate) funct.apply(this, arguments);
    };
    if (immediate && !timer) funct.apply(this, arguments);
    clearTimeout(timer);
    timer = setTimeout(fnCall, wait);
  };
}
