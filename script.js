
const addingNumbers = (a, b) => {
  return a + b;
} 

const subtractingNumbers = (a, b) => {
  return a - b;
}

const multiply = (a, b) => {
  return a * b;
}

const separator = (a, b) => {
  return a / b;
}


let numOne = "";
let sign = "";
let numTwo = "";


const operate = (numOne, sign, numTwo) => {
  if (sign === "+") {
    return addingNumbers(numOne, numTwo);  
  }
  else if (sign === "-") {
    return subtractingNumbers(numOne, numTwo);
  }
  else if (sign === "*") {
    return multiply(numOne, numTwo);
  }
  else if (sign === "/") {
    return separator(numOne, numTwo);
  }
  else {
    return "Что-то пошло не так!!!"
  }
}


const display = document.querySelector('.display p')
const clear = document.querySelector('.AC')
const colNumber = document.querySelectorAll('.number')
const signs = document.querySelectorAll('.operator')
const equals = document.querySelector('.itemResult')


clear.addEventListener('click', () => {
  numOne = "";
  sign = "";
  numTwo = "";
  display.textContent = "0"
})


signs.forEach(operator => {
  operator.addEventListener('click', (event) => {
    if (numOne !== "" && sign !== "" && numTwo !== "") {
      const resultOne = operate(Number(numOne), sign, Number(numTwo));
      numOne = resultOne;
      numTwo = "";
    } else {
      "error"
    }
    
    sign = event.target.textContent;
    display.textContent = `${numOne} ${sign} ${numTwo}`
    
  })
})


colNumber.forEach(number => {
  number.addEventListener('click', (event) => {
    if (sign) {
      numTwo += event.target.textContent;
    }
    else {
      numOne += event.target.textContent;
    }
    display.textContent = `${numOne} ${sign} ${numTwo}`
  })
})


equals.addEventListener('click', () => {
  const result = operate(Number(numOne), sign, Number(numTwo))
  display.textContent = result
  console.log(result);
})