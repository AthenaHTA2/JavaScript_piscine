function cutFirst(str) {
  let res = "";
  for (let i = 2; i < str.length; i++) {
    res += str[i];
  }
  return res;
}

console.log(cutFirst("01Founders"));
