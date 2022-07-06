'use strict';

//AJAX - Asynchronous JavaScript and XML

const inputUAH = document.querySelector('#uah'),
      inputUSD = document.querySelector('#usd');

inputUAH.addEventListener('input', () => {

    // нужно сделать запрос на сервер, чтобы подтянуть курс конвертации
    const request = new XMLHttpRequest(); //конструктор, который создает новый объект.

    request.open('GET', './js/current.json'/* , async, login, password */); //метод open() помогает собрать настройки для будущего запроса.
                                    // method - метод (get, post..)
                                    // url - ссылка на файлик, путь к серверу. ссылка по которой будем делать запрос.
                                             // формируем путь относительно файла index.html
                                    // async - синхр - идет по порядку, ждет выполнение каждой функции. Асинк - не зависит от выполнения других скриптов и не блокирует основной код.
                                    // login
                                    // password
    request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
    request.send();


    // свойства объекта 
    // status: 404, 0, 200, 403 - https://ru.wikipedia.org/wiki/%D0%A1%D0%BF%D0%B8%D1%81%D0%BE%D0%BA_%D0%BA%D0%BE%D0%B4%D0%BE%D0%B2_%D1%81%D0%BE%D1%81%D1%82%D0%BE%D1%8F%D0%BD%D0%B8%D1%8F_HTTP
    // statusText: статус от сервера
    // response: ответ от сервера, который задал бекенд разработчик
    // readyState https://www.w3schools.com/xml/ajax_xmlhttprequest_response.asp


    // события 
    // readystatechange - событие отслеживает статус готовности нашего запроса в данный текущий момент
    // load - срабатывает, когда запрос полностью загрузился и мы получили результат.

    request.addEventListener('readystatechange', () => {
        //узнаем статус готовности запроса. Если он равен 4, статус done
        // и при этом статус реквеста равен === 200,
        // то запрос успешно завершился. все ОК.
        if (request.readyState === 4 && request.status === 200) {
            console.log(request.response); //получили результат и вывели его в консоль. 
                                            // т.е при нажатии на поле инпут, в консоли мы увидим
                                            // {
                                            //     "current": {
                                            //         "usd": 35
                                            //     }
                                            // }

            // создадим новый объект  - это будет расперсеный ∆жейсон.
            //и в переменную data мы получим обычный js объект, а не джейсон
            const data = JSON.parse(request.response);       
            
            inputUSD.value = (+inputUAH.value / data.current.usd).toFixed(2); // toFixed(2) - метод оставляет 2 знака после запятой
        } else {
            inputUSD.value = 'Something goes wrong. Try it later.'
        }
    });

    request.addEventListener('load', () => {
        if (request.status === 200) {
            console.log(request.response); //получили результат и вывели его в консоль. 
                                            // т.е при нажатии на поле инпут, в консоли мы увидим
                                            // {
                                            //     "current": {
                                            //         "usd": 35
                                            //     }
                                            // }

            // создадим новый объект  - это будет расперсеный ∆жейсон.
            //и в переменную data мы получим обычный js объект, а не джейсон
            const data = JSON.parse(request.response);       
            
            inputUSD.value = (+inputUAH.value / data.current.usd).toFixed(2); // toFixed(2) - метод оставляет 2 знака после запятой
        } else {
            inputUSD.value = 'Something goes wrong. Try it later.'
        }
    });

} );