/* კონტაქტი */

document.getElementById("goToMainPage").addEventListener("click", function () {
    window.location.href = "main.html";
});

/* ეხლანდელი ჩემპიონატის შედეგები */

document.addEventListener("DOMContentLoaded", function () {
    const table = document.getElementById("driversTable");
    const headers = table.getElementsByTagName("th");
    const rows = Array.from(table.getElementsByTagName("tr")).slice(1);

    for (let i = 0; i < headers.length; i++) {
        headers[i].addEventListener("click", function () {
            sortTable(i);
        });
    }

    function sortTable(columnIndex) {
        rows.sort(function (a, b) {
            const aValue = a.getElementsByTagName("td")[columnIndex].innerText;
            const bValue = b.getElementsByTagName("td")[columnIndex].innerText;
            return isNaN(aValue) ? aValue.localeCompare(bValue) : aValue - bValue;
        });

        for (let i = 0; i < rows.length; i++) {
            table.appendChild(rows[i]);
        }
    }
});

/* მთავარი გვერდი */

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    howSlides(slideIndex = n);
 }

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
}


/* რეგისტრაცია */

function validateForm() {
    return validateEmail() && validatePassword();
}

function validatePassword() {
    var password = document.getElementById("password");
    var confirmPassword = document.getElementById("confirmPassword");

    if (password.value !== confirmPassword.value) {
        alert("Passwords don't match!");
        confirmPassword.value = "";
        return false;
    }

    return true;
}

function checkPasswordStrength() {
    var password = document.getElementById("password");
    var passwordStrengthMessage = document.getElementById("password-strength");

    var containsUppercase = /[A-Z]/.test(password.value);
    var containsLowercase = /[a-z]/.test(password.value);
    var containsNumbers = /\d/.test(password.value);
    var containsSymbols = /[!@#$%^&*(),.?":{}|<>]/.test(password.value);

    if (containsUppercase && containsLowercase && containsNumbers && containsSymbols) {
        passwordStrengthMessage.innerHTML = "Password is strong";
        passwordStrengthMessage.className = "strong-password";
    } else if (containsUppercase || containsLowercase || containsNumbers) {
        passwordStrengthMessage.innerHTML = "Medium power password";
        passwordStrengthMessage.className = "medium-password";
    } else {
        passwordStrengthMessage.innerHTML = "Password is weak";
        passwordStrengthMessage.className = "weak-password";
    }
}

function checkPasswordMatch() {
    var password = document.getElementById("password");
    var confirmPassword = document.getElementById("confirmPassword");
    var confirmPasswordPlaceholder = document.getElementById("confirm-password");

    if (password.value !== confirmPassword.value) {
        confirmPasswordPlaceholder.className = "password-mismatch";
    } else {
        confirmPasswordPlaceholder.className = "";
    }
}

function checkMobileNumber() {
    var mobileNumber = document.getElementById("mobileNumber");
    var mobileNumberPlaceholder = document.getElementById("mobile-number");

    if (mobileNumber.value.length !== 9) {
        mobileNumberPlaceholder.className = "invalid-mobile";
    } else {
        mobileNumberPlaceholder.className = "";
    }
}