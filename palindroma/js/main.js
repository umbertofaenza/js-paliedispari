// Chiedo all'utente di inserire una parola
const userWord = prompt("Scrivi una parola");

// Creo una funzione con:
function reverseString(string) {
  // variabile che conterrà la parola al rovescio
  let reversedString = "";

  // ciclo con contatore che parte dalla fine (lunghezza) della parola fino a 0, e che ad ogni giro aggiunge la lettera corrente alla variabile sopra
  for (let i = string.length - 1; i >= 0; i--) {
    reversedString += string[i];
  }

  // return della variabile parola rovesciata
  return reversedString;
}

// Salvo la parola al rovescio in una variabile che invoca la funzione
const reversedWord = reverseString(userWord);

// stampo le due parole per chiarezza
console.log("Parola inserita: " + userWord);

console.log("Parola al rovescio: " + reversedWord);

// SE la parola al rovescio è uguale alla parola inserita dall'utente
reversedWord == userWord
  ? // stampo: la parola è palindroma
    console.log("Palindroma!")
  : // ALTRIMENTI stampo: la parola non è palindroma
    console.log("Non palindroma.");
