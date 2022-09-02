function all(obj) {
  return new Promise(async (resolve, reject) => {
    let reslt = {};
    for (const key in obj) {
      try {
        reslt[key] = await obj[key];
      } catch (e) {
        reject(e);
      }
    }
    resolve(reslt);
  });
}
