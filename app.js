// selecting all useful HTML tags of DOM
const container = document.getElementById("container");
const fragment = document.createDocumentFragment();
const btn = document.getElementById('btn');
const btn1 = document.getElementById('btn2')


//  generating girds
function grid_generator(size){
  container.innerHTML = '';
  const numSquare = size*size
  for(let i = 0 ; i<numSquare ; i++){
  const newBox = document.createElement('div');
  newBox.classList.add('square');
  newBox.style.flex = `1 0 calc(100% / ${size})`;
  newBox.addEventListener('mouseover',()=>{
    newBox.style.background = randomColor();
  })
  
  fragment.appendChild(newBox)
}
container.appendChild(fragment);
}

// calling the generator function to display gird on web browser
grid_generator(6)

// selecting all squares 
const squares = document.querySelectorAll('.square');


// Resting the color of all grids which change the color 
btn1.addEventListener('click',()=>{
  squares.forEach(square => {
    square.style.background = 'white';
  })
})

// Creating RandomColor for the boxes to show dynamic view
function randomColor(){
  const r = Math.floor(Math.random()*256)
  const b = Math.floor(Math.random()*256)
  const g = Math.floor(Math.random()*256)
  return `rgb(${r},${g},${b})`
}


// a place where user input is received and rearrange the grids based on the inputs 
btn.addEventListener('click',()=>{
  const input = prompt("Enter the new size of the gird box");
  const size = parseInt(input,10)
  if(size > 0 && size <= 100 &&!isNaN(size)){
    grid_generator(size)
  }else{
    alert("Invalid Input please Try Again Later")
  }

})


