import file from "./data.json" assert {type: "json"};

var maxAmount = 0;
var maxHeight = 180;

file.forEach(row => {
  if (row.amount > maxAmount){
    maxAmount = row.amount;
  }
});

var amountRatio = maxHeight / maxAmount;

var columns = document.querySelectorAll(".chart-column");

columns.forEach(function(column,i) {
  console.log(amountRatio * file[i].amount);
  const height = amountRatio * file[i].amount;
  column.style.height = height + "px";
  column.querySelector("span").innerHTML = "$" + file[i].amount
});