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
grid_items.forEach((element) => {
    element.addEventListener('mouseover', () => {
      element.classList.add('passed');
    })});
 
function removePassed()
{
    grid_items.forEach((element) => {element.classList.remove('passed')})
}  



const btnReset = document.querySelector('#reset');
btnReset.addEventListener('click', removePassed)