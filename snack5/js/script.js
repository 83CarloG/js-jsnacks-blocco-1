

var button = document.getElementById("gioca");


button.addEventListener("click",
  function  () {
    // Reset
    document.getElementById('box-red').innerHTML = "";
    document.getElementById('box-green').innerHTML = "";
    // Genero un numero Casuale
    var randomNumber = Math.floor(Math.random() * 100) + 1;

    // Controllo se il numero  è positivo o negativo
    if ((randomNumber % 2) == 0){
    //  stampo in caso di pari
      document.getElementById('box-red').innerHTML = randomNumber;
    } else {

    // stampo in caso di dispari
      document.getElementById('box-green').innerHTML = randomNumber;
    }
  }
);
