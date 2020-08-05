// Enter input
var firstWord = prompt("Enter the first string:");
var secondWord = prompt("Enter the second string:");

// Check if the user enter a value
if (!(firstWord === "") && !(secondWord === "")) {
// Algorithm to find shorter word + output
  if (firstWord.length < secondWord.length) {
    alert(firstWord + " is shorter than " + secondWord + ".");
  }
  else if (secondWord.length < firstWord.length) {
    alert(secondWord + " is shorter than " + firstWord + ".");
  }
  else {
    alert("the strings " + firstWord + " and " + secondWord + " have equal length.");
  }
} else {
  alert("Please, enter the words!")
}
