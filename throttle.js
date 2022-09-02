function throttle(funct, wait) {
  let Throttledok, savedArgms, saved;
  function wrapper() {
    if (Throttledok) {
      savedArgms = arguments;
      saved = this;
      return;
    }
    Throttledok = true;
    funct.apply(this, arguments);
    setTimeout(function () {
      Throttledok = false;
      if (savedArgms) {
        wrapper.apply(saved, savedArgms);
        savedArgms = saved = null;
      }
    }, wait);
  }
  return wrapper;
}
function opThrottle(funct, wait, options) {
  let timer, savedArgms, saved;
  return function () {
    if (timer) {
      saved = this;
      savedArgms = arguments;
      return;
    }
    const timeup = () => {
      if (options?.trailing === true && savedArgms) {
        funct.apply(saved, savedArgms);
        saved = savedArgms = null;
        timer = setTimeout(timeup, wait);
      } else {
        timer = null;
      }
    };
    if (options?.leading === true) {
      funct.apply(this, arguments);
    } else {
      saved = this;
      savedArgms = arguments;
    }
    timer = setTimeout(timeup, wait);
  };
}
