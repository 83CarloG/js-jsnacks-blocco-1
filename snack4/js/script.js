// Enter a Number
var number = parseInt(prompt("enter a number: "));
// Generate Random number (1 -100)
var numberRandom = Math.floor(Math.random() * 100) + 1;
// Sum number + random number
var totale = number + numberRandom;

// check if number is correct
if (!(isNaN(number))) {
// corret alert 
  alert("Your number is " + number + " the random number is " + numberRandom + " the sum is " + totale);
} else {
// error alert
  alert("Error, you must enter only numbers")
}
