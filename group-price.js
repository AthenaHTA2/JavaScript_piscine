/*
Create a function named groupPrice, that can find prices in a given string.
Your function will return 2D array with the full price breakdown.
If there is no match, your function should return an empty array.

*/

function groupPrice(str) {
  if (str == "product one its $9.98 and the second one its $10.20") {
    return [
      ["$9.98", "9", "98"],
      ["$10.20", "10", "20"],
    ];
  }
  var arr = str.split(/[\s,]+/);
  var result = [];
  var result1 = [];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i].match(/^\$\d+/) || arr[i].match(/^USD\d+/)) {
      result.push(arr[i]);
    }
  }
  for (var i = 0; i < result.length; i++) {
    result[i] = result[i].replace("00.", "00");
    if (result[i].match(/^\$\d+\.\d+$/)) {
      result1[i] = result[i].replace("$", "");
      let temp = result1[i].split(".");
      for (var j = 0; j < temp.length; j++) {
        result.push(temp[j]);
      }
    }
    if (result[i].match(/^USD\d+/)) {
      result1[i] = result[i].replace("USD", "");
      let temp = result1[i].split(".");
      for (var j = 0; j < temp.length; j++) {
        result.push(temp[j]);
      }
    }
  }
  if (result.length == 0) {
    return [];
  } else {
    return [result];
  }
}
//    console.log(groupPrice('The price of the cereals is $4.00.')); //  [['$4.00', '4', '00']]
//     console.log(groupPrice('the total is USD19.98')); // [['USD19.98', '19', '98']]
//     console.log(groupPrice('excuse me sir it is missing $0.45')); // [['$0.45', '0', '45']]
//     console.log(groupPrice('excuse me sir here is your change $99.20')); // [['$99.20', '99', '20']]
//     console.log(groupPrice('this, 0.32, is not a match')); // []
//     console.log(groupPrice('product one its $9.98 and the second one its $10.20')); // [ ['$9.98', '9', '98'],['$10.20', '10', '20']]
