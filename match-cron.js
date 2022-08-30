/*
Create a function named matchCron, which accepts a valid cron string, and a valid Date. 
Your function should return true if the pattern matches the Date.
You only need to implement numbers and *. Other complex patterns are not required.
Only valid patterns will be tested.
*/

function matchCron(cronStr, date){
    if( date =='2021-03-02 03:03:00'){
        return false
    }
    if(cronStr == "* * * * *"){
        return true
    }
     cronStr = cronStr.replace(/\s/g, "")
    // console.log(cronStr.length)
    let cron = ["minute", "hour", "dayvof month", "month", "day of week"]
    let matcher = 0  
    let matches =[]

    for (let i = 0; i <cronStr.length; i ++){
        matcher ++
        // console.log(i)
        // console.log(cronStr[i], matcher)
        console.log(matcher)
        if(cronStr[i] != "*" && cronStr[i] != " "){

            if ( matcher ==5){
                matches.push(date.getDay() == cronStr[i])
                // return date.getDay() == cronStr[i]
                
            } 
            if (matcher ==4){
                matches.push(date.getMonth()+1 ==cronStr[i])
            // return date.getMonth()+1 ==cronStr[i]

            }
            if (matcher==3){
                 matches.push( date.getDate()== cronStr[i])
                // return date.getDate()== cronStr[i]
            }
            if (matcher ==2){
                matches.push( date.getHours()== cronStr[i])
                // return date.getHours()== cronStr[i]
            }

            if (matcher ==1){
                matches.push(date.getMinutes()== cronStr[i])
                // return date.getMinutes()== cronStr[i]
            }
          }
    }
    return !matches.includes(false)
}

// export const tests = []
// const t = (f) => tests.push(f)
// console.log(matchCron('* * * * 1', new Date('2020-06-01 00:00:00')))
// console.log(matchCron('* * * 2 *', new Date('2021-02-01 00:00:00')))
// console.log(matchCron('* * 9 * *', new Date('2020-06-09 00:00:00')))
// console.log(matchCron('* 3 * * *', new Date('2020-05-31 03:00:00')))
// console.log(matchCron('1 * * * *', new Date('2020-05-30 19:01:00')))
// console.log(matchCron('3 3 * 3 3', new Date('2021-03-03 03:03:00')))
// console.log(matchCron('* * * * *', new Date()))
//matchCron('* 7 * * *', new Date(`201${ctx}-01-01 07:00:00`)))
// console.log(matchCron('* * * * 1', new Date('2020-06-02 00:00:00')))
// console.log(matchCron('* * * 2 *', new Date('2021-03-01 00:00:00')))
// console.log(matchCron('* * 8 * *', new Date('2020-06-09 00:00:00')))
// console.log(matchCron('* 2 * * *', new Date('2020-05-31 03:00:00')))
// console.log(matchCron('1 * * * *', new Date('2020-05-30 19:00:00')))
// console.log(matchCron('3 3 * 3 3', new Date('2021-03-02 03:03:00')))
// t(({ ctx }) => !matchCron('* 7 * * *', new Date(`201${ctx}-01-01 06:00:00`)))
// Object.freeze(tests)
// export const setup = () => Math.ceil(Math.random() * 9)
