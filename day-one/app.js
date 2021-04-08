var fs = require("fs");
var text = fs.readFileSync(
  "/Users/cameronvoell/A8C/ADVENT-OF-CODE/day-one/input.txt"
);

// Convert file to string, split by newline, and then map each
// line to an integer added to our expenses array
var expenses = (text + "").split("\n").map(function (item) {
  return parseInt(item, 10);
});

//print2020Pair();
print2020TripleBruteForce();

//Complexity n^3 => lots of duplicated effort
function print2020TripleBruteForce() {
  var found = false;
  for (let a = 0; a < expenses.length - 1; a++) {
    for (let b = 0; b < expenses.length - 1; b++) {
      for (let c = 0; c < expenses.length - 1; c++) {
        if (a != b && a != c && b != c) {
          if (expenses[a] + expenses[b] + expenses[c] == 2020) {
            console.log(
              "First: " +
                expenses[a] +
                " , Second: " +
                expenses[b] +
                " , Third: " +
                expenses[c] +
                " =>  have sum of " +
                (expenses[a] + expenses[b] + expenses[c]) +
                " and a product of: " +
                expenses[a] * expenses[b] * expenses[c]
            );
            return;
          }
        }
      }
    }
  }
}

//
//nLogn is possible, can solve sorted list linearly by keeping a pointer to each end of sorted array
function print2020Pair() {
  //Default array sort is alphabetical, even with numbers?
  expenses.sort((a, b) => a - b);
  for (let i = 0; i < expenses.length - 1; i++) {
    //console.log(expenses[i]);
    let counter = i + 1;
    while (
      counter < expenses.length - 1 &&
      expenses[i] + expenses[counter] <= 2020
    ) {
      if (expenses[i] + expenses[counter] == 2020) {
        console.log(
          "First: " +
            expenses[i] +
            " , Second: " +
            expenses[counter] +
            " =>  have sum of " +
            (expenses[i] + expenses[counter]) +
            " and a product of: " +
            expenses[i] * expenses[counter]
        );
      }
      counter++;
    }
  }
}
