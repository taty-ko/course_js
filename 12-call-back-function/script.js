"use strict";

//Callback - это функция, которая выполняется после того, как другая функция (зависимая) завершила свое выполнение.


function first() {
    // do something
    setTimeout(function() {
        console.log(1);
    }, 1500); // установили задержку работы этой функции на 1500мс.
}

function second() {
    console.log(2);
}

first(); // вызвали первую функцию.
second(); // вызвали вторую.

// Шаблон функции Callback

function learnJS(lang, callback) {
    console.log(`I learn ${lang}`);
    callback(10, 5); // callback функция выполнится строго после того, как в консоль выведется `I learn ${lang}`
                     // аргументы 10, 5, нужны для фенкции math (a, b). 
}

learnJS('JS', function(){
    console.log('I am on my way to rich the goal!');
}); 


function done() {
    console.log('I have learnd JS');
}
learnJS('JS', done);


function math(a, b) {
    let sum = a + b;
    console.log(sum);
}

learnJS('JavaScript', math);