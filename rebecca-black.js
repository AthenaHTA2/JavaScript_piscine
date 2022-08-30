/*
Create the following functions which accept a Date:

isFriday: returns true if the Date is a Friday.
isWeekend: returns true if the Date is a weekend day.
isLeapYear: returns true if the year of the Date is a leap year.
isLastDayOfMonth: returns true if the Date represents the last day of the month.
*/

//By Karolus
function isFriday(d) {
  return d.getUTCDay() == 5;
}

function isWeekend(d) {
  return d.getUTCDay() == 6 || d.getUTCDay() == 7;
}

function isLeapYear(date) {
  let year = date.getFullYear();
  // console.log(new Date (year, 1 , 29).getDate())
  return new Date(year, 1, 29).getDate() === 29;
}

function isLastDayOfMonth(date) {
  // console.log(date.getUTCMonth())

  let day = date.getUTCDate();
  let month = date.getUTCMonth();

  if ((day == 28 || day + 1 == 29) && month == 1) {
    if (isLeapYear(date) && day == 29) {
      return true;
    }
    if (!isLeapYear(date) && day == 28) {
      return true;
    }
    return false;
  }
  if (day + 1 == 1 || day + 1 == 31 || day + 1 == 2) {
    return false;
  }
  return true;
}

//Audit tests:
// isFriday
// console.log(isFriday(new Date('2014-08-29')))
// console.log(isFriday(new Date('2020-07-17')))
// console.log(isFriday(new Date('1992-08-26')))
// console.log(isFriday(new Date('2000-08-26')))
// isWeekend
// console.log(sWeekend(new Date('2014-09-06')))
// console.log(isWeekend(new Date('2020-05-30')))
// console.log(isWeekend(new Date('1929-02-13')))
// console.log(isWeekend(new Date('1990-01-30')))
// isLeapYear
// console.log(isLeapYear(new Date('1804-02-01')))
// console.log(isLeapYear(new Date('2008-02-01')))
// console.log(isLeapYear(new Date('2216-02-01')))
// console.log(isLeapYear(new Date('1993-02-01')))
// console.log(isLeapYear(new Date('1999-02-01')))
// isLastDayOfMonth
// console.log(isLastDayOfMonth(new Date('2020-02-29')))
// console.log(isLastDayOfMonth(new Date('2020-12-31')))
// console.log(isLastDayOfMonth(new Date('2019-02-28')))
// console.log(isLastDayOfMonth(new Date('1998-02-28')))
// console.log(isLastDayOfMonth(new Date('1980-02-29')))
// console.log(isLastDayOfMonth(new Date('2020-12-30')))
// console.log(isLastDayOfMonth(new Date('2020-02-28')))
// console.log(isLastDayOfMonth(new Date('2019-02-29')))
