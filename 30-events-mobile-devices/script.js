'use strict';
// https://caniuse.com/?search=touch

// https://hammerjs.github.io/ готовое решение взаимодействия с єлементом на мобильном устройстве.

//Из-за отсутствия мыши, у нас появились другие события на мобильных устройствах - тапы.

// touchstart - событие сразатыввет, когда мы касаемся элемента.

//touchmove - палец начинает двигаться по єлементу

//touchend - когда палец оторвался от элемента - событие выполнилось.

//touchenter - когда ведем пальуем по экрану и наскальзываем на єлемент.
                // срабатывает, как только палец зашел на границы (пределы) этого элемента.

//touchleave - противоположное 'touchenter', когда палец продолжил скользить, и ушел за пределы элемента (но не оторвался, а именно покинул поле)

//touchcancel - возникает, когда точка соприкосновения больше не регестрируется (когда палец выходит за пределы барузера.

window.addEventListener('DOMContentLoaded', () => {
    const box = document.querySelector('.box');
    box.addEventListener('touchstart', (e) => {
        e.preventDefault(); // Всегда желательно отменять стандартное поведение барузера

        console.log('Start');

        console.log(e.touches);// выведем в консоль список в виде ОБЪЕКТА, взаимодействий

        console.log(e.targetTouches); //покажет пальцы

    });

    box.addEventListener('touchmove', (e) => {
        e.preventDefault(); // Всегда желательно отменять стандартное поведение барузера

        console.log('e.changedTouches[0].pageX'); //Выведет на экран список координат, пока мы двигаем палец. Таким образом можно настроить свайп, когда палец попадает на одни кооринаты - то переключить картинку.
    });

    box.addEventListener('touchend', (e) => {
        e.preventDefault(); // Всегда желательно отменять стандартное поведение барузера

        console.log('Touch end');
    });
} );


//touches - выдает список всемх пальцев, которые могут взаимодействовать с экреном

//targetTouches - показывает, какие пальцы взаимодействуют с элементом.

//changedTouches - показывает список пальцев, которые участвуют в текущем событии.