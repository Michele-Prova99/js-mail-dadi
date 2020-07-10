// Chiedi all’hobbit la sua email,
// controlla che sia nella lista di chi può accedere,
// stampa un messaggio appropriato sull’esito del controllo.

var email = prompt ("Inserisci la tua email hobbit!")
var lista = ["frodo@contea.com", "sam@gcontea.com", "bilbo@contea.com", "peregrino@contea.com", "meriadoc@contea.com"]

var accesso = false;

for (var i = 0; i < lista.length; i++) {
    if (email == lista[i]) {
        accesso = true;
    }
}

if (accesso == true) {
    alert ("TU PUOI PASSARE!")

} else {
    alert ("TU NON PUOI PASSARE!")
}
