function multiply(a, b) {
  if (b == 0) {
    return 0;
  }

  if (b > 0) return a + multiply(a, b - 1);

  /* the negative mult is unclear to me */
  if (b < 0) return -multiply(a, -b);
}

console.log(multiply(2, -3));

function divide(a, b) {
  if (a == 0) return 0;
  if (b == 0) return Number.MAX_VALUE;
  let negResult = false;

  // Handling negative numbers
  if (a < 0) {
    a = -a;
    if (b < 0) b = -b;
    else negResult = true;
  } else if (b < 0) {
    b = -b;
    negResult = true;
  }
  // if a is greater than equal to b subtract b from a and increase quotient by one.
  let quotient = 0;
  while (a >= b) {
    a = a - b;
    quotient++;
  }
  // checking if neg equals to 1 then making quotient negative
  if (negResult) quotient = -quotient;
  return quotient;
}

//my function that is not working inside the modulo function
/*function divide(a, b) {
  let quotient = 0;
  let positive = true;
  if (a == 0) return 0;
  if (b == 0) return Number.MAX_VALUE;

  if (a < 0) {
    a = -a;
    positive = false;
  }
  if (b < 0) {
    b = -b;
    positive = false;
  }

  while (a >= b) {
    a = a - b;
    quotient++;
  }
  if (positive == false) return -quotient;
  else return quotient;*/

console.log(divide(9, 3));

function modulo(a, b) {
  let result = a - multiply(b, divide(a, b));

  if (a > 0 && b > 0) {
    return result;
  }
  if (a < 0) {
    return result;
  }
  if (b < 0) {
    return result;
  }
  return result;
}

console.log(modulo(-30, -8));
