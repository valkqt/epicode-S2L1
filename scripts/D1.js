/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

console.log('I principali tipi di dato in JavaScript sono:')
console.log("Stringa: caratteri di qualsiasi tipo rinchiusi fra due apici)")
console.log('Numero: numeri interi o con la virgola (float)')
console.log('null: un valore nullo')
console.log('undefined: un valore non definito o sconosciuto')
console.log('boolean: ammette solo due valori: true o false')

console.log('ci sono anche altri tipi di valori non inclusi in questo elenco.')


/* ESERCIZIO 2
 Crea una variable chiamata "name" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

let name = "Andrea";
const realName = "Pepe";
console.log(name);
console.log(realName);

/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

let sumTest = 12 + 20

let num1 = 12
let num2 = 20
let sumTest2 = num1 += num2

console.log(sumTest2)
// darà 32

console.log(sumTest);
// darà 32

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

let x = 12;
console.log(x)
// darà 12

/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "name" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/

name = "Plofi";
console.log(name);

try {
  realName = "Wojak";
} catch (TypeError) {
  console.log(
    "Cercare di cambiare una variabile assegnata con const darà sempre TypeError e interromperà lo script"
  );
}

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

let fore = 4 - x

console.log(fore);
// darà -8

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/

let name1 = "john";
let name2 = "John";

console.log(name1 === name2);
// darà false

console.log(name1.toLowerCase === name2.toLowerCase);
// darà true

// ESERCIZIO 8 (EXTRA)
// Conversione tra gradi Farenheit e Celsius

let celsiusTemp = prompt('Inserisci i gradi celsius')
alert(celsiusTemp + ' gradi celsius sono ' + (celsiusTemp * (9/5)+32) + ' gradi Farenheit!')