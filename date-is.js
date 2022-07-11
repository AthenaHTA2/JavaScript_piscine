/*Create the following functions:

    isValid: accepts a Date, and returns false if the Date is invalid.
    isAfter: accepts two Date arguments, and returns true if the first is greater then the second.
    isBefore: accepts two Date arguments, and returns true if the second is greater than the first.
    isFuture: accepts a Date, and returns true if the Date is valid, and is after than the present date.
    isPast: accepts a Date, and returns true if the Date is valid, and is before the present date.
*/

/*
Google: How check date is valid or invalid in JavaScript?
Store the date object in a variable. If the date is valid then the getTime() will always be equal to itself. 
If the date is Invalid then the getTime() will return NaN which is not equal to itself. 
The isValid() function is used to check the getTime() method is equal to itself or not.
*/

function isValid(myDate) {
  /*console.log(new Date());
  console.log(Object.prototype.toString.call(myDate));
  console.log("[object myDate]");
  console.log(!isNaN(Date.parse(myDate)));
  let test = Object.prototype.toString.call(myDate) instanceof Date;
  if (
    Object.prototype.toString.call(myDate) === "[object myDate]" &&
    !isNaN(myDate)
  ) {
    return true;
  }*/
  console.log(typeof myDate);
  if (typeof myDate === "string") {
    return false;
  }
  return !isNaN(Date.parse(myDate));
}

console.log(isValid("2013-01-01"));
//console.log(isValid(isValid)); gives false
//console.log(isValid(Date.now()))gives true
//console.log(isValid(new Date()));gives true
//console.log(isValid(Date.now()));gives false
//console.log(isValid(new Date("December 17, 1995 03:24:00")));gives true
//console.log(isValid(new Date(new Date(1488370835081)))); gives true
//console.log(isValid(new Date("1995-12-17T03:24:00"))); gives true
//console.log(isValid(new Date("1995-12-17T03:24:00").getTime())); gives false
