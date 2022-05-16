"use strict";

 const solder = {
    health: 400,
    armor: 200,
    sayHi: function() {
        console.log('Hello!');
    }
 };

 const den = {
    health: 100
 };

 den.__proto__ = solder; // устаревший метод прототипирования. говорим, что у Дена есть все, что у Solder, только с его личным отличием.
 console.log(den); // { health: 100 }
 console.log(den.armor); // 200. Т.е Armor взяли от Solder., потому что у объекта Den брони нет. Но мы создали протопип Солдата.
den.sayHi(); // Hello!


// Новый подход прототипирования.

Object.setPrototypeOf(den, solder);  //Прототимп ддя Дена от солдата. Den - для кого мы будем создавать прототип. Solder - прототип чего мы будем создавать для den.

const mike = Object.create(solder); // создали новый прототип Солдера - Майк.
console.log(mike); // {}
console.log(mike.health);//400
console.log(typeof(mike)); // Object