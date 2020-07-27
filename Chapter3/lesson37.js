"use strict";

const btns = document.querySelectorAll('button'),
      wrapper = document.querySelector('.btn-block');

// console.log(btns[0].classList.length);
//item позволяет получить класс, кот располагается под каким-то индексом
// console.log(btns[0].classList.item(1));
// console.log(btns[0].classList);

// console.log(btns[0].classList.add('red'));
// console.log(btns[0].classList.remove('blue'));
// console.log(btns[0].classList.toggle('blue'));

//contains() позволяет проверять наличие определённого класса на опр элементе
//возвращает true/false
// if(btns[1].classList.contains('red')) {
//     console.log('red');
// }

btns[0].addEventListener('click', () => {
    // if (!btns[1].classList.contains('red')) {
    //     btns[1].classList.add('red');
    // } else {
    //     btns[1].classList.remove('red');
    // }
    btns[1].classList.toggle('red')
});

//className содержит список классов в виде строки
console.log(btns[0].className);

//Делегирование событий
//Если элемент подходит под условие, то на нём будет срабатывать та функция, кот передали.
//Мы делегируем событие с родителя на его потомков
wrapper.addEventListener('click', (event) => {
   // event в себе содержит всю  инфу об том элементе, на кот происходит событие
    // console.dir(event.target);
   if (event.target && event.target.tagName == "BUTTON") {
       //event.target.matches("button.red") - это означает, что какой-то элемент совпадает с чем-то
       console.log("hello");
   }
});

const btn = document.createElement('button');
btn.classList.add('red');
wrapper.append(btn);

//При использовании перебора вновь созданные кнопки не будут срабатывать на обработчик событий
//в отличии от применения делегирования!!!
btns.forEach(btn => {
    btn.addEventListener('click', () => {
        console.log("Hello");
    });
});

