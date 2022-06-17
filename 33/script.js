'use strict';
const btns = document.querySelectorAll('button');
console.log(btns[0].classList.length); // 2 - на первом элементе 2 класса
console.log(btns[0].classList.item(0)); // blue - позволяет получить класс, который находится под определенным индексом, в нашем случае первый элемент.
console.log(btns[0].classList.item(1)); // some - позволяет получить класс, который находится под определенным индексом, в нашем случае второй элемент.
console.log(btns[0].classList.add('red', 'anotherClass')); // добавляем класс red к первому элементу. Можно добавлять несколько классов.
console.log(btns[0].classList.remove('blue')); // blue - у первого элемента удаляем класс.
console.log(btns[0].classList.toggle('blue')); // true - добавляем, если класса нет, false - удаляем - если есть.


 if (btns[1].classList.contains('red')) {
     console.log('red');  // если селектор содержит класс red, то консоль выведет  red.
 } else {
     console.log('zhopa'); //если класса ред в селекторе нет, то віведет жопа.
 }

// Назначаем вторй кнопке класс Red и проверяем условия - есть ли там ред или нет.
 console.log(btns[1].classList.add('red'));
 if (btns[1].classList.contains('red')) {
     console.log('You added it already');
 } else {
     console.log('It was removed, please use classList.add("red") and repit it again');
 }



 // Пример гамбургер меню

 btns[7].addEventListener('click', () => { //когда я кикаю на последнюю кнопку, то
    // if (!btns[7].classList.contains('red'))  {// проверяем у 7й кнопки, если НЕТ(!) класса red, то мы его добавляем.
    //     btns[7].classList.add('red');
    // }  else {                               // а если класс на кнопке есть - то удали его.
    //     btns[7].classList.remove('red');
    // }

    btns[7].classList.toggle('red'); // добавляем, если нет, едаляем если есть - по клику на кнопку.
 });

 //Метод toggle содержит такую же логическую конструкцию, как и if, else


 //className - устарело. Выводит названия класса в строку. И чтобы потом с ними работать, иху нужно будет преобразовать как-то.




 // Делигирование событий - работам с родительским элементом, чтобы менять поведение потомков.
 
 const wrapper = document.querySelector('.btn-block');
 wrapper.addEventListener('click', (event) => {
    if  (event.target && event.target.classList.contains('blue'))
/*        (event.target && event.target.matches('button.blue')) // совпадает с кнопкой с классом blue
 */                    { //event.target - не родительский элемент, а дочерний. Т.е ри клике не на серую зону, а на кнопочку в ней. Сработает событие.
        
        
        console.log('privit'); // /* event.target.tagName == 'BUTTON' */  ПРи клике на все кнопки с классом 'blue' у нас срабатывает скрипт
    }    
 });

// // С помощью перебора forEach добавили событие клика на каждую кнопку родителя. И теперь при клике на каждую кнопку будет срабатывать privit
// btns.forEach(btn => {
//     btn.addEventListener('click', () => {
//         console.log('privit');
//     });
// });

 const btn = document.createElement('button');
 btn.classList.add('blue');
 wrapper.append(btn); // У нас появилась blue кнопка в конце и по клику на него срабатывает privit
