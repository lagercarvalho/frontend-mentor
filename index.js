var reveals = document.querySelectorAll(".reveal");

function reveal() {
  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

function handleScroll(event) {
  var scrollTop = event.target.scrollTop;
  var maxScrollHeight = event.target.scrollHeight - event.target.clientHeight;
  console.log(event);

  if (scrollTop <= 0) {
    event.target.scrollTop = 1;
    console.log("Top");
  } else if (scrollTop >= maxScrollHeight) {
    event.target.scrollTop = maxScrollHeight - 1;
    console.log("Bottom");
  }
}

window.addEventListener("scroll", reveal);