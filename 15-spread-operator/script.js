"use strict";

 let a = 5;
     b = a;

     b = b + 5;

console.log(a); // ЗАМЕНА РАБОТАЕТ С ПРИМИТИВНЫМИ ТИПАМИ ДАННЫХ, строки,числа.
console.log(b);


//Тоже самое сделаем с объектами
const obj = {
    a: 5,
    b: 1
};

const copy = obj; // передача ССЫЛКИ.
copy.a = 10;

console.log(copy); // Передача объекта (массива, функции) происходит по ссылке.
console.log(obj);