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

function performOperation(secondInteger, secondDecimal, secondString){
    var secondIntergerConv = parseInt(secondInteger);
    var secondDecimalConv = parseFloat(secondDecimal);
    var secondIntConv = parseInt(secondDecimalConv);
    console.log(secondIntergerConv +  4);
    console.log(4.0 +  secondDecimalConv);
    console.log('HackerRank', secondString);
}

function main() {
    const secondInteger = readLine();
    const secondDecimal = readLine();
    const secondString = readLine();
    
    performOperation(secondInteger, secondDecimal, secondString);
}
