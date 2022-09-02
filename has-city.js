/*
Create a function hasCity that takes a string called country and an array of strings, 
which are cities of that country, which returns a new function.
The new function takes a string, called city, as a parameter and which determines whether the array contains that string or not.

If it does, it should return the string <city> is a city from <country>, otherwise <city> is not a city from <country>.
*/

function hasCity(country, cities = []) {
  return function (city) {
    if (cities.includes(city)) {
      return `${city}` + "is a city from" + `${country}`;
    } else {
      return `${city}` + "is not a city from" + `${country}`;
    }
  };
}

//Tests:
// export const tests = []
// const t = (f) => tests.push(f)
// // create specialized functions
// t(({ ctx }) => {
//   ctx.isFrench = hasCity('France', [
//     'Bordeaux',
//     'Paris',
//     'Lille',
//     'Lyon',
//     'Marseille',
//     'Saint-Étienne',
//   ])
//   ctx.isUS = hasCity('the US', [
//     'New York',
//     'Chicago',
//     'San Francisco',
//     'Washington DC',
//     'Los Angeles',
//   ])
//   ctx.isChinese = hasCity('China', [
//     'Beijing',
//     'Shanghai',
//     'Wuhan',
//     'Shenzhen',
//     'Tianjin',
//     'Chengdu',
//   ])
//   return true
// })
// t(({ eq, ctx }) => eq(ctx.isChinese('Beijing'), 'Beijing is a city from China'))
// t(({ eq, ctx }) => eq(ctx.isFrench('Lille'), 'Lille is a city from France'))
// t(({ eq, ctx }) => eq(ctx.isUS('New York'), 'New York is a city from the US'))
// t(({ eq, ctx }) => eq(ctx.isChinese('Tokyo'), 'Tokyo is not a city from China'))
// t(({ eq, ctx }) => eq(ctx.isFrench('Paris'), 'Paris is a city from France'))
// t(({ eq, ctx }) => eq(ctx.isUS('Abidjan'), 'Abidjan is not a city from the US'))
// t(({ eq, ctx }) => eq(ctx.isChinese('Seul'), 'Seul is not a city from China'))
// t(({ eq, ctx }) => eq(ctx.isUS(''), ' is not a city from the US'))
// t(({ eq, ctx }) => eq(ctx.isChinese('Wuhan'), 'Wuhan is a city from China'))
// t(({ eq, ctx }) =>
//   eq(ctx.isFrench('Lisbon'), 'Lisbon is not a city from France'),
// )
// t(({ eq, ctx }) =>
//   eq(ctx.isUS('Los Angeles'), 'Los Angeles is a city from the US'),
// )
// t(({ eq, ctx }) =>
//   eq(ctx.isFrench('Chengdu'), 'Chengdu is not a city from France'),
// )
// Object.freeze(tests)
