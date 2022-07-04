'use strict';

//1
function showThis(a, b) {
    console.log(this);
    function sum() {
        console.log(this)
        return a + b;
    }
    console.log(sum());
}
showThis(4, 5);

//2
const obj = {
    a: 20,
    b: 15,
    sum: function() {
        console.log(this)
        function shout() {
            console.log(this);
        }
        shout();//undefined, потому что контекст вызова не относится к объекту, а к функции shout.
    }
};
obj.sum();

//3
function User(name, id) {
    this.name = name;
    this.id = id;
    this.human = true;
    this.hello = function() {
        console.log(`Welcome, ${this.name}`);
    };
}
let taty = new User('Taty', 30);



// 4. Ручное присвоение контекста.
function sayName(surname) {
    console.log(this);
    console.log(this.name + surname);
}

const user = {
    name: 'John'
};

sayName.call(user, 'Smith');
sayName.apply(user, ['Smith']);

//создает новую функцию
function count(num) {
    return this * num;
}

const double = count.bind(2); // 2 передается в функцию count, вместо this.
                              // поєтому в doube мы можем передавать один аргумент, который хотим удвоить, умножить на 2 (на this).
console.log(double(3)); //6
console.log(double(10)); //20

// 1. Обычная функция this = window, но если стоит use strict, то this = underfined
// 2. Контекст this у методов Объекта, это будет сам Объект.
// 3. Функции-конструкторы, через new. This в конструкторах и классах - это ноый экземпляр объекта.
// 4. Ручная привязка this через методы call, apply и bind(который создает новую функцию).


//Практика с кнопкой.


const btn = document.querySelector('button');

btn.addEventListener('click', function() {
    console.log(this); //мы обращаемся ко всему элементу, на который нажали. Тоже самое что и eventTarget
    this.style.backgroundColor = 'yellow';
});

/* btn.addEventListener('click', () => {
    console.log(this); // 
    this.style.backgroundColor = 'yellow'; // цвет будет uderfined, потому что у стрелочной функции контекста нет. и он underfined.
}); */


btn.addEventListener('click', (e) => {
     
    e.target.style.backgroundColor = 'yellow'; // вместо this, в трелочной функции использует event.target
});

// у стрелочной функции нет своего контекста вызова, она всегда будет его брать у своего родителя.


const object = {
    num: 5,
    sayNumber: function() {
        const say = () => {
            console.log(this); //из-за того, что функция стрелочная, то this ссылается на объект object.
        };
        say();
    }
};
object.sayNumber();



const doubble = a => a * 2; //если действие функции простое, то можно его записать без скобочек и без return.
                              //если стрелочная функция принимает только один аргумент, то может быть записана без скобок.

console.log(doubble(4)); //8 (2*4)


// - - - - - - - - - - - -  Go IT

//Меняем контент внутри конопки

let counter = 0;

document.querySelector('.b-1').addEventListener('click', changeContent);

function changeContent() {
    console.log(counter);
    console.log(this);
    this.textContent = counter;
    counter++;
}

// call, позволяет вызывать функцию и епредавать необходимые аргументы
changeContent.call(document.querySelector('.b-1'));

function callFunc(counter) {
    console.log(counter);
    console.log(this);
    this.textContent = counter;
}

document.querySelector('.b-3').addEventListener('click', () => {
    counter++;
    callFunc.call(document.querySelector('.b-2'), counter);
});


function sumNum (a, b) {
    this.innerHTML = a + b;
}
// При нажатии на кнопку 3, в поле запускается функция sumNum и выводит сумму чисел.
//а call позволяет в качестве аргумента подставить объект, с которым мы взаимодействуем
document.querySelector('.b-3').addEventListener('click', () => {
   sumNum.call(document.querySelector('.numbers-field-call'), 2, 10); // аргумент - строка
   sumNum.apply(document.querySelector('.numbers-field-apply'), [2, 10]);  // аргумент - массив данных.
});

//Bind - слздает новую функцию и привязывает контекст, типа this в тело.

const bindFunc =  changeContent.bind(document.querySelector('.numbers-field-bind'));

document.querySelector('.b-4').addEventListener('click', bindFunc);


const sumNumBind = sumNum.bind(document.querySelector('.numbers-field-bind-with-arguments'), 10, 30);

sumNumBind(10, 30);//40 Аргументы можно указывать в bind или в аргументе функции.


// Частичные функции или функции с переопределенным аргументом (частичные вычисления).
function sumNumThree (a, b, c) {
    console.log(arguments);
    this.innerHTML = a + b + c;
}

const sumNumFunc = sumNumThree.bind(document.querySelector('.numbers-field-bind-with-arguments'));

document.querySelector('.b-5').addEventListener('click', () => {
    sumNumFunc(10, 20, 1);
});


// Стрелочкая функция не имеет THIS
const arrowFunc = () => {
    console.log(counter);
    console.log(this);
    this.textContent = counter;
    count++;
};

document.querySelector('.b-2').addEventListener('click', arrowFunc);






