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

console.log(Object.keys(options)); //Выводим массив из свойств Объекта, которые находятся на "верхнем" уровне  name, width, height, colors.
console.log(Object.keys(options).length); //Выводим длину массива, количество элементов в массиве.
/* console.log(options.colors.border); // стучимся к конкремному значению свойства.

delete options.height; // удалили свойство height из Объукта.
console.log(options);
 */


// For in - перебор. 
//Если мы хотим перебрать свойства Объекта, то используем цикл for.

/* for (let key in options) { // key - это значение свойств, ключей. options - это наш объект, где будем перебирать.
                          // Цикл будет работать столько раз, сколько свойств у Объекта. 
    console.log(`Property of ${key} is ${options[key]}`); 
 }} */

let counter = 0; //для создания счетчика количества свойств объекта.
for (let key in options) { // key - это значение свойств, ключей. options - это наш объект, где будем перебирать.
    // Цикл будет работать столько раз, сколько свойств у Объекта. 

    if (typeof (options[key]) === 'object') {
        for (let i in options[key]) {
            console.log(`Property of ${i} is ${options[key][i]}`);
            counter ++; //суммируем кол-во циклов.
        }
    } else {
        console.log(`Property of ${key} is ${options[key]}`);
        counter ++; //суммируем кол-во циклов.
    }
}
console.log(counter); //выводим общее число цикловвсех свойств и подсвойств в Объекте Options.
/* console.log(options["colors"]["border"]); //достучаться до значение black можно и так. */

let counterJ = 0;
for (let j in options) {
    counterJ ++;
}
console.log(counterJ); // считаем количество свойств объекта Options.

/*        -----        ------       ------       -------      */
const kitchen = {
    name: 'cake',
    sugar: 200, 
    salt: 10,
    butter: 150,
    milk: 0.5,
    tools: {
        knife: 'sharp',
        spoon: 'big',
        plate: 'deep',
    },
    makeTest: function () { // КЛЮЧ-свойство и определяем его значение как функцию, чтобы создать свой кастомный метод.
        console.log('check this'); // проверочное сообщение.
    }
};
kitchen.makeTest(); // вызываем функцию. То есть мы создали сами свой метод.

// Деструктуризация
const {knife, spoon, plate} = kitchen.tools; // деструктурировали мелкие свойства в отдельную переменную.
console.log(knife);