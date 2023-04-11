const gridSize = 100;

// const container = document.getElementsByClassName('container')[0];
const container = document.getElementById('container')


// Creat a grid of 16 by 16

for (let i=0; i<gridSize*gridSize; i++)
    {
        const div = document.createElement('div');
        div.setAttribute('class', 'grid');
        container.appendChild(div);
        console.log(i)
    }

container.style.setProperty('--numberRows', gridSize);



const grid_items = document.querySelectorAll('.grid');

function removePassed()
{
    grid_items.forEach((element) => {element.classList.remove('passed')})
}  

const btnReset = document.querySelector('#reset');
btnReset.addEventListener('click', removePassed)

let isPressed = false;
document.addEventListener('mousedown',function(){
    isPressed = true;
});
document.addEventListener('mouseup',function(){
    isPressed = false;
});

document.addEventListener('mousemove',function(){
console.log("isPressed", isPressed)
});

grid_items.forEach((element) => {
    element.addEventListener('mouseover', () => { 
        if (isPressed)
    element.classList.add('passed');
    })});
