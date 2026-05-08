let equationInput = [];
let equationOperation = [];
let operator;
let answer;

const numberBtns = document.querySelectorAll(".numberBtn");

numberBtns.forEach((numBtn) => {
  numBtn.addEventListener("click", function () {
    equationInput.push(Number(numBtn.value));
    document.querySelector("#screen").innerText = equationInput.join("");
    console.log(equationInput);
    console.log(document.querySelector(".numberBtn").value);
    console.log(document.querySelector(".numberBtn").value);
  });
});

const addItems = function (arr) {
  return arr.reduce((item1, item2) => item1 + item2, 0);
};

const subtractItems = function (arr) {
  return arr.reduce((item1, item2) => item1 - item2);
};

const multiplyItems = function (arr) {
  return arr.reduce((item1, item2) => item1 * item2);
};

const divideItems = function (arr) {
  return arr.reduce((item1, item2) => item1 / item2);
};

const divide = document.querySelector("#divideBtn");
const multiply = document.querySelector("#multiplyBtn");
const plus = document.querySelector("#plusBtn");
const minus = document.querySelector("#minusBtn");
const equals = document.querySelector("#equalsBtn");
const clearAll = document.querySelector("#clearBtn");

divide.addEventListener("click", function () {
  document.querySelector("#screen").innerText = "÷";
  operator = "divide";
  equationOperation[0] = Number(equationInput.join(""));
  equationInput = [];
  console.log(equationOperation);
  console.log(equationInput.join(""));
});
multiply.addEventListener("click", function () {
  document.querySelector("#screen").innerText = "x";
  operator = "multiply";
  equationOperation[0] = Number(equationInput.join(""));
  equationInput = [];
});
plus.addEventListener("click", function () {
  document.querySelector("#screen").innerText = "+";
  operator = "plus";
  equationOperation[0] = Number(equationInput.join(""));
  equationInput = [];
});
minus.addEventListener("click", function () {
  document.querySelector("#screen").innerText = "-";
  operator = "minus";
  equationOperation[0] = Number(equationInput.join(""));
  equationInput = [];
});
equals.addEventListener("click", function () {
  equationOperation[1] = Number(equationInput.join(""));
  if (operator === "minus") {
    answer = subtractItems(equationOperation);
  } else if (operator === "plus") {
    answer = addItems(equationOperation);
  } else if (operator === "multiply") {
    answer = multiplyItems(equationOperation);
  } else if (operator === "divide") {
    answer = divideItems(equationOperation);
  }
  equationInput = [];
  equationInput[0] = answer;
  console.log(answer);
  document.querySelector("#screen").innerText = answer;
});
clearAll.addEventListener("click", function () {
  console.log("CLEARED");
  document.querySelector("#screen").innerText = "";
  equationInput = [];
  equationOperation = [];
});

/*Next steps: 
Apply DRY to event listeners and functions that are repeated. 
Expand operator array (push each  to array instead of specifying its locaiton [0], [1] etc).
  This will allow reduce to work on any  of operands.
Make equals clear the old equationInput array and assign its output value (answer) to the equationInput
  array[0], then another operator will log it to equationOperation and allow a second operand to be added
  */
