
/*Create a function named reverse which accepts an array or a string. It should work like Array.reverse(), and of course you cannot use that.

function reverse(arr) {
  let mirror = [];
  for (let i = arr.length - 1; i <= 0; i--) {
    mirror.push(arr[i]);
  }
  return mirror;
}*/

function reverse(str) {

    if (typeof str === 'string') {
        let res = ''
        for (let i = str.length - 1; i >= 0; i--) {
            res += str[i]
        }
        return res

    }
    if (typeof str === 'object') {
        let arr = []
        for (let i = str.length - 1; i >= 0; i--) {
            arr.push(str[i])
            // console.log(arr[arr.length], str[i])
        }

        return arr

    }
}
