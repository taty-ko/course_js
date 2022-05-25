"use strict";

// to String
console.log(typeof(String(null)));// команда String превратила null в строку.
console.log(typeof(String(9)));// string


// Concat (когда что-то складываем со строкой). При сложении со строкой, всегда получается строка.
console.log(typeof(5 + '')); // Складываем 5 и пустую строку.


// Реальный кейс с изменением типа данных
// Хотим добавить к ссылке переход на 5й пункт.
const num = 5;
console.log('https://vk.com/catalog/' + num); //https://vk.com/catalog/5

const fontSize = 26 +'px';
console.log(fontSize); // 26px


// to Number
console.log(typeof(Number('6')));// number, обязательно в кавычках, как строку.

// Унарный плюс.
console.log(typeof(+'6')); // добавляем знак сложения к строке (в кавычках).

//parseInt
console.log(typeof(parseInt('15px', 10))); // добавляем знак сложения к строке (в кавычках). 10 - означает десятичная система.

// Практический пример.
let answ = +prompt('Hello', '');
console.log(answ);


// to Boolean

0, '', null, undefined, NaN; // нуль, пустая строка и тд - всегда false!

let switcher = null;
if (switcher) {
    console.log('Working');
}// ничего не происходит, потому что switcher принимает значение null - ничего, или false.

switcher = 1;
if (switcher) {
    console.log('Working');
}// консоль выдает working.., потому что switcher принимает какое-то значение, т.е true.


//Boolean
console.log(typeof(Boolean('6'))); //bollean
console.log(typeof(Boolean(''))); //bollean

//!!
console.log(!!'987');//true
console.log(!!'');//false

console.log(typeof(!!'65'));//boolean
console.log(typeof(!!''));//boolean
