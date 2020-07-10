// Generare un numero random da 1  a 6, sia per il giocatore sia per il computer
// Stabilire il vincitore, in base a chi fa il punteggio più alto.

// Il giocatore tira il dado ed esce fuori un numero da 1 a 6
var giocatore = Math.floor(Math.random() * 6) + 1;

// Il computer tira il dado ed esce fuori un numero da 1 a 6
var computer = Math.floor(Math.random() * 6) + 1;

// Creo una variabile risultato
var risultato = "PARITÀ"

// Con una istruzione condizionale stabilisco chi ha vinto
if (giocatore > computer) {
  risultato = "YOU WIN!!!";
} else if (giocatore < computer) {
  risultato = "YOU LOSE!!!";
}

// Scrivo il risultato della partita
document.getElementById("partita").innerHTML = risultato;
