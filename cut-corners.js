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

function round(a) {
  let remainder = modulo(a);
  if (a == 0) {
    return 0;
  }
  if (a < 0) {
    if (remainder <= -0.5) {
      return a - remainder - 1;
    } else {
      return a - remainder;
    }
  }

  if (remainder == 0) {
    return a;
  }
  if (remainder <= 0.49) {
    return a - remainder;
  } else {
    return a - remainder + 1;
  }
}

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

console.log(floor(3.4));

/*function by Quac
/*function modulo(a, b) {
  let A = a;
  let B = b;
  if (a < 0 || b < 0) {
    A = sign(a); //if -a, int to positive
    B = sign(b); //if -b, int to positive
  }
  while (A > B) {
    A -= B;
    A = A - B; //122-23-23-23-23-23-23-23-23-23 A > B
  }
  if (a < 0 && b < 0) {
    //a = -122, b = -23
    return -A;
  }
  if (a > 0 && b > 0) {
    // a= 122, b = 23
    return A;
  }
  if (a < 0 && b > 0) {
    //a= -122, b= 23
    return -A;
  }
  if (a > 0 && b < 0) {
    //a =122, b=-23
    return A;
  }
}*/
