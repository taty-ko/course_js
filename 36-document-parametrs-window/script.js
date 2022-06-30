'use strict';

const box = document.querySelector('.box'),
      btn = document.querySelector('button');


const width = box.clientWidth; // метод, позволяет выделить ширину, элемента без паддинга.
const height = box.clientHeight;
console.log(width, height); // 400 350 (с box-sizing: border-box,)
                            // 420 370 (без box-sizing: border-box).
                            // мы можем получить высоту и ширину модальног окна.


const widthO = box.offsetWidth; // метод, позволяет выделить ширину, элемента c паддингом.
const heightO = box.offsetHeight;
console.log(widthO, heightO); // размеры визимой части. (Если есть скролл, то ширина/высота его не учитываются )


const widthScroll = box.scrollWidth; // метод, позволяет выделить ширину, элемента юез учета полосы прокрутки, но с учетом скролла.
const heightScroll = box.scrollHeight;
console.log(widthScroll, heightScroll); // 400 1334


btn.addEventListener('click', () => {
/* box.style.height = box.scrollHeight + 'px'; //подставляем стиль, которыј берет высоту всего скролла, и подставляет к нему px, таким образом мы поменяли высоту элемента.
 */
    console.log(box.scrollTop);// сколько текста уже прочитано в элементе box.
});


//Получение координат
console.log(box.getBoundingClientRect().right); //получили коордианту right (с левой границы экрана до правой).588.5



//computed style - мы можем получать при помощи скриптов.
const style = window.getComputedStyle(box);
console.log(style);// большой объект элемента box.
console.log(style.display);// block - конкретное значение display

console.log(document.documentElement.clientWidth); //777 - пикселей ширина окошка со скроллом.
console.log(document.documentElement.scrollTop); //