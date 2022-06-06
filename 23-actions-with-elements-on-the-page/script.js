'use strict';

const box = document.getElementById('box'),
      btns = document.getElementsByTagName('button'),
      circles = document.getElementsByClassName('circle'),
      hearts = document.querySelectorAll('.heart'),
      oneheart = document.querySelector('.heart');

console.dir(box);   //Выводим в коноь все возможные методы, которые можно делать с контейнером вох.

box.style.backgroundColor = 'blue';
box.style.width = '500px'; // эти стили записываются в инлайн, что перебивает те стили, которые записаны в каскаде style.css


//когда работаем с отдельными елементами, единичными.
btns[1].style.borderRadius = '100%';
circles[0].style.backgroundColor = 'yellow';


//хотим применить свойство ко всем елементам превдомассива.
// циклом перебираем каждый элемент массива, и задаем ему в каждой новой итерации свойство.
//таким образом, пока идет цикл до конца (по длине масссива) у нас добавляются стили элементам.
for(let i = 0; i < hearts.length; i++) {
    hearts[i].style.backgroundColor = 'yellow';
    hearts[i].style.borderRadius = '40px';
}

//лучше использовать ForEach
hearts.forEach(item => {
    item.style.height = '150px';
    item.style.backgroundColor = 'black';
});

//добавляем свойство в style.css, текстом.
box.style.cssText = 'background-color: green; width: 500px';