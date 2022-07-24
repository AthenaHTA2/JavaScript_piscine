let ctxStates = [
  {
    city: "Los Angeles",
    state: "california",
    region: "West",
    temperature: "101°F",
  },
  {
    city: "San Francisco",
    state: "california",
    region: "West",
    temperature: "84°F",
  },
  { city: "Miami", state: "Florida", region: "South", temperature: "112°F" },
  {
    city: "New York City",
    state: "new york",
    region: "North East",
    temperature: "0°F",
  },
  { city: "Juneau", state: "Alaska", region: "West", temperature: "21°F" },
  {
    city: "Boston",
    state: "massachussetts",
    region: "North East",
    temperature: "45°F",
  },
  {
    city: "Jackson",
    state: "mississippi",
    region: "South",
    temperature: "70°F",
  },
  { city: "Utqiagvik", state: "Alaska", region: "West", temperature: "-1°F" },
  {
    city: "Albuquerque",
    state: "new mexico",
    region: "West",
    temperature: "95°F",
  },
];

function citiesOnly(arrCities) {
  var cities = arrCities.map((x) => (x = arrCities.city));
  //   var cities = arrCities.map(function (city) {
  //     for (let i = 0; i < arrCities.length; i++) {
  //       console.log(arrCities[i].city);
  // }
  return cities;
}

citiesOnly(ctxStates);

// function upperCasingStates(arrStates) {
//   var states = arrStates.map(function (state) {
//     return arrStates[state].string.charAt(0).toUpperCase;
//   });
//   return states;
// }
