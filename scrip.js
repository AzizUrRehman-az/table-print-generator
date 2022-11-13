"use strict";
const tableValue = document.getElementById("number");
const btnGenerate = document.getElementById("btn-generate");
const btnReset = document.getElementById("btn-reset");
const tableOutput = document.getElementById("table");

let isGenerate = true;

btnGenerate.addEventListener("click", function () {
  let val = tableValue.value;
  //   if (isGenerate) {
  if (val === "" || val === "0") {
    tableOutput.innerHTML += `Please put valid number `;
  } else {
    for (let i = 1; i <= 10; i++) {
      tableOutput.innerHTML += `<br> ${val} * ${i} = ${val * i} `;
    }
  }
  //   }
  //   isGenerate = false;
});

btnReset.addEventListener("click", function () {
  tableOutput.innerHTML = "";
  tableValue.value = "";
});
