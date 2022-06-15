'use strict';

//Атрибуты defer, async


// Defer - говорит браузеру, что он должен загружать страницу, скрипт не будет блокировать страницу, и загружает скрипт в фоновом режиме.
// скрипты с атрибутом Defer срабатывают только тогода, когда ДОМ дерево построено польностью.
// В HTML вставляем атрибут defer  ->
// <script defer src="./script.js"></script>


const p = document.querySelectorAll('p');
console.log(p); // в консоли видим объект
// {
//     "0": {},
//     "1": {}
// }


// Async - асинхронный скрипт. Загружается, как только до него доходит страничка.
//загружается в фоновом режиме, но запускается как только он был загружен. Ниого не ждет. Как бы сам по себе, автономный и независимый.


//Асинк скрипт не должен заисеть от ДОМ структуры. Не должен зависеть от других скриптов.

// -----------

// Добавляем скипт самостоятельно.

function loadScript(src) {
    const script = document.createElement('script');

    script.src = src;
    script.async = false; //убрали асинхронность
    document.body.append(script); 
}

loadScript('./test.js');
loadScript('./new.js');



// https://developers.google.com/youtube/iframe_api_reference