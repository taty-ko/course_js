"use strict";

let x = 5;
console.log(x++); // 5 - потому что сначала мы выведем значение х, без инкримента. 
console.log(x++); // 6 - а потом уже х уже выведется в инкременте.
console.log(x); // 7 - потому что наш х стал 6.

let m = 6;
console.log(++m); //7 - а такой записи, ПРЕФИКСНАЯ ФОРМА, сразу будет инкримент.

console.log([] + false - null + true);// NaN

let y = 1;
let z = y = 2;
console.log(z); //2

console.log([] + 1 + 2);// 12 - concat

console.log("1"[0]); //1

console.log(2 && 1 && null && 0 && undefined); // null

console.log(null || 2&&3 || 4); //3

let a = [1,2,3];
let b = [1,2,3];
console.log(a==b); // false