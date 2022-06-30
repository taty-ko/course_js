'use strict';

const num = new Number(3);
console.log(num);

const fo = new Function(3);
console.log(fo);

//Функция-конструктор для создания новых пользователей.
function User(name, id) {
    this.name = name;
    this.id = id;
    this.human = true;
    this.hello = function() {
        console.log(`Welcome, ${this.name}`);
    };

}
// Прототим позволяет добавить меток ко всем потомкам. Которые были созданы после объявления этого метода.
User.prototype.exit = function() {
console.log(`User ${this.name} left the system`);
} ;


const taty = new User('Taty', 30);
const alex = new User('Alexandr', 28);

taty.exit();

taty.hello();
alex.hello();

console.log(taty);
console.log(alex);

