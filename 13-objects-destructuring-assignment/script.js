"use strict";

//Objects  - ассоциативные массивы. (это массив данных с более детальный описанием свойств в нем.)

const options = {
    name: 'test', // name - ключ, 'test' - значение.
    width: 1024,
    height: 1024,
    colors: {
        border: 'black',
        bg: 'white'
    }
};

/* console.log(options.colors.border); // стучимся к конкремному значению свойства.

delete options.height; // удалили свойство height из Объукта.
console.log(options);
 */


// For in - перебор. 
//Если мы хотим перебрать свойства Объекта, то используем цикл for.

/* for (let key in options) { // key - это значение свойств, ключей. options - это наш объект, где будем перебирать.
                          // Цикл будет работать столько раз, сколько свойств у Объекта. 
    console.log(`Property of ${key} is ${options[key]}`); 
 } */


 for (let key in options) { // key - это значение свойств, ключей. options - это наш объект, где будем перебирать.
    // Цикл будет работать столько раз, сколько свойств у Объекта. 

    if (typeof(options[key]) === 'object') {
        for (let i in options[key]) {
            console.log(`Property of ${i} is ${options[key][i]}`); 
        } else {
        console.log(`Property of ${key} is ${options[key]}`); 
    }
}}

/* console.log(options["colors"]["border"]); //достучаться до значение black можно и так. */