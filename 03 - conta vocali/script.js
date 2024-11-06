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
        if ('aeiou'.includes(letter[i])) {      // controllare che le vocali ci siano nella parola da analizzare
            letterFilter += letter[i] + ", ";    // sistemare le vocali divise da virgola + spazio
        }
    }
    return letterFilter
}

//Risultato atteso se si passa 'javascript': 3 (a, a, i)