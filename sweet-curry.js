/*
Create the following functions with the "currying" process. Those functions should accept only one argument each.

mult2: that multiplies two numbers.
add3: that adds three numbers.
sub4: that subtracts four numbers.
*/

/*from:stackoverflow.com/questions/36314/what-is-currying
Currying is when you break down a function that takes multiple arguments 
into a series of functions that each take only one argument. 
- - - - - - - - - - - - - - - - - - - - - 
Example 1:
function add (a, b) {
  return a + b;
}

becomes:
function add (a) {
  return function (b) {
    return a + b;
  }
}
- - - - - - - - - - - - - - - - - - - - - 
Example 2:
let addTen = add(10);
When this runs the 10 is passed in as x;

let add = function(10){
  return function(y){
    return 10 + y 
  };
};

which means we are returned this function:
function(y) { return 10 + y };

So if you do this:
 addTen(4)
it's the same as:
function(4) { return 10 + 4} // 14
- - - - - - - - - - - - - - - - - - - - - - 
Example 3:
We could call 'doTheHardStuff' function once,
then pass around the result to be used in lots of places, 
meaning we only do the computationally expensive stuff once:

let doTheHardStuff = function(x) {
  let z = doSomethingComputationallyExpensive(x)
  return function (y){
    z + y
  }
}

let finishTheJob = doTheHardStuff(10)
finishTheJob(20)
finishTheJob(30)

*/

// let mult2 = mult1(x);

// let mult1 = function (x) {
//   return function (y) {
//     return x * y;
//   };
// };

function mult2(x){
  return function(y){
    return x*y
  }
}


let add3 = x => y => y ? add3(x + y) : x

let sub4 = x => y => y ? sub4(x - y) : x

console.log(add3(1)(2)(3)())
//console.log(mult2(2)(4))
//console.log(sub4(10)(2)(3)(1)())
