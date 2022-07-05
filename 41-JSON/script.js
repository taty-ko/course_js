'use strict';

const person = {
    name: 'Taty',
    age: '30',
    phone: '+380123456789',
    parents: {
        mother: 'Nata',
        father: 'Volodymyr'
    }
};

console.log(JSON.stringify(person)); // {"name":"Taty","age":"30","phone":"+380123456789"} чтобы мжно было джейсон отправить на сервер.

// записали все сущности в двойные кавычки " ",  Метод  stringify()



// --- --- --- --- ---
// Кейс, когда с сервера приходит JSON. Метод parse()

console.log(JSON.parse(JSON.stringify(person)));
//{ name: 'Taty', age: '30', phone: '+380123456789' }

const clone = JSON.parse(JSON.stringify(person));
clone.parents.mother = 'Natalia';
console.log(person);
console.log(clone);
