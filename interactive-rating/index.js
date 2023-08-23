function submitRating() {
    var selectedValue = $("input[type='radio'][name='rating']:checked").val();
    document.querySelector(".rating-box").style.display = "none";
    document.querySelector(".confirmation").style.display = "flex";
    document.querySelector("#selected-rating").innerHTML = selectedValue;
}