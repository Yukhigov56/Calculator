const addingNumbers = (a, b) => {
  return a + b;
};

const subtractingNumbers = (a, b) => {
  return a - b;
};

const multiply = (a, b) => {
  return a * b;
};

const separator = (a, b) => {
  return a / b;
};

let num = "";
let signn = "";
let numTwo = "";

const operate = (num, signn, numTwo) => {
  if (signn === "+") {
    return num + numTwo;
  } else if (signn === "-") {
    return num - numTwo;
  } else if (signn === "*") {
    return num * numTwo;
  } else if (signn === "/") {
    return num / numTwo;
  } else ["Что-то пошло не так"];
};

const display = document.querySelector(".display p");
const btnCol = document.querySelectorAll(".number");
const signCol = document.querySelectorAll(".operator");

signCol.forEach((operator) => {
    operator.addEventListener("click", (event) => {
    signn = event.target.textContent;
    display.textContent = signn
  });
});

btnCol.forEach((number) => {
  number.addEventListener("click", (event) => {
    if (!signn) {
      num += event.target.textContent;
    display.textContent = num
    } else {
      numTwo += event.target.textContent;
      display.textContent = numTwo
    }
  });
});

const colResult = document.querySelector(".itemResult");

colResult.addEventListener("click", () => {
  const result = operate(+num, signn, +numTwo);
  display.textContent = result;
  num = result;
  signn = 0;
});

const btnClear = document.querySelector(".AC");
btnClear.addEventListener("click", () => {
  num = "";
  signn = "";
  numTwo = "";
  display.textContent = 0;
});

