"use strict";

 let a = 5,
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


// Передача объекта by Value, по значению. (Поверхнстная копия, только те свойства, что были на верхнем уровне, в родителе)
function makeCopy(mainObj) {
    let objCopy = {};

    let key;
    for (key in mainObj) {
        objCopy[key] = mainObj[key];
    }
    return objCopy;
}

const numbers = {
    a: 2,
    b: 5,
    c: {
        x: 0,
        y: 9,
        z: -4
    }
};

 const copyNumbers = makeCopy(numbers);
 console.log(copyNumbers); // выводим скопированный объект.

 copyNumbers.b = 100; // переопределили значение свойства b в скопированном объекте.
 console.log(copyNumbers); // теперь значение b будет рано 100. { a: 2, b: 100, c: { x: 0, y: 9, z: -4 } }
 console.log(numbers); // а исходный объект не поменялся. { a: 2, b: 5, c: { x: 0, y: 9, z: -4 } }

 

 //    Метод: Object assign - когда хотим поместитьв объект еще какое-то свойство.

 const add = {
     d: 14,
     e: 99,
     f: {
         w:8
     }
 };

 console.log(Object.assign(numbers, add)); 
 // Object.assign - вызіваем метод добавления одного объекта в другой.
 // в Аргументы добавляем (numbers, add) - (тот куда будет добавлено свойство, тот ЧТО будет добавлено).

const clone = Object.assign({}, add); // соединим пустой объект с объектом add.
console.log (clone);
clone.d = 40;
console.log (add);
console.log (clone);


// Копия массива
const array = ['a', 'b', 'c', 'd'];
const copyArr = array; // скопировали массив array, и все что будет меняться в copyArr будет менять и в array.
const newArr = array.slice(); // Метод SLICE позволяет создать новый массисв, скопированный.

console.log(array);
console.log(copyArr);
console.log(newArr);

newArr[0] = "letter";
console.log(newArr); // здесь слово letter появится ТОЛЬКО в массиве newArr, а array будет по прежнему с 'a'. Потому что newArr - это копия, полноценная (поврхностная).

copyArr[0] = "word";
console.log(copyArr);
console.log(array); // здесь первый [0] элементмассива поменяется в array и в copyArr. Потому что это не копия, просто переназванный массив.
