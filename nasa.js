function nasa(N) {
  let str = "";
  for (let i = 1; i <= N; i++) {
    if (i < N) {
      if (i % 15 == 0) {
        str = str + "NASA ";
      } else if (i % 3 == 0) {
        str = str + "NA ";
      } else if (i % 5 == 0) {
        str = str + "SA ";
      } else {
        str = str + i.toString(10) + " ";
      }
    } else {
      if (i % 15 == 0) {
        str = str + "NASA";
      } else if (i % 3 == 0) {
        str = str + "NA";
      } else if (i % 5 == 0) {
        str = str + "SA";
      } else {
        str = str + i.toString(10);
      }
    }
  }
  console.log(str);
  return str;
}

console.log(nasa(15));
