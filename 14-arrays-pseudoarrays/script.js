"use strict";

 const arr = [2, 8, 19, 7, 0, 98];
 arr.pop(); // Метод pop - удаляет последний! элемент массива.
 arr.push(18); // Метод push добавляет в конец! єелемент аргумента.
 console.log(arr);
 console.log(arr.length);

 for (let i = 0; i < arr.length; i++) { // при помощи цикла, мы перебираем все элементы и выводим в консоль.
     console.log(arr[i]);
 }


 for (let element of arr) { // при помощи цикла FOR.. OF.., мы перебираем все элементы и выводим в консоль как в цикле выше.
    console.log(element);
 }


 // For OF - работает только с массивоподобными сущностями, строками, псевдомассивами и сущностями map и set.
             // также For OF мы можем остановить с помощью brake, continue. 
             
 // For IN - рабтает с Объектами.


const line = [10, 3, 12, 9, -4, 0, 18, 9, 25, 26];
line.forEach(function(element, i, line) {
    console.log(`${i}: злемент ${element} лежит внутри массива ${line}`);
});
// задаем call back функцию.
// element - это название элемента массива.
// і - порядковый номер массива (нашего element)
// line - название массива, с которым работаем