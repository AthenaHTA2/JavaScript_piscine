async function series(promises) {
  let rslts = [];
  for (const promise of promises) {
    rslts.push(await promise());
  }
  return rslts;
}
