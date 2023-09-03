const currentDate = new Date();
var dayLabel = document.querySelector('#day-fields').querySelector('label');
var dayInput = document.querySelector('#day-fields').querySelector('input');
var dayError = document.querySelector('#day-fields').querySelector('p');
var monthLabel = document.querySelector('#month-fields').querySelector('label');
var monthInput = document.querySelector('#month-fields').querySelector('input');
var monthError = document.querySelector('#month-fields').querySelector('p');
var yearLabel = document.querySelector('#year-fields').querySelector('label');
var yearInput = document.querySelector('#year-fields').querySelector('input');
var yearError = document.querySelector('#year-fields').querySelector('p');

var yearSpan = document.querySelector('#years');
var monthSpan = document.querySelector('#months');
var daySpan = document.querySelector('#days');

var interval = 500;


function calculateAge(){
  var day = parseInt(document.querySelector("#day").value);
  var month = parseInt(document.querySelector("#month").value);
  var year = parseInt(document.querySelector("#year").value);
  var date = new Date(year,month-1,day);
  var parsed = true;

  if (month === "" || month > 12){
    monthLabel.style.color = "var(--primary-2)";
    monthInput.style.border = "solid 1px var(--primary-2)";
    monthError.style.display = "block";
    parsed = false;
  }
  else {
    monthLabel.style.color = "var(--neutral-4)";
    monthInput.style.border = "solid 1px var(--neutral-3)";
    monthError.style.display = "none";
  }

  if (year === "" || year > currentDate.getFullYear() || date > currentDate) {
    yearLabel.style.color = "var(--primary-2)";
    yearInput.style.border = "solid 1px var(--primary-2)";
    yearError.style.display = "block";
    parsed = false;
  }
  else{
    yearLabel.style.color = "var(--neutral-4)";
    yearInput.style.border = "solid 1px var(--neutral-3)";
    yearError.style.display = "none";
  }

  if (day === "" || day > 31 || month - 1 !== date.getMonth()){
    dayLabel.style.color = "var(--primary-2)";
    dayInput.style.border = "solid 1px var(--primary-2)";
    dayError.style.display = "block";
    parsed = false;
  }
  else{
    dayLabel.style.color = "var(--neutral-4)";
    dayInput.style.border = "solid 1px var(--neutral-3)";
    dayError.style.display = "none";
  }

  if (!parsed){
    return;
  }

  var timeDiff = currentDate - date;
  var diffYears = Math.floor(timeDiff / (1000 * 60 * 60 * 24 * 365.25));
  var remainingTime = timeDiff - (diffYears * 1000 * 60 * 60 * 24 * 365.25);

  var diffMonths = Math.floor(remainingTime / (1000 * 60 * 60 * 24 * (365.25 / 12)));
  remainingTime -= diffMonths * (1000 * 60 * 60 * 24 * (365.25 / 12));

  var diffDays = Math.floor(remainingTime / (1000 * 60 * 60 * 24));

  animateCounter(yearSpan, diffYears);
  animateCounter(monthSpan, diffMonths);
  animateCounter(daySpan, diffDays);
}

function animateCounter(span, endValue) {
  let startValue = 0;
  let duration = Math.floor(interval / endValue);
  let counter = setInterval(function () {
    startValue += 1;
    span.textContent = startValue;
    if (startValue === endValue) {
      clearInterval(counter);
    }
  }, duration);
}