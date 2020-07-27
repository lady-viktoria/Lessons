'use strict';

const now = new Date();

//Получение компонентов даты
console.log(now.getFullYear());
console.log(now.getMonth());
console.log(now.getDate());
console.log(now.getHours());
//номер дня недели (с воскресенья - 0)
console.log(now.getDay());

//Аналоги этих методов с UTC
console.log(now.getUTCHours());

console.log(now.getTimezoneOffset());
console.log(now.getTime());

let start = new Date();

for (let i=0; i < 100000; i++) {
    let some = i **3;
}

let end = new Date();

alert (`Цикл отработал за ${end-start} миллисекунд`);