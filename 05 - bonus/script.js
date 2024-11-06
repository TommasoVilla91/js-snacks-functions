/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito. 
Il saluto deve essere :
buongiorno se è mattina (fino alle 13), 
buon pomeriggio se è pomeriggio (fino alle 17) 
e buonasera se è sera (oltre le 17)
*/

const name = 'Mario';


// Dichiara la funzione qui.
const greeting = hello(name);
console.log(greeting);


// Invoca la funzione qui e stampa il risultato in console

/**
 * in base all'ora attuale genero un saluto appropriato seguito dal nome nella variabile
 * @param {string} person
 * @returns {string}
 */
function hello(person) {
    const time = new Date().getHours(); // per sapere ora corrente

    let greeting;

    if (time < 13) {
        greeting = `Buongiorno ${person}`;
    } else if (time < 17) {
        greeting = `Buon pomeriggio ${person}`;
    } else {
        greeting = `Buonasera ${person}`;
    }

    return greeting;

}

//Risultato atteso se si passa 'Mario' alle 18: // Buonasera Mario.