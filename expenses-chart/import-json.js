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
  animateColumn(column, height);
  column.querySelector("span").innerHTML = "$" + file[i].amount
});

function animateColumn(column, endValue) {
  let height = 0;
  let counter = setInterval(function () {
    console.log(height)
    if (height >= endValue) {
      clearInterval(counter);
    } else {
      height += 1;
    }
    column.style.height = height + "px";
  });
}