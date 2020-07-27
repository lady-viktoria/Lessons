//Управление временем выполнения скриптов
// Чтобы запустить функцию через опр время 
// const timerId = setTimeout(function(text){
//     console.log(text);
// }, 2000, 'Hello');

//можно передавать готовую функцию
//const timerId = setTimeout(logger, 2000);

const btn = document.querySelector('.btn');
let  timerId,
    i=0;

function myAnymation() {
    const elem = document.querySelector('.box');
    let pos = 0;

    const id = setInterval(frame, 10);
    function frame() {
        if (pos == 300) {
            clearInterval(id);
        } else {
            pos++;
            elem.style.top = pos+'px';
            elem.style.left = pos+'px';
        }
    }
}

btn.addEventListener('click', myAnymation);

// btn.addEventListener('click', () => {
//     //const timerId = setTimeout(logger, 2000);
//     timerId = setInterval(logger, 2000);
// });


// function logger () {
//     if(i===3) {
//         //сбросить setTimeout
//         clearInterval(timerId);
//     }
//     console.log('text');
//     i++;
// }

// //Рекурсивный вызов setTimeout
// let id = setTimeout(function log() {
//     console.log('Hello');
//     id = setTimeout(log, 500);
// }, 500);