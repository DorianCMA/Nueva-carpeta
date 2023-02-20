/*
 * Escribe un programa que muestre por consola (con un print) los
 * números de 1 a 100 (ambos incluidos y con un salto de línea entre
 * cada impresión), sustituyendo los siguientes:
 * - Múltiplos de 3 por la palabra "fizz".
 * - Múltiplos de 5 por la palabra "buzz".
 * - Múltiplos de 3 y de 5 a la vez por la palabra "fizzbuzz".
 */

// for (let i = 1; i <= 100; i++) {

//     let contador=" "

//   if(i % 3 == 0 && i % 5 == 0){

//     contador = "fizzbuzz";

//   }else if(i % 3 == 0){

//     contador = "fizz";

//   }else if(i % 5 == 0){
//     contador = "buzz";

//   }else{
//     contador = i;
//   }
    
//   console.log(contador)
// }


/*
 * Escribe un programa que reciba un texto y transforme lenguaje natural a
 * "lenguaje hacker" (conocido realmente como "leet" o "1337"). Este lenguaje
 *  se caracteriza por sustituir caracteres alfanuméricos.
 * - Utiliza esta tabla (https://www.gamehouse.com/blog/leet-speak-cheat-sheet/) 
 *   con el alfabeto y los números en "leet".
 *   (Usa la primera opción de cada transformación. Por ejemplo "4" para la "a")
 */

function leetText(){

    let text = prompt("Escribe un texto")

    leet = {"A": "4", "B": "I3", "C": "[", "D": ")", "E": "3", "F": "|=", "G": "&", "H": "#", "I": "1",
    "J": ",_|", "K": ">|", "L": "1", "M": "/\/\\", "N": " ^/", "O": "0", "P": " |*", "Q": "(_,)",
    "R": "I2", "S": "5", "T": "7", "U": "(_)", "V": "\/", "W": "\/\/", "X": "><", "Y": "j", "Z": "2",
    "1": "L", "2": "R", "3": "E", "4": "A", "5": "S", "6": "b", "7": "T", "8": "B", "9": "g", "0": "o"}
    
    text = text.toUpperCase();
    
    
    let result = ""
    for(let i = 0; i < text.length; i++){
        let chart = text[i];
        if(leet[chart]){
            result += leet[chart]
        }else{
            result += chart
        }

    }
    return result
}

console.log(leetText())

