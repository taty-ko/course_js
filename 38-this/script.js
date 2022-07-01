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



