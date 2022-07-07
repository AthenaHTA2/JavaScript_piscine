function repeat(a, b) {
  let text = a;
  let count = 0;
  while (count < b) {
    text = text + text;
  }
  return text;
}
