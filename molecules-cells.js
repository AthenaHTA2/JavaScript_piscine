/*Instructions
Create two functions which accept a string, and return a string:

    RNA: that converts a DNA strand into its compliment RNA strand.
    DNA: that converts an RNA strand into its compliment DNA strand.

Compliments:
DNA | RNA
 G  -  C
 C  -  G
 T  -  A
 A  -  U

Each strand must be represented as upper case string, without spaces, eg: "ATCG" is a valid DNA strand.
    The replace() method returns a new string with the value(s) replaced.
    string.replace(searchValue, newValue)
*/

function RNA(str) {
  var result = "";

  if (str === "") {
    return "";
  }
  for (let i = 0; i < str.length; i++) {
    if (str[i] == "G") {
      result = result + "C";
    } else if (str[i] == "C") {
      result = result + "G";
    } else if (str[i] == "T") {
      result = result + "A";
    } else if (str[i] == "A") {
      result = result + "U";
    }
  }
  console.log(result);
  return result;
}

function DNA(str) {
  var result = "";

  if (str === "") {
    return "";
  }
  for (let i = 0; i < str.length; i++) {
    if (str[i] == "C") {
      result = result + "G";
    } else if (str[i] == "G") {
      result = result + "C";
    } else if (str[i] == "A") {
      result = result + "T";
    } else if (str[i] == "U") {
      result = result + "A";
    }
  }
  //console.log(result);
  return result;
}

console.log(DNA("AUCG"));
