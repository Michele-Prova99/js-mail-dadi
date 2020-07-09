// var email = prompt ("Inserisci la tua email");
// var lista = ["uno@gmail.com", "due@gmail.com", "tre@gmail.com", "quattro@gmail.com", "cinque@gmail.com"];
// var accesso = false;
//
// for (var i = 0; i < lista.lenght; i++){
//   if (email == lista[i]) {
//     accesso = true;
//   }
// }
//
// if (accesso == true){
//   alert("Benvenuto!");
// } else {
//   alert("email non trovata");
// }

var mail = prompt ("inserisci la tua email")
var mailList = ["uno@gmail.com", "due@gmail.com", "tre@gmail.com", "quattro@gmail.com", "cinque@gmail.com"]

var trovata = false;

for (var i = 0; i < mailList.length; i++) {
    if (mail == mailList [i]) {
        trovata=true;
    }
}

if (trovata == true) {
    alert ("Benvenuto!")

} else {
    alert ( "email non trovata :(")
}
