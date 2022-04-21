"use strict"; 

// знак +, котрый стоит перед чем-то - это Унарный знак плюса, а не сложения.
console.log('Hello,' + ' Taty'); //конкатинация строк -> Hello, Taty
console.log('hello' + '5');//конкатинация строк -> hello5
console.log('5' + '10');//конкатинация строк -> 510
console.log(+'5' + +'10');//конкатинация строк -> 15 (знак + превратил строку в число)
console.log(5 + +'10');//конкатинация строк -> 15 (знак + превратил строку в число)


// Инкремент - увеличение на одну еденицу. ++
// Декремент - умиенишение на одну еденицу. --

let incr = 10,
    decr = 10;

incr++; // постфиксная запись - сначала сохраняет старое значение и после его увеличивает.
decr--;
/* 
            console.log(incr++); //10
            console.log(decr--); //10 */


//   ++incr // префиксная запись 
//   --decr

/* 
            console.log(++incr); //11
            console.log(--decr); //9 */

console.log(incr);
console.log(decr);
console.log(+incr + +decr);

console.log(5%2); //1 - % означает остаток от деления.

// = -> оператор присваивания, а == -> оператор сравниения (true/false), 
// === -> строгое равенство, когда одирн элемент обязательно должен ровняться другому.
console.log(2*9 == 9); // false
console.log(2*9 === 8); // false
console.log(2*9 == '18'); // true


// && - оператор И. Работает, когда два выражения true. И то, и то. 
// || - оператор ИЛИ. Работает, когда хотя бы один из элементов true. 
let isChecked = true,
    isClosed = true;
console.log(isChecked && isClosed); // возвращает true, только в том случае, когда оба оператора true!!иначе - false.

let сhecked = true,
    сlosed = false;
console.log(сhecked || сlosed); //true, когда хотябы одирн из аргументов true!

    // ! - оператор отрицания. Меняет значение наоборт. 
    // true -> !fals
    console.log(!сhecked || сlosed); //false, потому что оба аргумента false. Оператор ! превратил true на false


// Порядок математических операций
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Operators/Operator_Precedence

console.log(4 + 2 * 2 === 8); //true
console.log(4 + 2 * 2 !== 8); //false (не не равно 8, а у нас равно)
console.log(4 + 2 * 2 != 8); //false, потому что равно 8, а не не равно.


