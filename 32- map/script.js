'use strict';

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


const map = new Map(); //создаем map, чтобы присвоить первому аргументу объекта (первому магазину) соответствующий бюджет.

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

console.log(map);       // Map(3) {
                        //     { rice: 500 } => 5000,
                        //     { oil: 200 } => 2000,
                        //     { bread: 50 } => 1500
                        //   }


console.log(map.get(shops[0]));// 5000 - получаем бюджет первого магазина - 5000

console.log(map.has(shops[0]));// true - получаем булиевое значение - существует ли объект внутри карты?

console.log(map.delete(shops[0]));// удаляет [0] свойство из объекта.
console.log(map); 

/* map.clear(shops); //полностью очищает карту, она становится пустой.
console.log(map); // {} */

console.log(map.size); //2, потому что в строчке 52 - мы удалили первое свойство. map.delete(shops[0])



