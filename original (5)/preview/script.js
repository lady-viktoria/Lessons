  const btns = document.querySelectorAll('button'),
        overlay=document.querySelector('.overlay');

//2 метод
//   btn.onclick = function () {
//       alert('Click');
//   };

//3 метод
// btn.addEventListener('click', () => {
//     alert('Click');
// });

// btn.addEventListener('click', () => {
//     alert('Second click');
// });

//let i=0;

const deleteElement = (e) => {
    console.log(e.target);
    console.log(e.type);

    // i++;
    // if (i==1) {
    //    btn.removeEventListener('click', deleteElement); 
    // }
};
// btn.addEventListener('click', deleteElement); 
// overlay.addEventListener('click', deleteElement); 

btns.forEach(btn => {
    btn.addEventListener('click', deleteElement, {once: true});
});

// btn.addEventListener('mouseenter', (e) => {
//     console.log(e.target);
//     e.target.remove();
//     //console.log('Hover');
// });    

const link = document.querySelector('a');
link.addEventListener('click', (event) => {
    event.preventDefault();

    console.log(event.target);
}
);