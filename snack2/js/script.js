
var firstWord = prompt("Enter the first string:");
var secondWord = prompt("Enter the second string:");


if (firstWord.length < secondWord.length) {
  alert(firstWord + " is shorter than " + secondWord + ".");
}
else if (secondWord.length < firstWord.length) {
  alert(secondWord + " is shorter than " + firstWord + ".");
}
else {
  alert("the strings " + firstWord + " and " + secondWord + " have equal length.");
}
