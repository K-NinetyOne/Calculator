let equationInput = "";
let equationOperation = [];
let operator;
let answer;
let decimal;
let errorMessage = false;
let isNewInput = false;

const screen = document.querySelector("#screen");
//if (if screen.innerText.length > 17 then truncate or round somehow)

//Operands--------------------------------------------------------------------

const numberBtns = document.querySelectorAll(".numberBtn");

numberBtns.forEach(function (numBtn) {
  numBtn.addEventListener("click", function () {
    // if (errorMessage === true) {
    //   screen.innerText = "";
    //   equationInput = "";
    //   isNewInput = false;
    //   equationInput += numBtn.value;
    //   screen.innerText = equationInput;
    //   errorMessage = false;
    // } Add into the "Cant' divide by zero" function to ignore zero as an operand and wait for new input
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
    answer = subtractItems(equationOperation);
  } else if (operator === "+") {
    answer = addItems(equationOperation);
  } else if (operator === "x") {
    answer = multiplyItems(equationOperation);
  } else if (operator === "÷") {
    if (equationOperation[1] === 0) {
      answer = "Can't divide by 0";
      errorMessage = true;
      // isNewInput = true;
      // equationOperation[1] = [];
    } else {
      answer = divideItems(equationOperation);
    }
  } //Limit the possible lenght of answer and round the decimals not mathRound as makes integer
  equationInput = "";
  equationInput = String(answer);
  screen.innerText = answer;
  operator = null;
  equationOperation = [];
});

//Clear
document.querySelector("#clearBtn").addEventListener("click", function () {
  screen.innerText = "";
  equationInput = "";
  equationOperation = [];
  operator = null;
  decimal = "";
});

//Decimal
document.querySelector("#decimalBtn").addEventListener("click", function () {
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
// Operator override (let second operator override the first) maybe if equationInput = "" then override
// Screen overflow issues maybe screen.innerText = stringLength(last 15 chars somehow)
