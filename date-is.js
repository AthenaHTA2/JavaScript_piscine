/*Create the following functions:

    isValid: accepts a Date, and returns false if the Date is invalid.
    isAfter: accepts two Date arguments, and returns true if the first is greater then the second.
    isBefore: accepts two Date arguments, and returns true if the second is greater than the first.
    isFuture: accepts a Date, and returns true if the Date is valid, and is after than the present date.
    isPast: accepts a Date, and returns true if the Date is valid, and is before the present date.
*/
//working for all tests
function isValid(d) {
  //if input is a date
  if (d instanceof Date === true) {
    return true;
  } else if (typeof d === "number" && new Date(d) instanceof Date === true) {
    //if input is #millliseconds
    //turn #milliseconds into a date object and check if it is a valid date
    if (new Date(d) instanceof Date === true) {
      return true;
    }
  }
  return false;
}

function isAfter(dateOne, dateTwo) {
  // console.log(new Date(819170640000))
  // console.log(new Date(123123))
  // console.log(new Date(526))
  if (isValid(dateOne) && isValid(dateTwo)) {
    if (
      typeof dateOne === "number" &&
      typeof dateTwo === "number" &&
      dateOne - dateTwo > 0
    ) {
      return true;
    } else {
      let difference = dateOne.getTime() - dateTwo.getTime(); //turn each date in # of milliseconds and take the difference
      if (difference > 0) {
        return true;
      }
    }
  }
  return false;
}

function isBefore(dateOne, dateTwo) {
  if (isValid(dateOne) && isValid(dateTwo)) {
    if (
      typeof dateOne === "number" &&
      typeof dateTwo === "number" &&
      dateTwo - dateOne > 0
    ) {
      return true;
    } else {
      let difference = dateTwo.getTime() - dateOne.getTime();
      if (difference > 0) {
        return true;
      }
    }
  }

  return false;
}

function isFuture(d) {
  if (isValid(d)) {
    let presentTime = new Date();
    if (d.getTime() - presentTime.getTime() > 0) {
      return true;
    }
  }
  return false;
}

function isPast(d) {
  if (isValid(d)) {
    let presentTime = new Date();
    if (presentTime.getTime() - d.getTime() > 0) {
      return true;
    }
  }
  return false;
}

//test cases:
//console.log(isValid(new Date(123123))); //gives true
//console.log(isValid(new Date())); // returns a string date and gives true
//console.log(isValid(Date.now())); //returns # of milliseconds and gives true
//console.log(isValid(`'2013-01-01'`)); //gives false
//console.log(isValid(isValid)); //gives false
//console.log(isValid(`''`));//gives false
//console.log(isValid(`NaN`));//gives false
//console.log(isValid(Date.now())); //gives true
//console.log(isValid(new Date("December 17, 1995 03:24:00")));//gives true
//console.log(isValid(new Date(1488370835081))); //gives true
//console.log(isValid(new Date("1995-12-17T03:24:00"))); //gives true
//console.log(isValid(new Date("1995-12-17T03:24:00").getTime())); //turns the date into milliseconds. gives true

//isAfter
//console.log(isAfter(new Date("1992-01-01"), new Date("1992-01-02")));//return false
//console.log(isAfter(new Date('2157-11-07'), new Date('2183-04-16')))//return false
//console.log(isAfter(new Date(2321, 11, 21), new Date(Date.now())))//return true
//console.log(isAfter(123123, 526)); //return true
// // isBefore

//console.log(isBefore(new Date(2321, 11, 21), new Date(Date.now())))
console.log(isBefore(123123, 526)); //returns false not correct yet
//console.log(isBefore(new Date('1992-01-01'), new Date('1992-01-02')))
 //console.log(isBefore(new Date('2157-11-07'), new Date('2183-04-16')))
// // isFuture

//console.log(isFuture(new Date('1992-01-01')))
//console.log(isFuture(new Date(Date.now() - 1)))
// console.log(isFuture(new Date(2077, 11, 31)))
//console.log(isFuture(new Date(Date.now() + 1)))
// // isPast

//console.log(isPast(new Date(Date.now() + 1)))//returns false
//console.log(isPast(new Date(2077, 11, 31)))//returns false
//console.log(isPast(new Date(1442, 11, 31)))//returns true
//console.log(isPast(new Date(Date.now() - 1)))//returns true
