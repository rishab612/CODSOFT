let isError = false;

function appendValue(value) {
  if (isError) return;
  const currentValue = document.getElementById('display').value;
  const lastChar = currentValue[currentValue.length - 1];

  
  const isLastCharArithmeticSign = ['+', '-', '*', '/'].includes(lastChar);

  
  const isCurrentValueArithmeticSign = ['+', '-', '*', '/'].includes(value);

  
  if (isLastCharArithmeticSign && isCurrentValueArithmeticSign) {
    return;
  }

  document.getElementById('display').value += value;
}

function clearDisplay() {
  document.getElementById('display').value = '';
  isError = false;
}

function backspace() {
  if (isError) return;
  const currentValue = document.getElementById('display').value;
  document.getElementById('display').value = currentValue.slice(0, -1);
}

function calculate() {
  try {
    const result = eval(document.getElementById('display').value);
    const resultString = result.toString();
    const maxLength = 10;
    if (resultString.length > maxLength) {
      document.getElementById('display').value = result.toExponential(5);
    } else {
      document.getElementById('display').value = result;
    }
  } catch (error) {
    document.getElementById('display').value = 'Error';
    isError = true;
  }
}

  document.addEventListener('keydown', function(event) {
    const key = event.key;
    if ((key >= '0' && key <= '9') || key === '.' || key === '/' || key === '*' || key === '-' || key === '+' || key === '(' || key === ')') {
      appendValue(key);
    } else if (key === 'Enter') {
      calculate();
    } else if (key === 'Escape') {
      clearDisplay();
    } else if (key === 'Backspace') {
      backspace();
    }
  });
  
  function backspace() {
    const currentValue = document.getElementById('display').value;
    document.getElementById('display').value = currentValue.slice(0, -1);
  }
  function reciprocal() {
    const currentValue = parseFloat(document.getElementById('display').value);
    if (currentValue !== 0) {
      document.getElementById('display').value = 1 / currentValue;
    } else {
      document.getElementById('display').value = 'Error';
      isError = true;
    }
  }
  
  function square() {
    const currentValue = parseFloat(document.getElementById('display').value);
    document.getElementById('display').value = currentValue * currentValue;
  }
  
  function squareRoot() {
    const currentValue = parseFloat(document.getElementById('display').value);
    if (currentValue >= 0) {
      document.getElementById('display').value = Math.sqrt(currentValue);
    } else {
      document.getElementById('display').value = 'Error';
      isError = true;
    }
  }
  
  function toggleSign() {
    const currentValue = parseFloat(document.getElementById('display').value);
    document.getElementById('display').value = -currentValue;
  }