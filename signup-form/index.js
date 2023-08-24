function submitForm(){
    var firstName = document.getElementById("first-name");
    var lastName = document.getElementById("last-name");
    var email = document.getElementById("email");
    var password = document.getElementById("password");

    if (firstName.value === ""){
        firstName.placeholder = "";
        firstName.style.border = "solid 1px var(--primary-1)";
        document.getElementById("first-name-icon").style.display = "block";
        document.getElementById("first-name-desc").style.display = "block";
    }

    if (lastName.value === ""){
        lastName.placeholder = "";
        lastName.style.border = "solid 1px var(--primary-1)";
        document.getElementById("last-name-icon").style.display = "block";
        document.getElementById("last-name-desc").style.display = "block";
    }

    if (email.value === ""){
        email.placeholder = "email@example.com";
        email.style.border = "solid 1px var(--primary-1)";
        email.classList.add('email-text');
        document.getElementById("email-icon").style.display = "block";
        document.getElementById("email-desc").style.display = "block";
    }

    if (password.value === ""){
        password.placeholder = "";
        password.style.border = "solid 1px var(--primary-1)";
        document.getElementById("password-icon").style.display = "block";
        document.getElementById("password-desc").style.display = "block";
    }
}