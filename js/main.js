//variabili

let userName, userSurname, preferredColor;



// Chiedo all'utente il suo nome   

userName = prompt("Inserisci il tuo nome");


// poi chiedo il suo cognome

userSurname = prompt("Inserisci il tuo cognome");

// e poi  gli chiedo il suo colore preferito.

preferredColor = prompt("Inserisci il tuo colore preferito");

// Alla fine scrivo sulla pagina nomecognomecolorepreferito

document.getElementById("element-id").innerHTML = (userName + userSurname + preferredColor);

console.log(userName, userSurname, preferredColor);