/*
You're going to create some curry functions, to apply to the object's entries.
Create defaultCurry, which curries two objects. It mergers the objects together. If the key exists in both objects, the value from the second object override the value from the first object.
defaultCurry({
  http: 403,
  connection: 'close',
  contentType: 'multipart/form-data',
})({
  http: 200,
  connection: 'open',
  requestMethod: 'GET'
})
// output
{
    http: 200,
    connection: 'open',
    contentType: 'multipart/form-data',
    requestMethod: 'GET'
}
Create mapCurry, which replicates function .map (but for an object). The first entry is the function, and the second entry is the object.
mapCurry(([k, v]) => [`${k}_force`, v])(personnel)
// output
{
  lukeSkywalker_force: { id: 5,  pilotingScore: 98, shootingScore: 56, isForceUser: true  },
  sabineWren_force:    { id: 82, pilotingScore: 73, shootingScore: 99, isForceUser: false },
  zebOrellios_force:   { id: 22, pilotingScore: 20, shootingScore: 59, isForceUser: false },
  ezraBridger_force:   { id: 15, pilotingScore: 43, shootingScore: 67, isForceUser: true  },
  calebDume_force:     { id: 11, pilotingScore: 71, shootingScore: 85, isForceUser: true  },
}
Create reduceCurry, which replicates the .reduce method (but fro an object). The first entry is the function, and the second is the object and initial value).
reduceCurry((acc, [k, v]) => (acc += v))({ a: 1, b: 2, c: 3 }, 0)
// output
6
Create filterCurry which replicates the .filter method (but for an object). The first entry is the function, and the second is an object.
filterCurry(([k, v]) => typeof v === 'string' || k === 'arr')({
  str: 'string',
  nbr: 1,
  arr: [1, 2],
})
// output
{ str: 'string', arr: [1, 2] }
Using each curry function create the following functions with a parameter personnel:
reduceScore: that will return the total value of the scores of the people who use the force. (this function can have one additional parameter).
filterForce: that will return the force users with shootingScores equal to or higher than 80.
mapAverage: that will return a new object with the property averageScore, that is the average of the scores for each person.
Code provided
The provided code will be added to your solution, and does not need to be submitted.
// prettier-ignore
const personnel = {
  lukeSkywalker: { id: 5,  pilotingScore: 98, shootingScore: 56, isForceUser: true  },
  sabineWren:    { id: 82, pilotingScore: 73, shootingScore: 99, isForceUser: false },
  zebOrellios:   { id: 22, pilotingScore: 20, shootingScore: 59, isForceUser: false },
  ezraBridger:   { id: 15, pilotingScore: 43, shootingScore: 67, isForceUser: true  },
  calebDume:     { id: 11, pilotingScore: 71, shootingScore: 85, isForceUser: true  },
}
*/
function defaultCurry(obj1) {
  return (obj2) => {
    let reslt = Object.assign({}, obj1);
    Object.keys(obj2).forEach((key) => (reslt[key] = obj2[key]));
    return reslt;
  };
}
function mapCurry(obj1) {
  return (obj2) => {
    return Object.fromEntries(Object.entries(obj2).map(obj1));
  };
}
function reduceCurry(obj1) {
  return (obj2, acc) => {
    return Object.entries(obj2).reduce(obj1, acc);
  };
}
function filterCurry(func) {
  return function (obj) {
    let reslt = {};
    for (const [key, value] of Object.entries(obj)) {
      if (func([key, value])) {
        reslt[key] = value;
      }
    }
    return reslt;
  };
}
const mapAverage = (obj) => {
  let reslt = {};
  Object.entries(obj).map(([key, value]) => {
    reslt[key] = Object.assign(value);
    reslt[key].averageScore = (value.shootingScore + value.pilotingScore) / 2;
  });
  return reslt;
};
function reduceScore(obj, value) {
  return reduceCurry(
    (acc, [key, val]) => acc + val.pilotingScore + val.shootingScore
  )(filterCurry(([key, val]) => val.isForceUser)(obj), value);
}
function filterForce(obj) {
  return filterCurry(
    ([key, val]) => val.shootingScore >= 80 && val.isForceUser
  )(obj);
}
