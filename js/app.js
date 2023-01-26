const count = document.querySelector('#numbers');
let curValue = 0;

const decrement = document.querySelector('#decrement');
const reset = document.querySelector('#reset');
const numbers = document.querySelector('#numbers');

numbers.addEventListener('click', () => {
    curValue++;
    count.textContent = curValue;
});

reset.addEventListener('click', () => {
    curValue = 0;
    count.textContent = curValue;
});

decrement.addEventListener('click', () => {
    if(curValue > 0)
    curValue--;
    curValue = (curValue < 0) ? "0" + curValue : curValue;
    count.textContent = curValue;

});

// sound effets

var audio = new Audio();
audio.src = "sounds/click.mp3";

var sound2 = new Audio();
sound2.src = "sounds/minus.mp3";

var sound3 = new Audio();
sound3.src = "sounds/reset.mp3";
