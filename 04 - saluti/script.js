/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito (es. "Ciao [nome]") */

const name = 'Mario';


// Dichiara la funzione qui.
const hello = greetings(name);
console.log(hello);


// Invoca la funzione qui e stampa il risultato in console

/**
 * generare stringa con saluto seguito da nome dato da variabile
 * @param {string} person
 * @returns {string}
 */
function greetings(person) {
    let hello = "Ciao " + person;

    return hello;
}


//Risultato atteso se si passa 'Mario': // ciao Mario