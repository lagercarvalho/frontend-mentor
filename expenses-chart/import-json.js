//import file from "./data.json" assert {type: "json"};

var file = [
  {
    "day": "mon",
    "amount": 17.45
  },
  {
    "day": "tue",
    "amount": 34.91
  },
  {
    "day": "wed",
    "amount": 52.36
  },
  {
    "day": "thu",
    "amount": 31.07
  },
  {
    "day": "fri",
    "amount": 23.39
  },
  {
    "day": "sat",
    "amount": 43.28
  },
  {
    "day": "sun",
    "amount": 25.48
  }
];

var maxAmount = 0;
var maxHeight = 180;

file.forEach(row => {
  if (row.amount > maxAmount) {
    maxAmount = row.amount;
  }
});

var amountRatio = maxHeight / maxAmount;

var columns = document.querySelectorAll(".chart-column");

columns.forEach(function (column, i) {
  const height = amountRatio * file[i].amount;
  animateColumn(column, height);
  column.querySelector("span").innerHTML = "$" + file[i].amount
});

function animateColumn(column, endValue) {
  let height = 0;
  let counter = setInterval(function () {
    if (height >= endValue) {
      clearInterval(counter);
    } else {
      height += 1;
    }
    column.style.height = height + "px";
  });
}