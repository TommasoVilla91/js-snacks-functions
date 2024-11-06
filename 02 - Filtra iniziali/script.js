/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];


// Dichiara la funzione qui.
const namesFilter = specLet(names);
console.log(namesFilter);

// Invoca la funzione qui e stampa il risultato in console

/**
 * individuare elementi con la stessa lettera iniziale
 * @param {string} arrayNames
 * @returns {string}
 */
function specLet(arrayNames) {

    const namesFilter = [];

    for (let i = 0; i < arrayNames.length; i++) {
        if (arrayNames[i][0] === "A") {     // controlla che A sia la prima lettera
            namesFilter.push(arrayNames[i]);
        }
    }
    return namesFilter
}


//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]