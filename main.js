const form = document.querySelector('form');
const username = document.querySelector('.username');
const email = document.querySelector('.email');
const password = document.querySelector('.password');
const confirmPassword = document.querySelector('.confirm-password');
const formGroup = document.querySelector('.form-group')

form.addEventListener('submit', (e)=> {
    e.preventDefault();

    if(username.value === "") {
        showError(username, 'Username is required')
    } else {
        showSuccess(username)
    }

    if(email.value === "") {
        showError(email, "Email is required")
    } else if(!isEmail(email.value)) {
        showError(email, 'Please enter a valid email');
    } else {
        showSuccess(email)
    }

    if(password.value === "") {
        showError(password, "Password is required")
    } else if(!isPassword(password.value)) {
        showError(password, 'Must be at least 8 characters and contain 1 letter and 1 number')
    } else {
        showSuccess(password)
    }

    if(confirmPassword.value === "") {
        showError(confirmPassword, "Password does not match")
    } else if(password.value != confirmPassword.value) {
        showError(confirmPassword, "Password does not match")
    } 
    else {
        showSuccess(confirmPassword)
    }
});


function showError(input, message) {
    const inputParent = input.parentElement;
    inputParent.className = "form-group error"
    const errorMessage = inputParent.querySelector('.error-message');
    errorMessage.innerHTML = message;
};

function showSuccess(input) {
    const inputParent = input.parentElement;
    inputParent.className = "form-group success";
};

//REGEX FOR EMAIL
function isEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
};

//REGEX FOR PASSWORD
function isPassword(password) {
    return /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(password);
};

