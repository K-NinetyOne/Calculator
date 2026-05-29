let equationInput = "";
let equationOperation = [];
let operator;
let answer;

const screen = document.querySelector("#screen");

//Operands--------------------------------------------------------------------

const numberBtns = document.querySelectorAll(".numberBtn");

numberBtns.forEach(function (numBtn) {
  numBtn.addEventListener("click", function () {
    equationInput += numBtn.value;
    screen.innerText = equationInput;
    console.log("input:", equationInput);
    console.log("operator:", operator);
    console.log("operation:", equationOperation);
  });
});

//Operators-------------------------------------------------------------------

const operatorBtns = document.querySelectorAll(".operatorBtn");

operatorBtns.forEach(function (opBtn) {
  opBtn.addEventListener("click", function () {
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
      console.log("input:", equationInput);
      console.log("operator:", operator);
      console.log("operation:", equationOperation);
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
  equationOperation[1] = Number(equationInput);
  if (operator === "-") {
    answer = subtractItems(equationOperation);
  } else if (operator === "+") {
    answer = addItems(equationOperation);
  } else if (operator === "x") {
    answer = multiplyItems(equationOperation);
  } else if (operator === "÷") {
    if (equationOperation[1] === 0) {
      answer = "Can't divide by 0";
    } else {
      answer = divideItems(equationOperation);
    }
  }
  equationInput = "";
  equationInput = String(answer);
  screen.innerText = answer;
  operator = null;
  equationOperation = [];
  console.log("input:", equationInput);
  console.log("operator:", operator);
  console.log("operation:", equationOperation);
});

//Clear
document.querySelector("#clearBtn").addEventListener("click", function () {
  screen.innerText = "";
  equationInput = "";
  equationOperation = [];
  operator = null;
});

/*Next steps: 
Expand operator array (push each  to array instead of specifying its locaiton [0], [1] etc).
  This will allow reduce to work on any number of operands later (outside of project scope currently)
Make condition in the operatorBtn eventListener that if array[0] is null then ignore and use - for number
//screen.innerText = answer; then clear screen to avoid apendng new number to answer
  */
