"use strict";


//Цикл

function factorial(n) {
    let result = 1;
    while(n) {
        result *= n--;
    }
    return result;
}

console.log(factorial(4));

//Рекурсия

function factirialRec(n, result) {
    result == result || 1;
    if (!n) {
        return result;
    } else {
        return factirialRec(n-1, result*n);
    }
}
console.log(factirialRec(4, 1));