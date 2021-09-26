"use strict";
const dateOfBirth = document.querySelector("#dateOfBirth");
const favouriteNumber = document.querySelector("#favouriteNumber");
const check = document.querySelector(".check");
const output = document.querySelector(".output");

function validDateAndNumberChecker() {
  const dobInput = dateOfBirth.value;
  const favouriteNumberInput = favouriteNumber.value;
  console.log(favouriteNumberInput);
  if (dobInput === "" || favouriteNumberInput === "") {
    alert("please enter some values");
  } else if (favouriteNumberInput < 0) {
    alert("lucky number can't be negative");
  } else {
    const sumOfDate = birthDateSumCalculator(dobInput);
    luckyNumberCheker(sumOfDate, favouriteNumberInput);
  }
}
function birthDateSumCalculator(date) {
  date = date.replaceAll("-", "");
  let sum = 0;
  for (let indexNo = 0; indexNo < date.length; indexNo++) {
    sum = sum + Number(date.charAt(indexNo));
  }
  return sum;
}

function luckyNumberCheker(date, luckyNumber) {
  if (date % luckyNumber === 0) {
    displayOutput("Your Birthday is lucky!!🎉🎊");
  } else {
    displayOutput("oops!!! not lucky");
  }
}

function displayOutput(text) {
  output.innerHTML = text;
}
check.addEventListener("click", validDateAndNumberChecker);
