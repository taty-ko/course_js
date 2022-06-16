'use strict';


// У карты kеy могут быть какие- угодно (массивы, функции, объекты)
// У объекта ключами могут быть только строки

//Порядок свойств в картах такой, как мы добавляем сами.
//У объекта нет четкого порядка

//При создании пустой карты, в ней ничего не будет содержаться.
// В пустом объекте могут содержатсьянаследуемые свойства через прототип

//Карты легко перебирать


//Размер карты легко получить через свойство size()
// Чтоб получить количество элементов внутри объекта, то его сначала надо трансформировать его в массив и только потмо получит его длину.


/* const user = {
    4: 'Alex',
    surname: 'Smith',
    birthday: '28/04/1994',
    showMyPublicData: function() {
        console.log(`${this.name} ${this.surname}`);
    }
};
console.log(user);

console.log(typeof(Object.keys(user)[0]));// получаем тип данных первого ключа нашего объекта user
                                          // ключ 4 - string
 */

const shops = [
    {rice: 500},
    {oil: 200},
    {bread: 50}
];              // Объект с магазинами

const budget = [5000, 2000, 1500]; // массив с бюджетами для каждого из магазинов.


const map = new Map([[
    {paper: 400}, 8000
]]); //создаем map, чтобы присвоить первому аргументу объекта (первому магазину) соответствующий бюджет.
        // а также добавляем еще олин магазин (массив объекта с бюджетом) {paper: 400}, 8000

shops.forEach((shop, i) => {
    map.set(shop, budget[i]);
});                             //присваиваем каждому магазину shop свой соответствующий бюджет  - i

/* map.set(shops[0], 5000); // shops[0] - первый аргумент - первый магазин, первое значение объекта.
                         // 5000 - второй аргумент, установили бюджет магазина.
map.set(shops[1], 2000);
map.set(shops[2], 1500); */

/* map.set(shops[0], 5000)
      .set(shops[1], 2000)
      .set(shops[2], 1500); */

console.log(map);       // Массив Массивов  Map(3) {
                        //     { rice: 500 } => 5000,
                        //     { oil: 200 } => 2000,
                        //     { bread: 50 } => 1500
                        //   }




//console.log(map.get(shops[0]));// 5000 - получаем бюджет первого магазина - 5000

// console.log(map.has(shops[0]));// true - получаем булиевое значение - существует ли объект внутри карты?

// console.log(map.delete(shops[0]));// удаляет [0] свойство из объекта.
// console.log(map); 

// /* map.clear(shops); //полностью очищает карту, она становится пустой.
// console.log(map); // {} */

// console.log(map.size); //2, потому что в строчке 52 - мы удалили первое свойство. map.delete(shops[0])


console.log(map.keys());




for (let shop of map.keys()) {
    console.log(shop);
} // при помощи перебора получаем каждый отдельный магазин с товарами. 
                        // {paper: 400}
                        // script.js:69 {rice: 500}
                        // script.js:69 {oil: 200}
                        // script.js:69 {bread: 50}



            // Получение кючей
const goods = [];
for (let shop of map.keys()) {
    goods.push(Object.keys(shop)[0]);
}         
console.log(goods); //условно говоря, мы вывели ключи ключей.



            // Получение значений
for (let price of map.values()) {
    console.log(price);
} // получили массив всех значений каждого из ключей


 // entries - получаем массив с массивами
 for (let price of map.entries()) {
     console.log(price);
 }

//Разделить массив на 2 отбельные части
 for (let [shop, price] of map.entries()) {
    console.log(price, shop);
 }                          //  8000 {
                            //     "paper": 400
                            // }
                            //получили бюджет и к нему прилагающийся магазин к key, value

// Перебор карты с помощью forEach
map.forEach((value, key, map) => {
    console.log(key, value);
});                  



//////// как перевести Объект в формат карты (массив с массивами)


const user = {
    name: 'Alex',
    surname: 'Smith',
    birthday: '28/04/1994',
    showMyPublicData: function() {
        console.log(`${this.name} ${this.surname}`);
    }
};

const userMap = new Map(Object.entries(user));
console.log(userMap);// получаем карту их текущего Объекта.

// Из карты делаем объект (из массива с массивами делает реальный объект)
const newUserObject = Object.fromEntries(userMap);
console.log(newUserObject);
