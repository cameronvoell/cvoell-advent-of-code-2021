var fs = require("fs");
var text = fs.readFileSync(
  "/Users/cameronvoell/A8C/ADVENT-OF-CODE/cvoell-advent-of-code-2021/day-two/input.txt"
);

// Convert file to string, split by newline
var lineArray = (text + "").split("\n").map(function (item) {
  return "" + item;
});

//console.log(checkLineIsValidTwo("1-2 a: bbbcdefg"));

var valid = 0;
lineArray.forEach((line) => {
  if (checkLineIsValidTwo(line)) valid++;
});
console.log(valid);

function checkLineIsValid(line) {
  var minPattern = "^\\d*";
  var min = line.match(minPattern);

  var maxPattern = "-\\d*";
  var maxStr = "" + line.match(maxPattern);
  var max = maxStr.substring(1, maxStr.length);

  var letterPattern = "\\D:";
  var letterStr = "" + line.match(letterPattern);
  var letter = letterStr.substring(0, 1);

  var passwordPattern = ":\\D*$";
  var passwordStr = "" + line.match(passwordPattern);
  var password = passwordStr.substring(2, passwordStr.length);

  var matches = (password.match(new RegExp(letter, "g")) || []).length;
  return matches >= min && matches <= max;
}

function checkLineIsValidTwo(line) {
  var minPattern = "^\\d*";
  var min = line.match(minPattern);

  var maxPattern = "-\\d*";
  var maxStr = "" + line.match(maxPattern);
  var max = maxStr.substring(1, maxStr.length);

  var letterPattern = "\\D:";
  var letterStr = "" + line.match(letterPattern);
  var letter = letterStr.substring(0, 1);

  var passwordPattern = ":\\D*$";
  var passwordStr = "" + line.match(passwordPattern);
  var password = passwordStr.substring(2, passwordStr.length);

  return (
    (password.charAt(min - 1) == letter) ^ (password.charAt(max - 1) == letter)
  );
}
