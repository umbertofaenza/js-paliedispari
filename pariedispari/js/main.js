// Chiedo all'utente pari o dispari
const userChoiceInput = prompt("Pari o dispari?");

// Chiedo all'utente un numero da 1 a 5
const userNumInput = parseInt(prompt("Inserisci un numero da 1 a 5"));

// Creo una funzione che generi un numero da un minimo ad un massimo
function getRandomNumber(min, max, lastIncluded = true) {
  if (lastIncluded) max++;

  const randomNumber = Math.floor(Math.random() * (max - min)) + min;
  return randomNumber;
}

// Invoco la funzione con parametri 1 e 5 e salvo il numero generato in una variabile
const randomNumber = getRandomNumber(1, 5);

// Dichiaro una variabile somma e sommo il numero inserito dall'utente e quello generato
let numbersSum = userNumInput + randomNumber;

// Creo una funzione che stabilisca se un numero è pari o dispari
function oddOrEven(number) {
  number % 2 == 0 ? "pari" : "dispari";
}

// Invoco la funzione con parametro somma
const numbersSumValue = oddOrEven(numbersSum);

// Stampo tutto per chiarezza
console.log("Scelta utente: " + userChoiceInput);
console.log("Numero utente: " + userNumInput);
console.log("Numero computer: " + randomNumber);
console.log("Somma: " + numbersSum);

// SE l'input dell'utente è uguale al valore della somma
userChoiceInput == numbersSum
  ? // stampo utente vincitore
    console.log("Utente vince")
  : // ALTRIMENTI stampo computer vincitore
    console.log("Computer vince");
