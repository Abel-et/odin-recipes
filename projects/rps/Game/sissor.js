// manuplating the buttons when some one click it change the images
const images = ["./image/rock.jpg","./image/paper.jpg","./image/sissor.jpg"];


const rock = document.getElementById("rock");
  const human_choose = document.getElementById("human");
  const paper = document.getElementById("paper");
  const sissor = document.getElementById("sissor");
  const scoreHuman = document.getElementById("human_score");
  const scoreComputer = document.getElementById("computer_score")


  let computerPoint = 0;
  let humanPoint = 0;
  let round  = 0;


  const result = document.createElement('div');
  const reset = document.createElement('button')
const container = document.querySelector(".container");
const header = document.createElement('h1')
const paragraph = document.createElement('p')


result.appendChild(header);
result.appendChild(paragraph)
result.classList.add("result");
container.appendChild(result);
reset.classList.add("result_button");
reset.textContent = "Play Again";
result.appendChild(reset);


   
rock.addEventListener('click',()=>{
  human_choose.src= images[0];
  human_choose.style.transform ="rotate(0deg)";
  computeAnswer();
  let index = computeAnswer();
  console.log(index);
  if(index == 1 ){
    computerPoint = computerPoint+ 1;
    scoreComputer.textContent = ` Computer's point ${computerPoint}`}
    else if (index ==2){
      humanPoint +=1;
      scoreHuman.textContent =` Your Point ${humanPoint}`;
    }
      round +=1;
if(round === 3){
  showMassage();
} 

 })


paper.addEventListener('click',()=>{
  human_choose.src= images[1];
  human_choose.style.transform ="rotate(180deg)"
  computeAnswer();
    let index = computeAnswer();
  console.log(index);
  if(index === 2 ){
    computerPoint = computerPoint+ 1;
    scoreComputer.textContent = ` Computer's point ${computerPoint}`}
    else if (index ===0){
      humanPoint +=1;
      scoreHuman.textContent =` Your Point ${humanPoint}`;
    
    }
  round +=1
if(round === 3){
  showMassage();
}
})



sissor.addEventListener('click',()=>{
  human_choose.src= images[2];
  human_choose.style.transform ="rotate(90deg)"
  computeAnswer();
    let index = computeAnswer();
  console.log(index);
  if(index === 0 ){
    computerPoint = computerPoint+ 1;
    scoreComputer.textContent = ` Computer's point ${computerPoint}`}
    else if (index ===1){
      humanPoint +=1;
      scoreHuman.textContent =` Your Point ${humanPoint}`;
    }
  round +=1 
if(round === 3){
  showMassage();
}

})






function showMassage(){
    result.style.visibility = "visible";
   if(humanPoint > computerPoint){
    header.textContent = "🎉 You Wins '🎉 "
    }
    else if(humanPoint< computerPoint){
      header.textContent = "🎉 Computer wins '🎉 "
    }
    else{
      header.textContent = "🤝 It's a Tie!";
    }

    paragraph.textContent = ` Your score is  ${humanPoint} Computer's Score is ${computerPoint}`
    reset.addEventListener('click',()=>
      {
      humanPoint = 0
      computerPoint = 0
      round = 0
      result.style.visibility = 'hidden';
      scoreHuman.textContent = "Your Point 0";
      scoreComputer.textContent = "Computer's Point 0";
    })

}
 
 





const computer = document.getElementById("computer");
function computeAnswer(){
  const computerChoose = Math.floor(Math.random()*images.length);
  if (computerChoose ===0){
    computer.src = images[0]
    computer.style.transform = "rotate(0deg)"

  }else if (computerChoose===1){
    computer.src = images[1]
    computer.style.transform = "rotate(0deg)"
   
  }
  else
    {
    computer.src = images[2]
    computer.style.transform = "rotate(-90deg)"
}
return computerChoose;
}


