'use strict';

//Events - событие - это сигнал от раузера, когда что-то произошло.

// простой список событий - https://oddler.ru/blog/i63
// https://developer.mozilla.org/ru/docs/Web/Events 

// Событие можно навешивать в сам HTML код, добавив в атрибут событие onclick='()'

/* <button onclick="alert('Click me')" id="btn">Нажми меня</button> */



// Не очень ок. Но так тоже можно создавать события.
const btnF = document.getElementsByTagName('button')[1];// выбрали Вторую кнопку по тегу селектора button.
btnF.onclick = function() {
    alert('You clicked me');
}; 
// 1. создали переменную для второй кнопки.
// 2. навесили на переменную метод onclick
// 3. функция для метода onclick выводит на экран, после нажатия на кнопку - алерт.



//Подходящий способ навешивания событий. Можно присваивать 2 и более событий элементу.
const btn = document.querySelector('button');// выбрали ПЕРВУЮ кнопку по селектору button.
btn.addEventListener('click', function() {
    alert('Tap me FIRST');
});

btn.addEventListener('click', function() {
    alert('Tap me SECOND');
});

btn.addEventListener('mouseenter', (event) => {
    console.log(event.target); // target - получаем кусок html нашего объекта. <button id="btn" style="background: blue;">Нажми меня</button>
    event.target.remove();

    console.log('You hovered me');
    btn.style.background = 'blue';
});


let i = 0;
const deleteElement = (e) => {
    console.log(e.target);
    i++;
    if (i == 1) {
        btnThird.removeEventListener('click', deleteElement);//Добавив эту строку мы удалим обработчик и ивент срабатывать не будет.
        console.log('del');
    }
};

const btnThird = document.getElementsByTagName('button')[2]; // Выбрали 3ю кнопку.
btnThird.addEventListener('click', deleteElement);


 
const overlay = document.querySelector('.overlay'),
      btnOver = overlay.querySelector('button');

btnOver.addEventListener('click', (e) => {
    console.log('added 4th btn');
});

const delElem = (e) => {
    // console.log(e.currentTarget);
    console.log(e.target);
    console.log(e.type);
};
btnOver.addEventListener('click', delElem);
overlay.addEventListener('click', delElem);

//Всплытие событий - это когда обработчик срабатывает на самом вложенном элементе, а поднимается наверх, по иерархии, до самого РОДИТЕЛЯ.

//Отмена стандартного поведения браузера.
const link = document.querySelector('a');
link.addEventListener('click', (event) => {
    event.preventDefault();// Отмена стандартного поведения перехода по ссылке.

    console.log(event.target);//<a href="https://www.youtube.com/">https://www.youtube.com/</a>
});

// Как навесить события на все! элементы. С помощью цикла ForEach.
const btns = document.querySelectorAll('button');
btns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        prompt('Yes or not');
    }, {once: true}); //Сработает один раз, потому что добавлен третий (булиевый) аргумент - {once: true}
                        // https://developer.mozilla.org/ru/docs/Web/API/EventTarget/addEventListener
});