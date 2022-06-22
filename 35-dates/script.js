'use strict';

const now = new Date(); // new - конструктор. Создаем новую дату и помещаем ее в переменную now.
                        // пустые скобки () - показывают текущую дату и время.
console.log(now); //Wed Jun 22 2022 13:53:01 GMT+0300 (Eastern European Summer Time)

const anotherDate = new Date('2022-06-22');
console.log(anotherDate); // Выведет такую же дату. Год-месяц-день-часы-минуты-секунды-миллисекунды
                          // Wed Jun 22 2022 03:00:00 GMT+0300 (Eastern European Summer Time)

const thirdDate = new Date(2022, 6, 22, 20); // 2022-07-22T17:00:00.000Z
console.log(thirdDate); 



const newTime = new Date(0); // 0 - миллисекунды. Віведет к консоль отправную точку - 1970-01-01T00:00:00.000Z
const newTimeOld = new Date(-99999); // 0 - миллисекунды. Віведет к консоль отправную точку - 1970-01-01T00:00:00.000Z

console.log(newTime);
console.log(newTimeOld); //будет показывать даты до 1970 года, с учетом миллисекунд.


//Методы

const date = new Date();
// Получение компонентов даты
console.log(date.getFullYear()); //2022
console.log(date.getMonth()); //5 - июнь в программировании - 5, а не 6 месяц.
console.log(date.getDate()); //22 - получаем определенный день.
console.log(date.getDay()); //День недели, нумерация с Воскресенья. - 3 среда
console.log(date.getHours()); //14
console.log(date.getUTCHours()); //11 - из-за разных часовых поясов.


// GetTime getTimeZoneOffset
console.log(date.getTimezoneOffset()); //-180 минут = 3 часа разницы, покажет разницу между часовым поясом и UTC 
console.log(date.getTime()); // 1655897136709 миллисекунд, которое прошло с момент 1970 года.


const dateNew = new Date();
console.log(dateNew.setHours(18, 40)); // часы, минуты
console.log(dateNew); // 2022-06-22T15:41:18.432Z в терминале, и 15:41:18 в браузере на сервере.

//get - получаем компонент
//set - устанавливаем (меняем) компонент




let start = new Date();

for (let i = 0; i < 100000; i++) {
    let some = i ** 3; // ** оператор который возводит в степень. 
} //цикл, который загрузит систему.

let end = new Date();

alert(`Cycle ended for ${end - start} mlsec`);
console.log(end - start); 