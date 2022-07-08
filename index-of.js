function indexOf(arr, elem, start = 0) {
  for (let i = start; i < arr.length; i++) {
    if (arr[i] === elem) {
      return i;
    }
  }
  return -1;
}
function lastIndexOf(arr, elem, start = arr.length - 1) {
  let x = -1;
  for (let i = start; i >= 0; i--) {
    if (arr[i] === elem) {
      return i;
    }
  }
  return -1;
}

function includes(arr, elem) {
  for (const letter of arr) {
    if (letter === elem) {
      return true;
    }
  }
  return false;
}
