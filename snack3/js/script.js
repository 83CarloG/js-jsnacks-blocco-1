// Enter input
var number = parseInt(prompt("Enter a number: "));

// Check if input are valid
if (!isNaN(number)) {
// Check if input is even or odd + output
  if ((number % 2) == 0) {
    alert("The number " + number + " is even.");
  }
  else {
    var numberPlus = number + 1;
    alert("The number " + number + " is odd and the next number is  " + numberPlus + ".");
  }
}
else {
  alert("Error, please enter numbers only!");
}
