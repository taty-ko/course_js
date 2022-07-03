'use strict';

// Оператор Rest (...) объединяет отдельные элементы в один массив.
// Оператор Spread разбивает массив на отдельне элементы

const log = function(a, b, ...rest) {
    console.log(a, b, rest);
};
log('basic', 'next', 'new', 'cool', 'big'); // basic next [ 'new', 'cool', 'big' ]




function calcOrDouble(number, basis = 2) {
    console.log(number * basis);
};
calcOrDouble(5);