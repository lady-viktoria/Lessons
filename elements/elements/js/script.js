'use strict';
//lesson 28
// const box = document.getElementById('box');
// console.log(box);

// const btns = document.getElementsByTagName('button');
// console.log(btns[1]);

// const circles = document.getElementsByClassName('circle');
// console.log(circles);

// //Современные методы
// const hearts = document.querySelectorAll('.heart');
// //console.log(hearts);
// hearts.forEach(item=>{
//     console.log(item);
// });

// const oneHeart = document.querySelector('.heart');
// console.log(oneHeart);


//lesson 29
const box = document.getElementById('box'),
    btns = document.getElementsByTagName('button'),
    circles = document.getElementsByClassName('circle'),
    hearts = document.querySelectorAll('.heart'),
    oneHeart = document.querySelector('.heart'),
    wrapper = document.querySelector('.wrapper');

box.style.backgroundColor='blue';
box.style.width='500px';

box.style.cssText='background-color:blue; width:500px';

btns[1].style.borderRadius='100%';
circles[1].style.backgroundColor='red';

// for (let i=0; i<hearts.length; i++) {
//     hearts[i].style.backgroundColor='blue';
// }

hearts.forEach(item=> {
    item.style.backgroundColor='blue';
});

const div = document.createElement('div');
//const text = document.createTextNode('Тут был я');

div.classList.add('black');

//document.body.append(div);
wrapper.append(div);
//wrapper.appendChild(div);
//wrapper.prepend(div);

//hearts[0].before(div);
//hearts[0].after(div);

//wrapper.insertBefore(div,hearts[0]);

//circles[0].remove();  
//wrapper.removeChild(hearts[1]);

//hearts[0].replaceWith(circles[0]);
//wrapper.replaceChild(circles[0], hearts[0]);

div.innerHTML = "<h1>Hello world</h1>";
div.textContent="Hello";

div.insertAdjacentHTML("afterend", '<h2>Hello world</h2>' )