var indexSlides = 0;
showSlides(indexSlides);

function nextSlide(n){
    indexSlides += n;
    showSlides(indexSlides);
}

function showSlides(index){
    var quotes = document.getElementsByClassName("quote");
    var slides = document.getElementsByClassName("slide");

    if (index >= quotes.length) {indexSlides = 0}
    if (index < 0) {indexSlides = quotes.length - 1}

    for(var i = 0; i < slides.length; i++){
        quotes[i].style.display = "none";
        slides[i].style.display = "none";
    }

    quotes[indexSlides].style.display = "flex";
    slides[indexSlides].style.display = "block";
}
