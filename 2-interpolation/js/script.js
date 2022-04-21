"use strict"; 

const category = 'toys';

//console.log('https://someurl/' + category + '/' + '5');//просихзодит конкатинация строк - https://someurl/toys/5.

console.log(`https://someurl/${category}/5`); //с мопощью бектиков, обратных кавычек мы объединяем строки https://someurl/toys/5


const user = "Taty";
alert(`Hello, ${user}`); //бектики и через $ обращаемся к переменной user.