'use strict';

const box = document.getElementById('box'),
      btns = document.getElementsByTagName('button'),
      circles = document.getElementsByClassName('circle'),
      hearts = document.querySelectorAll('.heart'),
      oneheart = document.querySelector('.heart')/* ,
      wrapper = document.querySelector('.wrapper') */;

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


//APPEND - Создаем элементы самостоятельно и помещаем в конец родительского элемента 
const div = document.createElement('div');
div.classList.add('black');


document.body.append(div);// берем родителя body и в самый низ, добаляем нужный нам конетйнер. В нашем случае это div c классом .black


// елемент APPLE помещаем вниз, вовнутрь родителя элемента wrapper.
const apple = document.createElement('div');
apple.classList.add('apple');
apple.style.backgroundColor = '#0ae70a';
apple.style.width = '20px';
apple.style.height = '20px';
apple.style.borderRadius = '50%';
apple.style.display = 'inline-block';
document.querySelector('.wrapper').append(apple); // мы не выносили wrapper в отдельную переменную.
/* const text = document.createTextNode('Here I am :)')
 */

//помещаем элемент в начало родителького элемента - PREPEND
document.querySelector('.wrapper').prepend(apple); // мы не выносили wrapper в отдельную переменную.
document.body.prepend(apple);


// before, after
hearts[1].before(apple);//Добавляем элемент apple ПЕРЕД вторым элементом.
hearts[1].after(apple);//Добавляем элемент apple ПОСЛЕ второго элементом.

/* hearts.insertBefore(apple, hearts[2]);//устаренвший метод, вставить APPLE в элемент HEARTS перед 3тим элементом
 */
// Удаление элементов - REMOVE
circles[1].remove(); //Удалим 2й кружечек
/* circles.removeChild(hearts[1]); удаляем 2й кружечек
 */

hearts[0].replaceWith(circles[0]); //1й элемент hearts заменяем на 1й элемент circles.

//Метод innerHTML
/* div.innerHTML = 'Hello, Inner HTML'; */
div.innerHTML = '<h1>Hello, Inner HTML<h1/>'; // Можно вставить HTML структуру.

/* div.textContent = 'Hello'; // Вставляет только текст, структуру HTML вставить нельзя. */

div.insertAdjacentHTML('beforebegin', '<h2>Eat-JS-love, repeat<h2/>');// перед элементом.