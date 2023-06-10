let input = "";
let result = document.getElementById("result");
let hasDecimal = false;

function Solve(value) {
  if (/^\d*\.?\d*$|[+\-*\/%()]|[+\-*\/%()]\b[+\-*\/%()]?\b/.test(value)) {
    if (value === '.') {
      if (hasDecimal || input.endsWith('.')) {
        return;
      } else if (input === '') {
        input = '0';
      }
      hasDecimal = true;
    } else {
      hasDecimal = false;
    }
    if (/\.\d*$/.test(input) && /^\./.test(value)) {
      return;
    }

    if (/[\+\-\*\/%]$/.test(input) && /[\+\-\*\/%]/.test(value)) {
      return;
    }

    input += value;
    result.value = input;
  }
}

function clearResult() {
  input = "";
  result.value = "";
}

function Delete() {
  input = input.slice(0, -1);
  result.value = input;
}

function calPercentage() {
  try {
    const perceValue = new Function('return ' + input + '/100')();
    result.value = perceValue;
  } catch (error) {
    result.value = 'Error';
  }
}

function Result() {
  try {
    input = new Function('return ' + input)();
    if (input % 1 !== 0) {
      input = input.toFixed(3);
    }
    result.value = input;
  } catch (error) {
    result.value = 'Error';
  }
}
