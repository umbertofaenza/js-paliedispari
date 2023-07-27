# PALINDROMA

## Traccia

- Chiedere all'utente di inserire una parola
- Creare una funzione per capire se la parola inserita è palindroma

## Svolgimento

- Chiedo all'utente di inserire una parola
- Creo una funzione con:
  - variabile che conterrà la parola al rovescio
  - ciclo con contatore che parte dalla fine (lunghezza) della parola fino a 0, e che ad ogni giro aggiunge la lettera corrente alla variabile sopra
  - return della variabile parola rovesciata
- Salvo la parola al rovescio in una variabile che invoca la funzione
- **SE** la parola al rovescio è uguale alla parola inserita dall'utente

  - stampo: la parola è palindroma

  **ALTRIMENTI**

  - stampo: la parola non è palindroma
