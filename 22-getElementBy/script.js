'use strict';

// DOM - Document Object Model

// by ID
const box = document.getElementById('box'); // document - это обёект брауезра, и его отсследить можно только в консоли брауера.
console.log(box);


// by TagName

const buttons = document.getElementsByTagName('button'); //получаем не один эдлемент, а пвсевдо массив ВСЕХ елементов button на странице .document
                                                            //псвевдомассив - это массив, но без методов
console.log(buttons); 
                        /* 
                        [[Prototype]]: HTMLCollection{
                            "0": {},
                            "1": {},
                            "2": {},
                            "3": {},
                            "4": {}
                        } */

const btn = document.getElementsByTagName('button')[1];// положили в константу вторую кропку.
console.log(btn);   //  <button>2</button>

const btns = document.getElementsByTagName('button'); // Выбираем все btn на cтраничке
console.log(btns[3]);//выбрали конкретно 4ю кнопку их массива кнопок, который сделали выше.


// by Class
const crcls = document.getElementsByClassName('circle');
console.log(crcls); //выведем массвио кружков.
console.log(crcls[1]); //выбрали конкретно 2й кружок из массива кружков.


// querySelectorAll - ВСЕ
const hearts = document.querySelectorAll('.heart');
console.log(hearts);// [[Prototype]]: NodeList
                    //Массив клементов с селектором класса .heart

hearts.forEach(item => {
    console.log(item); //выводим поочредно элементы массива hearts, с помощью метода For each.
});


// querySelector - Выводит в консоль только ПЕРВЫЙ елемент с таким селекторм.
const oneHeart = document.querySelector('.heart');
console.log(oneHeart); //получили первый элемент

const btnOne = document.querySelector('button');
console.log(btnOne);

const crclOne = document.querySelector('.circle');
console.log(crclOne);