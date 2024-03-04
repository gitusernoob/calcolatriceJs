let currentOperation = ''; //stringa perché usa la funzione eval che ci aveva insegnato scrimin
let currentNumber = ''; //stringa perché usa la funzione eval che ci aveva insegnato scrimin
let total = 0;

function appendNumber(number) { //aggiunge un numero. se clicco 7 poi 9 poi 3 diventa 793
  currentNumber += number;
  console.log("appendNumber, currentNumber " + currentNumber)
  updateDisplay(currentNumber);
}

function appendOperator(operator) {
  if (currentNumber !== '') {  //aggiunge l'operatore + - * /
    console.log("currentNumber: " + currentNumber)
    currentOperation += currentNumber + operator;
    console.log("currentOperation: " + currentOperation)
    currentNumber = '';
  } else if (currentOperation !== '') { // se l'ultimo elemento è un operatore lo sostituisce tipo clicco + e poi / salva solo /
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
    total = eval(currentOperation); /* la mitica funzione di scrimin: EVAL . trasforma una stringa in calcolo numerico */
    updateDisplay(total);
    currentOperation = '';
    currentNumber = '';
  }
}

function updateDisplay(value) {
  document.getElementById('display').value = value;
}
