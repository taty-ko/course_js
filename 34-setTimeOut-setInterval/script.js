'use strict';


const btn = document.querySelector('.btn');
let timerId,
    i = 0; //создаем переменную для итератора, счетчика


function myAnimation() {
    const elem = document.querySelector('.box');
    let position = 0;

const id = setInterval(frame, 10);

    function frame() {
        if (position == 300) {
            clearInterval(id);
        } else {
            position++;
            elem.style.top = position + "px";
            elem.style.left = position + "px";
        }
    }
}

btn.addEventListener('click', myAnimation);


// btn.addEventListener('click', () => {
//     // timerId = setTimeout(logger, 2000);
//     timerId = setInterval(logger, 500);
// });

// clearInterval(timerId); // в консоли ничего не появится, потому что мы сбросили сетТаймаут.

// function logger() {
//     if (i === 3) {
//         clearInterval(timerId); // в консоли ничего не появится, потому что мы сбросили сетТаймаут.
//     }
//     console.log('three');
//         i++;
//     };


// let id = setTimeout(function log() {
//     console.log('2nd exapmle');
//     id = setTimeout(log, 500);
// }, 500); // рекурсивный подход.

/* const timerId = setTimeout(); // принимает ту функцию, которая запустит скрипт, через определенное время
 */
/* const timerOne = setTimeout(function(text) {
    console.log(text);
}, 2000, 'one');

const timerTwo = setTimeout(function() {
    console.log('two');
}, 3000); */

/* const timerThree = setTimeout(logger, 4000);
 */

/* const timerId = setTimeout(logger, 5000); 
 */

/* clearInterval(timerId); // в консоли ничего не появится, потому что мы сбросили сетТаймаут.
 */ 



    