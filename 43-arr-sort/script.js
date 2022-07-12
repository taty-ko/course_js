"use strict";

// filter
//фильтрует элементы внутри массива

const names = ['Taty', 'Ann', 'Ivan', 'Mo', 'Elisaveta'];


//фильтруем элементы и получаем все имена, которые меньше, чем 5 символов. И это будет создан новый массив.
const shortNames = names.filter(function(name) {
    return name.length < 4;
});

console.log(shortNames); //[ 'Ann', 'Mo' ]




//map
// берем текущий массив и меняем как-то каждый его элемент как нам нужно и на выходе получеам новый, измененный массив.

const answers = ['IVan', 'TATy', 'jANE', 'Hanna', 'orlando', 'BORIS'];
//хотим привести всe слова к нижему регистру.
const result = answers.map(item => {
    return item.toLowerCase();

    //(item => item.toLowerCase());
});
console.log(result); //[ 'ivan', 'taty', 'jane', 'hanna', 'orlando', 'boris' ]



//every/some
//some - берет массив и перебирает его, и если какой-то єлемент подходит по условиям, то он нам вернет TRUE, если нет, то FALSE.
const some = [4, 'qwerty', 'zxcv', 'o'];
console.log(some.some(item => {
    return typeof(item) === 'number' // если айтем массива - равен числу, то вернется тру
})); //true

const every = [4, 'qwerty', 'zxcv', 'o'];
console.log(every.every(item => {
    return typeof(item) === 'number' // если ВСЕ! айтемы массива - числа, то вернется тру. В противном случае FALSE.
})); //false

const abc = [1, 4, 0];
console.log(abc.every(item => {
    return typeof(item) === 'number' // если ВСЕ! айтемы массива - числа, то вернется тру. В противном случае FALSE.
}));// true




//reduce
//собиарет массив или схлопывает его в одно едное целое

const arr = [4, 5, 0, 1, 9, 12];

// sum   current
// 0        4
// 4        5
// 9        0
// 9        1
// 10       9
// 19       12
// 31

//быстро получить сумму всех элементов
const res = arr.reduce((sum, current) => {
    return sum + current;
});
console.log(res);// 31



const stringArr = ['apple', 'bob', 'water'];
const results = stringArr.reduce((sum, current) => {
   /*  return sum + ', ' + current; //сложение строк */
   return `${sum}, ${current}`;
});
console.log(results);// apple, bob, water




const obj = {
    taty: 'person',
    alexander: 'person',
    dog: 'animal',
    cat: 'animal'
};

const newArr = Object.entries(obj)
.filter(item => {
    return item[1] === 'person'; //если втрой элемент масисва строго равен person, то возвращаем этот массив
})
.map(item => {
    return item[0]; //возвращаем только первые элементы массивов
});

console.log(newArr); // filter - Массив, где второй элемент  - person [ [ 'taty', 'person' ], [ 'alexander', 'person' ] ]
                    // map - [ 'taty', 'alexander' ]

 //const newArr = Object.entries(obj)
                    //получаем массив массивов
                    // [
                    //     [ 'taty', 'person' ],
                    //     [ 'alexander', 'person' ],
                    //     [ 'dog', 'animal' ],
                    //     [ 'cat', 'animal' ]
                    // ]

