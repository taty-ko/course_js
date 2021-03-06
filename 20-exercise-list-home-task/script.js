"use strict";
// Инкремент
let x = 5;
console.log(x++); // 5 - потому что сначала мы выведем значение х, без инкримента. 
console.log(x++); // 6 - а потом уже х уже выведется в инкременте.
console.log(x); // 7 - потому что наш х стал 6.

let m = 6;
console.log(++m); //7 - а такой записи, ПРЕФИКСНАЯ ФОРМА, сразу будет инкримент.


// Конкатинация массива с другими типами данных. Пустой массив - всегода строка!
console.log([] + false - null + true);// NaN (значение при выполнении не математических операций.)
console.log(typeof([] + false));// string. Пустой массив - это СТРОКА! string.
console.log([] + false - null);// NaN, потому что не мы не можем вичитать из строки что-то.


// Последовательное присваивание, справа налево.
let y = 1;
let z = y = 2; // эту строку нужно читать справа налево. 2 присвоили у, у присовили пременную х.
console.log(z); //2


//Приведение типов данных. Строчный тип данных из-за пустого массива.
console.log([] + 1 + 2);// Строка - 12 - concat. Пустой массив, это строка, поэтому пустая строка + 1 + 2 = 12. Строка.
console.log(1 + 2);// Число - 3, числовой тип данных.


//[0] - это обращение к элементу под индексом 0.
console.log("1"[0]); //1
console.log("1oi89"[3]); //8
console.log("poi 9ik"[3]); //"" white space
console.log("poi 9ik"[4]); //9


//Логический ператор И (&&), используется в логических конструкциях, 
//чтобы убедиться, что И то выражение верно, И то тоже верно.
// Оператор И всегда запинается на ЛЖИ, false. 
// 2 - true, 1 - true, null - false (всегда! ничего). Поэтому дальше считывание аргументов не пройдет
// считается, 2, 1, а на null будто бы сработает return и вернется значение null.


// Логический оператор ИЛИ (||).
// Всегда запинается на ПРАВДЕ, true, и дальше не обрабатывает аргументы.
console.log(2 && 1 && null && 0 && undefined); // null
console.log(0 && 1 && null && 0 && undefined); // 0 - потому что 0 - это ложь.
console.log(null && 0 && 1 && 0 && undefined); // null - потому что null - это ложь.
console.log(undefined && 2 && 1 && 6 && null ); // undefined
console.log(typeof(undefined)); // undefined, потому что отдельный тип данніх - undefined


// Нужно сравнить 2 выражения, равны ли они между собой (=== - лператор сравнения на равенство.)
//Динамическая типизация: !! (два знака НЕ), превращают выражение в булиновое.
// т.е "!!(1 && 3)" - это уже булиновое выражение
console.log(!!(1 && 3) === (1 && 3));// false, не равны.
console.log(typeof(!!(1 && 3)));// boolean
console.log('boolean' === (1 && 3)); // false.
 
// Таблица приоритетов операторов - https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Operators/Operator_Precedence#table
// Приоритет у логического И выше, чем у ИЛИ. Поэтому этот оператор считается быстрее, первым. 
console.log(null || 2 && 3 || 4); //3, вернет последнее правдиваое значение. 2 - первое, 3 второе, его и вернет. 
console.log (null || 3 || 4); //  3. Оператор ИЛИ запинается на ПРАВДЕ, поэтому
// null - false, 3 - true, потому консоль выведет true - 3. 
console.log (3 || 4); //  3. Потому что оператор Или запинается на правде, а 3 - это true.

console.log (2 || 1 || null);  // 2 - Самое первое значение уже True. Поэтому его  и выведет консоль.


// == - нестрогое равенство, === - строгое равенство.
// 
let a = [1,2,3];
let b = [1,2,3];
console.log(a==b); // false


//Преобразования типов данных.
console.log(+'infinity');// NaN
console.log(typeof(+'inf')); //number
console.log(+'3'); //3
console.log(typeof(+'3')); //number
console.log(+3); //3
console.log(typeof(+3)); //number


//Сравнение строк
console.log('Ежик' > 'яблоко');// false (посимвольное сравнение). Особенности юникода.


//
console.log(0 || '' || 2); // Логический оператор ИЛИ спотыкается на правде, 2  - true.
console.log(1 && '' && 2); // Логический оператор И спотыкается на ЛЖИ, '', пустая строка - ЛОЖЬ  - false.
console.log(0 || '' && 2);//''
console.log(0 || '');// ''