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


// Другие примеры.

let t = 0;
function f1() {
    t++;
    console.log(t);

    if (t === 100) return;
    f1();
}
/* f1(); */

// Цикл
function f2 () {
    let out = '';
    for (let i = 1; i <= 30; i++) {
        out += i + ' ';
    }
    console.log(out);
}
f2();


//Рекурсия

let i = 0;
let out = '';
function f3() {
    i++;
    out += i + ' ';

    if(i >= 30) return;
    f3();
}
f3();console.log(out);


