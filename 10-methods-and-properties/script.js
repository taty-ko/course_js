"use strict";


// Свойство length определеяет длину строки, иликоличество элементов внутри массива.
const str = 'teSt'; // https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/String
const arr = [1, 100, 4];
console.log(str.length);
console.log(arr.length);

console.log(str[2]); // to show the 's', 0 - t, 1 - e, 2 - s.

console.log(str.toUpperCase()); //TEST
console.log(str.toLowerCase()); //test


///Метод поиска кусочка строки-слова, и  ее позиция. Поиск ПОДСТРОКИ

let fruit = 'Some fruits';
console.log(fruit.indexOf('fruits')); // 5, started from the 5th plase. 
console.log(fruit.indexOf('q')); // -1, it means 'q' doesn't exist in the text.


// Slice
const logg = "Hello world";
console.log(logg.slice(6, 11)); //start from 6th, end - 11th charakters. -> world
console.log(logg.slice(6)); //till the end.-> world
console.log(logg.slice(-5, -1)); // form -5 (form the left) till -1 (from right) -> world.

/* console.log(logg.substring(6, 11)); //start from 6th, end - 11th charakters. -> world // the same with slice.
 */
console.log(logg.substr(6, 5)); // cut numbers (5) o fcharacters from 6th position.

// Integers
// Math. - в консоли, чтобы узнать все возможные методы для чисел.

console.dir(Number);// открывается перечень всех возможных методов с Integer.

let num = 12.2;
console.log(Math.round(num)); // округление до 12.

const test = "12.2px";
console.log(parseInt(test)); //переведет строку в число, и округлит число.
console.log(parseFloat(test)); // вернет значение с плавающей точкой.

let newNum = test.slice(0, 4);
console.log(`Ми відрізали рх, і залишили лише число: ${newNum} `);
