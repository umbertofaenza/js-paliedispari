// Chiedo all'utente pari o dispari
const userChoiceInput = prompt("Pari o dispari?");

// Chiedo all'utente un numero da 1 a 5
const userNumInput = prompt("Inserisci un numero da 1 a 5");

// Creo una funzione che generi un numero da un minimo ad un massimo
function getRandomNumber(min, max, lastIncluded = true) {
  if (lastIncluded) max++;

  const randomNumber = Math.floor(Math.random() * (max - min)) + min;
  return randomNumber;
}

// Invoco la funzione con parametri 1 e 5 e salvo il numero generato in una variabile

// Dichiaro una variabile somma

// Sommo il numero inserito dall'utente e quello generato

// SE la somma divisa per 2 dà resto 0

// il numero è pari
// do alla somma valore "pari"
// ALTRIMENTI

// il numero è dispari
// do alla somma valore "dispari"
// SE l'input dell'utente è uguale al valore della somma

// stampo utente vincitore
// ALTRIMENTI

// stampo computer vincitore
