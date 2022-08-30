/*
Create a function named countLeapYears which accepts a Date. Your function should return 
the number of leap years to have taken place since the year 1.
*/

//by Karolus
function countLeapYears(date) {
  let defaultDate = new Date("0001-01-01");

  let currentDate = new Date(date);

  let day = 1000 * 60 * 60 * 24;

  let daysDiff = (currentDate - defaultDate) / day;

  let years = Math.floor(daysDiff / 365);

  let leapYears = years / 400 + (years / 4 - years / 100);

  return Math.floor(leapYears);
}
