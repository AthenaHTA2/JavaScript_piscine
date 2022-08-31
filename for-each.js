/*
Create a function named forEach which takes an array as the first argument, 
a function as the second argument, and that works like the Array.prototype.forEach method.
*/

const forEach = (arr, func) =>
  arr.map((element, index, arr) => func(element, index, arr));

//Tests:
// Array.prototype.forEach = undefined
// // /*/ // ⚡
// export const tests = []
// const t = (f) => tests.push(f)
// export const setup = () => {
//   const arr = [1, 2, 3, 4, 5, Math.random(), 7, 10, -10, 20, -95]
//   Object.getPrototypeOf([]).proto = ' [avoid for..in] '
//   return { arr }
// }
// t(({ eq, ctx }) => {
//   // callback is call with the item value
//   const result = []
//   forEach(ctx.arr, (value) => result.push(value))
//   return eq(result, ctx.arr)
// })
// t(({ eq, ctx }) => {
//   // callback second parameter is the index
//   const result = []
//   forEach(ctx.arr, (_, index) => result.push(index))
//   return eq(result, [...ctx.arr.keys()])
// })
// t(({ eq, ctx }) => {
//   // callback third parameter is the array
//   const result = []
//   forEach(ctx.arr, (_, __, arr) => result.push(arr))
//   return eq(result, Array(ctx.arr.length).fill(ctx.arr))
// })
// Object.freeze(tests)
