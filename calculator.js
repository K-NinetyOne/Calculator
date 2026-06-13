let equationInput = "";
let equationOperation = [];
let operator;
let answer;
let containsDecimal = false;
let errorMessage = false;
let isNewInput = false;

const screen = document.querySelector("#screen");

//Operands--------------------------------------------------------------------
const numberBtns = document.querySelectorAll(".numberBtn");

numberBtns.forEach(function (numBtn) {
  numBtn.addEventListener("click", function () {
    if (errorMessage === true) {
      awaitNext();
      equationOperation = [];
      errorMessage = false;
      isNewInput = false;
      equationInput += numBtn.value;
      updateScreen(equationInput);
      return;
    }

    if (isNewInput === true) {
      awaitNext();
      containsDecimal = false;
      isNewInput = false;
      errorMessage = false;
      equationInput += numBtn.value;
      updateScreen(equationInput);
    } else {
      equationInput += numBtn.value;
      updateScreen(equationInput);
    }
  });
});

//Operators-------------------------------------------------------------------
const operatorBtns = document.querySelectorAll(".operatorBtn");

operatorBtns.forEach(function (opBtn) {
  opBtn.addEventListener("click", function () {
    containsDecimal = false;
    if (opBtn.value === "-" && equationInput === "") {
      equationInput = "-";
      updateScreen(equationInput);
      return;
    }
    if (equationInput === "") {
      operator = opBtn.value;
      updateScreen(opBtn.value);
      return;
    } else {
      updateScreen(opBtn.value);
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
  containsDecimal = false;
  if (equationInput === "") {
    return;
  }
  equationOperation[1] = Number(equationInput);
  if (!operator || isNaN(equationOperation[1])) {
    return;
  }
  isNewInput = true;
  if (operator === "-") {
    answer = subtractItems(equationOperation);
  }
  if (operator === "+") {
    answer = addItems(equationOperation);
  }
  if (operator === "x") {
    answer = multiplyItems(equationOperation);
  }
  if (operator === "÷") {
    if (equationOperation[1] === 0) {
      answer = "Can't divide by 0";
      errorMessage = true;
      isNewInput = true;
      updateScreen(answer);
      return;
    } else {
      answer = divideItems(equationOperation);
    }
  }
  if (typeof answer === "number" && !Number.isInteger(answer)) {
    answer = Number(answer.toFixed(8));
  }
  equationInput = String(answer);
  updateScreen(answer);
  resetOperation();
});

//Clear
document.querySelector("#clearBtn").addEventListener("click", function () {
  awaitNext();
  resetOperation();
});

//Decimal
document.querySelector("#decimalBtn").addEventListener("click", function () {
  if (containsDecimal === true) {
    return;
  }
  containsDecimal = true;
  screen.innerText += ".";
  equationInput += ".";
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
    updateScreen(ansBtn.value);
  });

//Helper functions
function updateScreen(value) {
  const displayLength = 17;
  value = String(value);
  if (value.length > displayLength) {
    value = value.slice(-displayLength);
  }
  screen.innerText = value;
}

function resetOperation() {
  equationOperation = [];
  operator = null;
  containsDecimal = false;
}

function awaitNext() {
  screen.innerText = "";
  equationInput = "";
}
