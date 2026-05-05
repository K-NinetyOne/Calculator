let equationInput = [];
let equationOperation = [];
let operator;
let answer;

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

/*const sum = function (arr) {
  return arr.reduce((total, currentItem) => total + currentItem, 0);
};

const product = function (arr) {
  return arr.reduce((total, currentItem) => total * currentItem);
};*/

const num1 = document.querySelector("#btn1");
const num2 = document.querySelector("#btn2");
const num3 = document.querySelector("#btn3");
const num4 = document.querySelector("#btn4");
const num5 = document.querySelector("#btn5");
const num6 = document.querySelector("#btn6");
const num7 = document.querySelector("#btn7");
const num8 = document.querySelector("#btn8");
const num9 = document.querySelector("#btn9");
const num0 = document.querySelector("#btn0");
const divide = document.querySelector("#divideBtn");
const multiply = document.querySelector("#multiplyBtn");
const plus = document.querySelector("#plusBtn");
const minus = document.querySelector("#minusBtn");
const equals = document.querySelector("#equalsBtn");
const clearAll = document.querySelector("#clearBtn");

num1.addEventListener("click", function () {
  equationInput.push(1);
  document.querySelector("#screen").innerText = equationInput.join("");
  console.log(equationInput);
});
num2.addEventListener("click", function () {
  equationInput.push(2);
  document.querySelector("#screen").innerText = equationInput.join("");
  console.log(equationInput);
});
num3.addEventListener("click", function () {
  equationInput.push(3);
  document.querySelector("#screen").innerText = equationInput.join("");
  console.log(equationInput);
});
num4.addEventListener("click", function () {
  equationInput.push(4);
  document.querySelector("#screen").innerText = equationInput.join("");
  console.log(equationInput);
});
num5.addEventListener("click", function () {
  equationInput.push(5);
  document.querySelector("#screen").innerText = equationInput.join("");
  console.log(equationInput);
});
num6.addEventListener("click", function () {
  equationInput.push(6);
  document.querySelector("#screen").innerText = equationInput.join("");
  console.log(equationInput);
});
num7.addEventListener("click", function () {
  equationInput.push(7);
  document.querySelector("#screen").innerText = equationInput.join("");
  console.log(equationInput);
});
num8.addEventListener("click", function () {
  equationInput.push(8);
  document.querySelector("#screen").innerText = equationInput.join("");
  console.log(equationInput);
});
num9.addEventListener("click", function () {
  equationInput.push(9);
  document.querySelector("#screen").innerText = equationInput.join("");
  console.log(equationInput);
});
num0.addEventListener("click", function () {
  equationInput.push(0);
  document.querySelector("#screen").innerText = equationInput.join("");
  console.log(equationInput);
});
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
  console.log(answer);
  document.querySelector("#screen").innerText = answer;
});
clearAll.addEventListener("click", function () {
  console.log("CLEARED");
  document.querySelector("#screen").innerText = "";
  equationInput = [];
  equationOperation = [];
});
