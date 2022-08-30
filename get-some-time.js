/*Create a function named firstDayWeek, which accepts a specific week in a given year:

number: representing a week of the year (between 1 and 53).
string: representing a year.
Your function should return a string representing the naiveDate of the first day of that specific week in the format dd-mm-yyyy.

Week 1 is in all cases, the week which contains the 1st of January.

The first day of a week is a Monday.

If the start of the week is in the previous year, then your function should return the first day of the specified year.
*/

function firstDayWeek(w, y) {
  //stackoverflow.com: https://stackoverflow.com/questions/16590500/calculate-date-from-week-number-in-javascript
  //and Karolus
  let dayR =""
  let month = ""
  //First, calculate number of days till Monday: (w-1 * 7)+1
  var daysNumber = 1 + (w - 1) * 7; // 1st of January + 7 days for each week
  //The below returns date and time, e.g. 1000-12-24T00:01:15.000Z
  let naiveDate = new Date(Date.UTC(y, 0, daysNumber));
  let dayReturn = naiveDate.getUTCDate()
        let weekDay = naiveDate.getUTCDay()
        if(dayReturn <10){
            if(dayReturn >7 && weekDay ==0){
                weekDay+=1
                    // console.log(weekDay)
                    for(let i =1; i<= dayReturn; i++ ){
                        dayReturn-=i
                        console.log(dayReturn-i)
                    }
            }
            dayR += 0
            dayR += dayReturn
           // console.log(dayR, weekDay)
            // dayReturn +="0"
        } else{
            dayR += dayReturn
            if (weekDay >0){
                for(let i = 0; i <=weekDay; i ++){
                   // console.log(i)
                    if (i == weekDay){
                        dayR -= (i-1)
                    }
                }
            }
           // console.log(dayR)
        }
        let monthReturn = (naiveDate.getUTCMonth()+1)

        if (monthReturn <10){
            month += "0"
            month += monthReturn
        } else{
            month += monthReturn
        }




    return (dayR+"-"+month+"-"+y)
}


//Audit tests:
//console.log(firstDayWeek(1, "1000"), "01-01-1000");
//console.log(firstDayWeek(52, '1000'), '22-12-1000')
// console.log(firstDayWeek(2, '0001'), '08-01-0001')
// console.log(firstDayWeek(43, '1983'), '17-10-1983')
 console.log(firstDayWeek(23, '0091'), '04-06-0091')
// console.log(firstDayWeek(2, '2017'), '02-01-2017')

//firstDayWeek(20, 2013)
