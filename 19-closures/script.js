"use strict";

// Closures - замыйкания функции.
/* let number = 5;

function logNumber() {
    let number = 9; debugger
    console.log(number); // 9, потому что функция ссылается на свою внутреннюю переменную.
}

number = 6;
 
logNumber(); debugger */


let numb = 5;

function logNumber() {
    console.log(numb); debugger // 6 - функция получила значение глобальной переменной, которая объвлена позже.
}

numb = 6;
logNumber(); debugger

numb = 18;
logNumber(); debugger
//Lexical environment - лексическое окружение - внутренний технический объект, который не видно.


// Создаем счетчик