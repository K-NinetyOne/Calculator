let equationInput = "";
let equationOperation = [];
let operator;
let answer;
let decimal;
let containsDecimal = false;
let errorMessage = false;
let isNewInput = false;

const screen = document.querySelector("#screen");

//Operands--------------------------------------------------------------------

const numberBtns = document.querySelectorAll(".numberBtn");

numberBtns.forEach(function (numBtn) {
  numBtn.addEventListener("click", function () {
    if (errorMessage === true) {
      screen.innerText = "";
      equationInput = "";
      errorMessage = false;
      isNewInput = false;
      equationInput += numBtn.value;
      screen.innerText = equationInput;
    } //Add into the "Cant' divide by zero" function to ignore zero as an operand and wait for new input
    // use isNewInput = true if divide bt zero maybe

    if (isNewInput === true) {
      screen.innerText = "";
      equationInput = "";
      isNewInput = false;
      errorMessage = false;
      equationInput += numBtn.value;
      screen.innerText = equationInput;
    } else {
      equationInput += numBtn.value;
      screen.innerText = equationInput;
    }
  });
});

//Operators-------------------------------------------------------------------

const operatorBtns = document.querySelectorAll(".operatorBtn");

operatorBtns.forEach(function (opBtn) {
  opBtn.addEventListener("click", function () {
    decimal = "";
    if (opBtn.value === "-" && equationInput === "") {
      equationInput = "-";
      screen.innerText = equationInput;
      return;
    }
    if (equationInput === "") {
      operator = opBtn.value;
      screen.innerText = opBtn.value;
      return;
    } else {
      screen.innerText = opBtn.value;
      operator = opBtn.value;
      equationOperation[0] = Number(equationInput);
      equationInput = "";
      return;
    }
  });
});

//Divide
const divideItems = function (arr) {
  return arr.reduce((item1, item2) => item1 / item2);
};
//Multiply
const multiplyItems = function (arr) {
  return arr.reduce((item1, item2) => item1 * item2);
};
//Add
const addItems = function (arr) {
  return arr.reduce((item1, item2) => item1 + item2, 0);
};
//Minus
const subtractItems = function (arr) {
  return arr.reduce((item1, item2) => item1 - item2);
};

//Equals
document.querySelector("#equalsBtn").addEventListener("click", function () {
  decimal = "";
  if (equationInput === "") {
    return;
  }
  equationOperation[1] = Number(equationInput);
  if (!operator || isNaN(equationOperation[1])) {
    return;
  }
  isNewInput = true;
  if (operator === "-") {
    if (containsDecimal === true) {
      answer = subtractItems(equationOperation).toFixed(8);
    } else {
      answer = subtractItems(equationOperation);
    }
  } else if (operator === "+") {
    if (containsDecimal === true) {
      answer = addItems(equationOperation).toFixed(8);
    } else {
      answer = addItems(equationOperation);
    }
  } else if (operator === "x") {
    if (containsDecimal === true) {
      answer = multiplyItems(equationOperation).toFixed(8);
    } else {
      answer = multiplyItems(equationOperation);
    }
  } else if (operator === "÷") {
    if (equationOperation[1] === 0) {
      answer = "Can't divide by 0";
      errorMessage = true;
      isNewInput = true;
      equationOperation[1] = [];
    } else if (containsDecimal === true) {
      answer = divideItems(equationOperation).toFixed(8);
    } else answer = divideItems(equationOperation);
  }
  equationInput = "";
  equationInput = String(answer);
  screen.innerText = answer;
  operator = null;
  containsDecimal = false;
  equationOperation = [];
});

//Clear
document.querySelector("#clearBtn").addEventListener("click", function () {
  screen.innerText = "";
  equationInput = "";
  equationOperation = [];
  operator = null;
  decimal = "";
  containsDecimal = false;
});

//Decimal
document.querySelector("#decimalBtn").addEventListener("click", function () {
  containsDecimal = true;
  if (decimal === ".") {
    return;
  } else {
    decimal = ".";
    screen.innerText += ".";
    equationInput += ".";
  }
});

//Answer Button
document
  .querySelector("#answerBtn")
  .addEventListener("click", function (ansBtn) {
    isNewInput = true;
    if (errorMessage === true) {
      return;
    }
    ansBtn.value = answer;
    equationInput = ansBtn.value;
    screen.innerText = ansBtn.value;
  });

// Next to fix
// Screen overflow issues maybe screen.innerText = stringLength(last 15 chars somehow)
