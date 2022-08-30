/*
Create a function named dayOfTheYear which accepts a Date. 
Your function should return the number of days since the first day of that year.

*/
//My function, did not work:
// function dayOfTheYear(d){
//     let yr = d.getUTCFullYear()
//     let start = new Date(yr, 0, 1)
//     console.lot(start)
// }
//Karolus function:
function dayOfTheYear( date){
    let defaultDate = new Date(date.getUTCFullYear(), 0, 1)

    let currentDate = new Date (date)

    let day = 1000 *60*60*24
    // console.log(defaultDate, currentDate.getDate())

    if(currentDate.getUTCDate() ==1){
        return 1
    }

    let diff = currentDate - defaultDate


    return Math.ceil(diff/day +1)
}

dayOfTheYear('2020-06-22')

//Audit tests:
//export const tests = []
//const t = (f) => tests.push(f)
// console.log(dayOfTheYear(new Date('0001-01-01')) === 1)
// console.log(dayOfTheYear(new Date('1664-08-09')) === 222)
// console.log(dayOfTheYear(new Date('1600-12-31')) === 366)
// console.log(dayOfTheYear(new Date('2020-06-22')) === 174)
// console.log(dayOfTheYear(new Date('2048-12-08')) === 343)
// console.log(dayOfTheYear(new Date('2048-11-08')) === 313)
//Object.freeze(tests)
