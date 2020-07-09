var email = prompt ("Inserisci la tua email");
var lista = ["uno@gmail.com", "due@gmail.com", "tre@gmail.com", "quattro@gmail.com", "cinque@gmail.com"];
var accesso = false;

for (var i = 0; i < lista.lenght; i++){
  if (email == lista[i]) {
    accesso = true;
  }
}

if (accesso == true){
  alert("Benvenuto!");
} else {
  alert("email non trovata");
}
