function interpolation(object) {
  let stepi = 0;
  let intervals = setInterval(() => {
    let lapse =
      object.start + (stepi * (object.end - object.start)) / object.step;
    let ftime = ((stepi + 1) * object.duration) / object.step;
    object.callback([lapse, ftime]);
    stepi++;

    if (stepi === object.step) clearInterval(intervals);
  }, object.duration / object.step);
}
