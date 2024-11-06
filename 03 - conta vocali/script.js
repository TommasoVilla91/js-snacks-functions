/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = 'javascript';


// Dichiara la funzione qui.
const letterFilter = vowels(word);
console.log(letterFilter);


// Invoca la funzione qui e stampa il risultato in console

/**
 * individuare vocali 
 * @param {string} letter
 * @returns {string}
 */
function vowels(letter) {

    let letterFilter = "";

    for (let i = 0; i < letter.length; i++) {
        if (letter[i] === `a` || letter[i] === `e` || letter[i] === `i` || letter[i] === `o` || letter[i] === `u`) {
            letterFilter += letter[i] + " ";
        }
    }
    return letterFilter
}

//Risultato atteso se si passa 'javascript': 3 (a, a, i)