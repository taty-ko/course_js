"use strict"; //use modern appriach of coding


//          создаем Объект obj, составной тип данных.
const obj = {
    name: "Taty",
    age: 30,
    city: "Kharkiv",
    married: false
};
//console.log(obj.name); //через точку обращаемся к свойству name объекта obj -> Taty
//console.log([obj.name, obj.city]); //квадратные скобки мы создаем массив из елементов obj -> [ 'Taty', 'Kharkiv' ]


//           Alert, Confirm, Prompt (все данные, которые приходит через эти операторы - это string!)
                                    //проверяется только в браузере, через терминал не увидим их, потмоу что
                                    //это методы, которые взаимодействвуют с пользовтаелем через модальные окна брауезра.      

//alert('Alexandr'); - выскакивает просто модальное окно, которое о чем-то предупреждает.

//const result = confirm('Are you sure about that?');
//console.log(result); // сохраняет результат и отображает его в консоли, который мы кликнули в модальном окне браузера. true - ok, false - cancel

//const answer = prompt("How old are you?");
//console.log(typeof(answer)); //определяем какой тип данных выводится из консоли пользователем.
 
//const answerNumber = +prompt ("How much times per day do you brush your teeth?", " ");
//console.log(typeof(answerNumber)); //знак + перед prompt говорит, что мы строку (по умолчанию) переопределяем как number.

const test = +prompt("give me a nubmer", "");
console.log(test + 10);

const answers = [];
    /* answers[0] = prompt("What is your name", "");
    answers[1] = +prompt("How old are you", "");
    answers[2] = prompt ("Are you married", "");
    console.log([answers]); //выводит массив ответов, которые дал подьзователь в борауезере.

    document.write(answers); //Метод document.write - выводит строку, массив, данные на главную страницу до момента ее полной загрузки. 
                            //Как только страница в брауезре прогрузилась, то этот метод перетирает весь DOM и выводит на главный экран те данные, 
                            //которые ему задали (строка, число, массив). Это очень утсревший метод */
console.log(typeof(answers));
console.log(typeof(null)); // Выдает object - распространенная ошибка. Null - это отдельный тип данных