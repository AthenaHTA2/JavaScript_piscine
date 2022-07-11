/*Instructions:
You will create two functions: addWeek and timeTravel.
You have been given a mission to create a new sense of time. Normally a week has 7 days right? Well, that is about to change.
Weeks will instead have 14 days.
Let me explain; this new week will have 14 days, from Monday to Sunday, then secondMonday to secondSunday.
Your purpose is to create a new function named addWeek, that takes a Date as an argument. Your function should return the weekday as a string, according to our new 14-day week format. The epoch of our new 14-day week is 0001-01-01, and that was a Monday.
    What is an epoch
Now imagine you have an appointment with your doctor, and you have to wait for some hours, but you do not want to wait. So you decide that you need to create a new function named timeTravel, that allows you to change the time according to your needs.
Your function will take an object as an argument, and return a Date. You can see the timeTravel example below to understand the structure of the object argument.
Your objective is to use the information from the object to modify the time of the Date before returning it.

  //hour, day, week, month, and year in seconds:
  /*const secHour = 3600;
  const secDay = 86400;
  const secWeek = 604800;
  const secMonth = 2629743;
  const secYear = 31556926;


information from Google:
  To get the current epoch time in seconds:
  Note that the 'getTime()' method returns the time in milliseconds.
  let newDateInSeconds = Math.floor(new Date().getTime() / 1000.0);

Solution by Mohamed:

function addWeek(date){

  const dayNames = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
    "nextMonday",
    "nextTuesday",
    "nextWednesday",
    "nextThursday",
    "nnextSaturday",
    "nextSunday",
  ];
const start = new Date("0001-01-01")
const days = Math.round((date.getTime() - start.getTime())/(1000*60*60*24))
return dayNames[days%14]




}

Solution by Quoc:

function addWeek(date){
  //long number from: https://www.epochconverter.com/

  return newDays[Math.floor((date.getTime() + 621355968000000)/86400/1000)%14];

}

const newDays = [   
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
    "nextMonday",
    "nextTuesday",
    "nextWednesday",
    "nextThursday",
    "nextFriday",
    "nextaturday",
    "nextSunday",
  ]

*/

function addWeek(d) {
  let prefix = "";
  let wkDay = "";
  let day = 0;

  var arrWkDays = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  //To set the new epoch to 0001-01-01:
  const myEpoch = new Date("0001-01-01");

  var milliSec_1 = myEpoch.getTime();
  var myDate = new Date(d);
  var milliSec_2 = myDate.getTime();
  var diffDays = (milliSec_2 - milliSec_1) / (1000 * 3600 * 24);
  console.log(diffDays);

  if (diffDays < 7) {
    prefix = "";
    wkDay = arrWkDays[diffDays];
  } else {
    //check if the whole number is even or odd, and assign prefix "second" to odd numbers
    if (Math.floor(diffDays / 7) % 2 != 0) {
      prefix = "second";
      console.log(diffDays);
      day = diffDays - 7 * Math.floor(diffDays / 7);
      console.log(day);
      console.log(diffDays - Math.floor(diffDays));
      wkDay = prefix + arrWkDays[day];
    } else {
      prefix = "";
      day = diffDays - 7 * Math.floor(diffDays / 7);
      wkDay = prefix + arrWkDays[day];
    }
  }

  return wkDay;
}

console.log(addWeek("1664-08-09"));
