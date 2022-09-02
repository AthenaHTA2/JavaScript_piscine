/*
Create a function named replica that allows you to deep assign the values of all
properties from one or more objects to a target object.
*/
const highTypeOf = (argu) => toString.call(argu).slice(8, -1);
const replica = (obj, ...copys) => {
  copys.forEach((c) => {
    Object.entries(c).forEach(([key, val]) => {
      if (highTypeOf(val) == "Object" && highTypeOf(obj[key]) == "Object") {
        obj[key] = replica(obj[key], val);
      } else {
        obj[key] = val;
      }
    });
  });
  return obj;
};
