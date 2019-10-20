'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });
    
    main();    
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the vowelsAndConsonants function.
 * Print your output using 'console.log()'.
 */
function vowelsAndConsonants(s) {
    var vowels = ''
    var consonants = ''
    for (let char of s){
        if (char == 'a' || char == 'i' || char == 'u' || char == 'e' || char == 'o'){
            vowels+=char
        }
        else{
            consonants+=char
        }
    }
    for(let i=0; i<vowels.length; i++) console.log(vowels.charAt(i))
    for(let i=0; i<consonants.length; i++) console.log(consonants.charAt(i))
    
}


function main() {
    const s = readLine();
    
    vowelsAndConsonants(s);
}