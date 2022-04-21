"use strict";

// Условия всегда превращают тип данных в булиевое значение, чтоб проверить на true/false.
if (0) {
    console.log('OK'); // 1 - всегде true. Поэтому консоль выдает OK.
} else {
    console.log('ERROR'); // 0 - всегда false. Поэтому консоль выдает ERROR.
}


const num = 50;

if (num < 49) {
    console.log('error');
} else if (num > 100 ) {
    console.log('слишком много');
} else {
    console.log('ok');
}

// Ternary operator - Тернарный оператор (когда есть три аргумента). унарный - когда аргумента 2.

(num == 50) ? console.log('ok') : console.log('error'); // ? если выражение верно, то выполняем первое, а если false - то второе.


// Switch - своего рода модификация IF. Конструкция Switch всегда используется для СТРОГОГО соответствие (=).

const swch = 95; // Numbers
switch (swch) {
    case 99:
        console.log('incorrect');
        break;
    case 100:
        console.log('incorrect');
        break;
    case 10:
        console.log('a little');
        break;
    case 90: 
        console.log('correct!');
        break;
    default: 
    console.log('try it one more time');
    break;
}

const swchString = 'my string'; // Srting
switch (swchString) {
    case 'my string one':
        console.log('incorrect');
        break;
    case 'my string two':
        console.log('incorrect');
        break;
    case 'my':
        console.log('a little');
        break;
    case 'my string': 
        console.log('correct!');
        break;
    default: 
    console.log('try it one more time');
    break;
}