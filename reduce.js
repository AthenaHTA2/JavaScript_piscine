/*
Create three functions:
fold that receives an array, a function and an accumulator, in this order,
and applies the function on the elements of the array starting on the left.

foldRight that receives an array, a function and an accumulator, in this order,
and applies the function in the elements of the array starting on the right.

reduce that works just like the method [].reduce when you don't specify an accumulator. 
The arguments should be an array and a function. The starting value of your accumulator must be the first value of the array. If your array is less than 1 argument you should throw an error.

reduceRight like reduce, from the last value to the first

*/
function fold(array, f, acc) {
  array.forEach((element, index, array) => {
    acc = f(acc, array[index]);
    console.log(acc);
    // console.log(array[index])
    // console.log(array[index +1])
  });
  return acc;
}

//let i = f(a, b);
// console.log(i);
// acc = acc + i;
// console.log("acc", acc);

function foldRight(array, f, acc) {
  // let antiArray;
  // antiArray = [...array.reverse()];
  // console.log(antiArray);
  array.forEach((element, index, array) => {
    acc = f(acc, array[array.length - 1 - index]);
    //console.log(acc);
    // console.log(array[index])
    // console.log(array[index +1])
  });
  return acc;
}

function reduce(array, f) {
  try {
    if (array.length < 1) throw "array is empty";
  } catch (err) {
    return err;
  }

  let accum = array[0];

  array.forEach((element, index) => {
    if (index != 0) {
      accum = f(accum, element);
    }
  });
  // } catch (err) {
  //   if (array.length < 1) {
  //     throw "Array too small";
  //   }
  return accum;
}

function reduceRight(array, f) {
  // let antiArray = array.reverse();
  try {
    if (array.length < 1) throw "array is empty";
  } catch (err) {
    return err;
  }

  let accum = array[array.length - 1];

  array.forEach((element, index, array) => {
    if (index != 0) {
      accum = f(accum, array[array.length - 1 - index]);
    }
  });
  return accum;
}

//reduce.js Tests:

//let  str1= ['This ', 'is ', 'a ', 'simple ', 'example']
//   Array.prototype.reduce = undefined
// Array.prototype.reduceRight = undefined
// // /*/ // ⚡
// export const tests = []
// const t = (f) => tests.push(f)
//const adder = (a, b) => a + b;
//const ifOdd = (a, b) => (b % 2 === 0 ? a + 2 : a * 2);
//let num1 = []; // 5 + 12 + 28 + 0 = 35
//let num1 = [3, 10, 26, 0]; // 5 + 12 + 28 + 0 = 35
//const concatenate = (a = '', b) => a.concat(b)
// const merger = (a, b) => ({ ...a, ...b })
// t(({ eq, ctx }) => eq(fold(ctx.num1, adder, 0), 39))
// t(({ eq, ctx }) =>
//   eq(fold(ctx.str1, concatenate, '-> '), '-> This is a simple example'),
// )
// t(({ eq, ctx }) => eq(fold(ctx.num1, ifOdd, 0), 6))
// t(({ eq, ctx }) => eq(fold(ctx.num1, adder, 4), 43))
// t(({ eq, ctx }) =>
//   eq(
//     fold(ctx.str2, concatenate, ''),
//     'The quick brown fox jumped over the lazy dog ',
//   ),
// )
//console.log(fold(num1, ifOdd, 10)); //, 26)
//console.log(foldRight(num1, adder, 0), 39);
// t(({ eq, ctx }) =>
//   eq(foldRight(ctx.str1, concatenate, '-> '), '-> examplesimple a is This '),
// )
// t(({ eq, ctx }) => eq(foldRight(ctx.num1, ifOdd, 0), 12))
//console.log(foldRight(num1, adder, 0))//, 43)
// t(({ eq, ctx }) =>
//   eq(
//     foldRight(ctx.str2, concatenate, 'This is almost understandable. '),
//     'This is almost understandable. dog lazy the over jumped fox brown quick The ',
//   ),
// )
// t(({ eq, ctx }) => eq(foldRight(ctx.num1, ifOdd, 10), 32))
//console.log(reduce(num1, adder)); //, 39)
// t(({ eq, ctx }) => eq(reduce(ctx.num2, adder), 63))
// t(({ eq, ctx }) =>
//console.log(reduce(str1, concatenate))//, 'This is a simple example'),
// )
// t(({ eq, ctx }) =>
//   eq(
//     reduce(ctx.str2, concatenate),
//     'The quick brown fox jumped over the lazy dog ',
//   ),
// )
// t(({ eq, ctx }) =>
//   eq(reduce(ctx.obj, merger), {
//     a: 12,
//     b: 6,
//     c: { d: 2, e: 3 },
//     f: 'hello',
//   }),
// )
//console.log(reduceRight(num1, adder))//, 39))
// t(({ eq, ctx }) => eq(reduceRight(ctx.num2, adder), 63))
// t(({ eq, ctx }) =>
//   eq(reduceRight(ctx.str1, concatenate), 'examplesimple a is This '),
// )
// t(({ eq, ctx }) =>
//   eq(
//     reduceRight(ctx.str2, concatenate),
//     'dog lazy the over jumped fox brown quick The ',
//   ),
// )
// t(({ eq, ctx }) =>
//   eq(reduceRight(ctx.obj, merger), {
//     f: 'hello',
//     b: 6,
//     c: { d: 2, e: 3 },
//     a: 12,
//   }),
// )
// Object.freeze(tests)
// export const setup = () =>
//   Object.fromEntries(
//     Object.entries({
//num1 = [3, 10, 26, 0];
//       num2: [4, 24, 10, 25],
// let  str1= ['This ', 'is ', 'a ', 'simple ', 'example']
//       str2: 'The quick brown fox jumped over the lazy dog'
//         .split(' ')
//         .map((x) => (x += ' ')),
//       obj: [{ a: 12 }, { b: 6, c: { d: 2, e: 3 } }, { f: 'hello' }],
//     }).map(([k, v]) => [k, Object.freeze(v)]),
//   )
