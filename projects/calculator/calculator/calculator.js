// useful tags and class
const operandBtn = document.querySelectorAll('.operand')
const operatorBtn = document.querySelectorAll('.operator');
const equalBtn = document.querySelector('.equal')
const clean = document.getElementById('clean')
const deleteLast = document.querySelector('.deleteLast')
const display = document.querySelector('#display')

let displayValue = '' // var used to hole the expression
let currentNum = ''// hold to store all operands 
let lastInput = ''// used to know last input 

operandBtn.forEach(btn => {
  btn.addEventListener('click',()=> {
    handleInput(btn.textContent)})
})

operatorBtn.forEach(btn => {
  btn.addEventListener('click',()=>{
     handleInput(btn.textContent)})
})

clean.addEventListener('click',() => cleanDisplay())
deleteLast.addEventListener('click',()=> clearLast())
equalBtn.addEventListener('click', ()=>evaluateFormula());



// function used to remove the last element of displayValue
function clearLast(){
  displayValue = displayValue.slice(0,-1)
  currentNum = currentNum.slice(0,-1)
  updateDisplay(displayValue)
}

// a function listen the user input and filter the operator and operand and check the decimal point is appear 
function handleInput(input){
  const operators = ['+','-','*','/','^','%']
  if(operators.includes(input)){
    if(lastInput === 'operator'){
      displayValue = displayValue.slice(0,-1) + input
    }
    else if(displayValue.length === 0){
      return
    }
    else{
      displayValue +=input
    }
    currentNum = '';
    lastInput = 'operator'
  } 
  else if (input ==='.'){
    if(!currentNum.includes('.')){
      displayValue += input
      currentNum += input
      lastInput = 'decimal'
    }
  
  }else if(currentNum.length >= 8){
    
    alert("Can't Calculate More than 8 Digits Number")
  }else if(displayValue.length ===14){
    document.querySelector("#display").style.fontSize = "6px";

  }
  else{
    displayValue += input
    currentNum += input
    lastInput = 'operand'
  }
  updateDisplay(displayValue)
}

// function render all key the user press 
function updateDisplay(input){
  document.querySelector('#display').textContent = input
}
// used to clean display of input and clean the value of currentNum , displayValue, and lastInput value
function cleanDisplay(){
  displayValue = ''
  currentNum = ''
  lastInput = ''
  updateDisplay('')
}


// the hole calculation is performed here
function evaluateFormula(){
  try{
    
    if(displayValue.includes('^')) {displayValue.replace(/\^/g, "**")
      const res  = eval(displayValue)
    updateDisplay(res)
    displayValue = String(res)
    currentNum = String(res)
    lastInput = 'operand'
    }
    else{
    const result = eval(displayValue);
    updateDisplay(result)
    displayValue = String(result)
    currentNum = String(result)
    lastInput = 'operand'
    }
    
  }catch(e){
    cleanDisplay()
    updateDisplay('0')

  }
}


let userInput = "alert('Hacked!')";
eval(userInput); 

          /*2. Organize Your JavaScript Functions
Here’s a pattern to structure your calculator in JS:

Core Variables:

displayValue: What’s currently shown on the screen (string)

currentNumber: Tracks the number being typed (for decimal filtering)

lastOperator: Tracks the last operator entered

Primary Functions:

updateDisplay(value): Show the latest equation or result

handleInput(value): Main handler for button clicks

evaluateFormula(): Calculate result when = is pressed

clearDisplay(): Clears all input (AC)

clearLast(): Removes last character (C)

Optionally: Functions for specific math operations (addition, subtraction, etc.)*/