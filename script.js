function add(a,b){
return a+b;
}
function subtract(a,b){
    return a-b;
}
function multiply(a,b){
    return a*b;
}
function divide (a,b){
    if(b==0){return "divisor can't be zero!"}
    return a/b;
}
function operate(operator, a, b) {
  a = Number(a);
  b = Number(b);
  switch (operator) {
    case '+':
      return add(a, b);
    case '-':
      return subtract(a, b);
    case '*':
      return multiply(a, b);
    case '/':
      return divide(a, b);
    default:
      return null;
  }
}
let firstOperand = '';
let secondOperand = '';
let currentOperator = null;
let shouldResetScreen = false;

const display = document.getElementById('display');
const numberButtons = document.querySelectorAll('.number');
const operatorButtons = document.querySelectorAll('.operator');
const equalsButton = document.querySelector('.equals');
const clearButton = document.querySelector('.clear');

numberButtons.forEach(button => {
  button.addEventListener('click', () => appendNumber(button.textContent));
});

operatorButtons.forEach(button => {
  button.addEventListener('click', () => setOperation(button.textContent));
});

equalsButton.addEventListener('click', evaluate);
clearButton.addEventListener('click', clear);

function appendNumber(number) {
  if (display.textContent === '0' || shouldResetScreen) {
    resetScreen();
  }
  display.textContent += number;
}

function resetScreen() {
  display.textContent = '';
  shouldResetScreen = false;
}

function setOperation(operator) {
  if (currentOperator !== null) evaluate();
  firstOperand = display.textContent;
  currentOperator = operator;
  shouldResetScreen = true;
}

function evaluate() {
  if (currentOperator === null || shouldResetScreen) return;
  secondOperand = display.textContent;
  display.textContent = roundResult(operate(currentOperator, firstOperand, secondOperand));
  currentOperator = null;
}

function roundResult(number) {
  return Math.round(number * 1000) / 1000;
}

function clear() {
  display.textContent = '0';
  firstOperand = '';
  secondOperand = '';
  currentOperator = null;
}

