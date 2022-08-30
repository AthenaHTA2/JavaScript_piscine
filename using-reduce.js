/*
Create the following functions:

Your solutions must use reduce.

adder: accepts an array of numbers, and returns the sum as a number.

sumOrMul: accepts an array of numbers and adds or multiplies its elements depending on whether the element is odd or even. Even = multiply. Odd = add.

funcExec: accepts an array of functions and executes them using reduce, returning the result.

Each function may accept an optional argument, which should be the initial value for the function's execution.

Example:
sumOrMul([1, 2, 3, 5, 8], 5) // (((((5 + 1) * 2) + 3) + 5) * 8) -> 160

*/


function adder(numArray, extraNum){
  
    let sum = (adder, value) => adder +value
    let init = 0
    if (extraNum != undefined){
    return numArray.reduce(sum, init) + extraNum
    }
    return numArray.reduce(sum, init)
    
}

function sumOrMul(numArr, extraNum){
    // https://www.codingem.com/javascript-reduce/

    if (typeof extraNum == 'undefined'){
        extraNum =0
    }

    const sum = numArr.reduce(function (x,y){
        if (y %2 ==0){
          return  x*y
        } else{
            // console.log(y)
           return x +y
        }
    }, extraNum)
    // console.log(typeof sum)

    return sum

}

function funcExec(numArr, optional){
    // https://betterprogramming.pub/6-use-cases-for-reduce-in-javascript-49683842ebed

    //creates a pipeline 
    const result = numArr.reduce(function(total,func){
        return func(total)
    },optional)

    return result


}