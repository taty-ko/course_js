"use strict";

// Cycles

// While - работает, пока условие не выполнится.
let num = -4;

while (num <= 10) {
    console.log(num);
    num++;
} // пока условие num <= 10 не выполнится, цикл не останвится и будет выводить инкримент.



// Do - в первую очередь проверяет условие и только потом перебирает значения до того момента, 
        //пока условие не выполнится. И в конце, можно выйти из цикла.

let cost = 100;

do {
    console.log(cost); // Do - это призыв к действию.
    cost++;
}
while (cost <=110); // проверка нашего условия, что переменная Cost равна или меньше 110. Выведет ряд чисел от 100 до 110 вкл.



// For - цикл с тремя аргументами (условиями).
for (
    let i = 1; // задаем переменную.
    i >= 7; // задаем условие, конечное, при достижении котрого цикл остановит свою работу. 
    i++ // шаг цикла, что будет происходить каждый раз при прохождении цикла. Чаще всего  - инкримент.
    ) {
        console.log(i); // в фигурных скобочках  - віполняется какое-то действие.
    }


let tea = 10;   
for (let i = 1; i <=7; i++) {
    console.log (tea);
    tea++;
} // цикл работает 6 раз с  переменной tea. Т.е будет выводиться результат 10-16 (включая значение самой переменной tea).


//  Break - Цикл прервем тогда, когда достигнем како-того значения, которе мы укажем, не дожидаясь конца.
for (let a = 1; a < 10; a++) {
    if (a === 8) {
        break;
    }
    console.log(a);
} // как только наша переменная а, дошла до 7, то цикл прервался и вівед значения от 1 до 7. и Дальше не пошел.


// Continue - оператор выбросит из цикла значение, но пройдет цикт до конца и віведет все заняение.
for (let b = 1; b < 10; b++) {
    if (b === 3) {
        continue; // цикл пропустит значение "3" из ряда 1-9. 
    }
    console.log(b);
}
