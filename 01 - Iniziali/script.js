/* Scrivi una funzione che accetti un array di nomi e restituisca nuovo un array con le iniziali di ogni parola dell'array fornito */

const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];


// Dichiara la funzione qui.
const capLet = [];

// Invoca la funzione qui e stampa il risultato in console

/**
 * raccogliere prime lettere degli elementi dell'array
 * @param {string} arrayNames
 * @returns {string}
 */
function firstLet(arrayNames) {
    
    for (let i = 0; i < arrayNames.length; i++) {
        capLet.push(arrayNames[i][0]);  // prendere prima lettera del nome e aggiungo lettera all'array
    }
}

firstLet(names)
console.log(capLet);


//Risultato atteso: ["A", "L", "M", "A", "G", "A"]