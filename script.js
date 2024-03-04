let currentOperation = '';
let currentNumber = '';
let total = 0;

function appendNumber(number) {
  currentNumber += number;
  console.log("appendNumber, currentNumber " + currentNumber)
  updateDisplay(currentNumber);
}

function appendOperator(operator) {
  if (currentNumber !== '') {
    console.log("currentNumber: " + currentNumber)
    currentOperation += currentNumber + operator;
    console.log("currentOperation: " + currentOperation)
    currentNumber = '';
  } else if (currentOperation !== '') {
    currentOperation = currentOperation.slice(0, -1) + operator;
    console.log("currentOperation 2: " + currentOperation)
  }
}


/* azzera tutte le variabili e il display */
function clearDisplay() {
  currentOperation = '';
  currentNumber = '';
  total = 0;
  updateDisplay('');
}

function calculate() {
  if (currentNumber !== '') {
    currentOperation += currentNumber;
    console.log(currentOperation)
    total = eval(currentOperation); /* la mitica funzione di scrimin. trasforma una stringa in calcolo numerico */
    updateDisplay(total);
    currentOperation = '';
    currentNumber = '';
  }
}

function updateDisplay(value) {
  document.getElementById('display').value = value;
}
