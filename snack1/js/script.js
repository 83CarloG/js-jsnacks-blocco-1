var firstNumber = parseInt(prompt("Enter first number:"));
var secondNumber = parseInt(prompt("Enter second number:"));

if ( !(isNaN(firstNumber)) && !(isNaN(secondNumber)) ) {
  if (firstNumber > secondNumber) {
    alert(firstNumber + " is bigger then " + secondNumber + ".");
  }
  else if (secondNumber > firstNumber) {
    alert(secondNumber + " is bigger then " + firstNumber + ".");
  }
  else {
    alert("the numbers are equal.");
  }
}
else {
  alert("Error, please enter numbers only!")
}
