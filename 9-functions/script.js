"use strict";

// Functions

//Function declaration - написаны просто, и вызывать их можно в любой последовательности. Прогружаются в  первую очередь.

function showFirstMessage () { //в () - мы передаем аругменты функции. в {} - выполняются действия
    console.log('Alexandr, hello!');
}

showFirstMessage(); //Обращаемся к нашей функции, фактически вызываем ее. Потому что 
                    //пока она в строке 5 - она ничего не выполняет.

let global = 10;  
let num = 50;          // глобальная переменная.
function showMessage (text) {
    console.log(text);
    let num = 10;  // локальная переменная, существует только в пределеах этой функции. 
    global = 4;    // перезаписали значение глобальной переменной.
} 
showMessage('another text');
console.log(global);   // выведет на экрн перезаписанное значение переменной global.
console.log(num);      // выведет значение глобальнйо переменной, num = 50. Потому что console.log за пределами {}


     // Замыкание - это сама функция со всеми переменніыми, которіе ей доступны.

     let zam = 10;
     function test () {
         console.log(zam); // выведет переменную на уровень выше  - zam = 10.
     }
     console.log(zam);


function calc(a, b) {
    return(a + b);
}
console.log(calc(2, 6));
console.log(calc(12, 1));
console.log(calc(1, 3));


function ret (){
    let num = 100;
    return (num);
}

const anotherNum = ret();
console.log(anotherNum);


//Function expression - создается тогда, кода до нее доходит поток кода. Вы звать можно только после объявления.

const logger = function() {
     console.log('hello');
}; // обязательно ; в конце.
logger();

  // Стрелочные функции 

  //const sum = (a, b) => { return a + b }; // такая же запись, как и ниже.
  const sum = (a, b) => a + b; // запись, кога функция в одну строчку.
  console.log(sum(4, 9));

  


  //Блок, который увеличивает шрифт при наведении на строук мышкой.




  document.querySelector('h1').addEventListener('mousemove', fontSizeIncr);

  let size = window.getComputedStyle(document.querySelector('h1'), null).getPropertyValue('font-size');
  let font = size.substring(0, 2);


  function fontSizeIncr() {
    font++;
    document.querySelector('h1').style.fontSize = font +'px';
  }

  document.querySelector('h1').addEventListener('click', () => {
    font--;
    document.querySelector('h1').style.fontSize = font +'px';
  });
  
  