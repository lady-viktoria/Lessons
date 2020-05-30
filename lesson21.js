'use strict';

const arr = [1, 12, 3, 26, 8];
arr.sort(compareNum);

arr[99]=0;
console.log(arr.length);
console.log(arr);

// метод перебора
arr.forEach (function(item, i, arr){
    console.log(`${i}: ${item} внутри массива {arr}`)
});

arr.pop();// удаляет последний элемент массива
arr.push(10); // добавляет элемент в конец массива
console.log(arr);

// Перебор элементов массива
for (let i=0; i<arr.length; i++) {
    console.log(arr[i]);
}

 for (let value of arr) {
    console.log(value);
}

const str = prompt("", "");
const products = str.split(", ");
products.sort(compareNum);
console.log(products.join('; '));

function compareNum(a, b) {
    return a-b;
}