function multiply(a, b = 1) {
  if (b == 0) {
    return 0;
  }

  if (b > 0) return a + multiply(a, b - 1);

  /* the negative mult is unclear to me*/
  if (b < 0) return -multiply(a, -b);
}

function divide(a, b = 1) {
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

function modulo(a, b = 1) {
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

//This is the task 1
function round(a) {
  let remainder = modulo(a);
  if (a == 0) {
    return 0;
  }
  if (a < 0) {
    if (remainder <= -0.5) {
      return a - remainder - 1;
    }
    if (remainder > -0.5) {
      return a - remainder;
    }
  }

  if (remainder == 0) {
    return a;
  }
  if (remainder <= 0.49) {
    return a - remainder;
  }
  return a - remainder + 1;
}

//This is the task 2
function floor(a) {
  let remainder = modulo(a);
  if (a == 0) {
    return 0;
  }
  if (a < 0) {
    return a - remainder - 1;
  }
  return a - remainder;
}

//This is task 3:

function trunc(a) {
  if (a == 0) {
    return 0;
  }
  //if a > 68719476735
  //a = 68719476735 + random number
  //let a = a - 68719476735
  if (a > 68719476735) {
    a = a - 68719476735;
    let remainder = modulo(a); //run the random number into
    return a - remainder + 68719476735;
  }
  let remainder = modulo(a);
  return a - remainder;
}

function ceil(a) {
  let remainder = modulo(a);
  if (a == 0) {
    return 0;
  }
  if (a < 0) {
    return a - remainder;
  }
  return a - remainder + 1;
}
//console.log(trunc(68719476735));
