var number = parseInt(prompt("Enter a number: "));

if (!(isNaN(number))) {
  if ((number % 2) == 0) {
    alert("The number " + number + " is even.")
  }
  else {
    var numberPlus = number + 1;
    alert("The number " + number + " is odd and the next number is  " + numberPlus + ".");
  }
}

alert("Error, please enter numbers only!")
