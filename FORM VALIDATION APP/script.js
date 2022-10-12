const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');
const submit = document.getElementById('submit');


submit.addEventListener('click', function (evt) {
    evt.preventDefault();
    checkUsername();
    checkEmail();
    checkPassword();
    checkPassword2();
})

function checkUsername() {
    const usernameValue = username.value.trim();
    const usernameError = document.getElementById('usernameError');
    if (usernameValue === '') {
        usernameError.innerHTML = 'Username cannot be blank';
    }
}

function checkEmail() {
    const emailValue = email.value.trim();
    const emailError = document.getElementById('email-error');
    if (emailValue === "") {
        emailError.innerHTML = 'Email cannot be blank';
    }

    const regex = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;

    if (!emailValue.match(regex)) {
        emailError.style.display = 'inline-block';
        emailError.innerHTML = "Please enter a valid email address";
    }
}

email.addEventListener('focus', function () {
    const emailError = document.getElementById('email-error');
    emailError.style.display = 'none';
})

function checkPassword() {
    const passwordValue = password.value.trim();
    const passwordError = document.getElementById('password-error');
    if (passwordValue === "") {
        passwordError.style.display = 'inline-block';
        passwordError.innerHTML = 'Password cannot be blank';
    }
    if (passwordValue.length < 8) {
        passwordError.style.display = 'inline-block';
        passwordError.innerHTML = "Password must be at least 8 characters";
    }
}

password.addEventListener('focus', function () {
    const passwordError = document.getElementById('password-error');
    passwordError.style.display = 'none';
})

function checkPassword2() {
    const password2Value = password2.value.trim();
    const password2Error = document.getElementById('password2-error');
    if (password2Value === "") {
        password2Error.style.display = 'inline-block';
        password2Error.innerHTML = 'Password cannot be blank';
    }
    if (password2Value !== password.value) {
        password2Error.style.display = 'inline-block';
        password2Error.innerHTML = "Passwords do not match";
    }
}

password2.addEventListener('focus', function () {
    const password2Error = document.getElementById('password2-error');
    password2Error.style.display = 'none';
})