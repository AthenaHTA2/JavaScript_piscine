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
  var myDate_1 = new Date(myDate);
  return Object.prototype.toString.call(myDate_1) === "[object Date]";
}

console.log(isValid("1995-12-17T03:24:00"));
