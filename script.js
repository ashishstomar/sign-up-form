
const errorDisplay = document.querySelector(".errorDisplay");
const confirmPassword = document.querySelector("#confirmPassword");
const password = document.querySelector("#password");
const form = document.querySelector('.form');
const btn = document.querySelector('#btn');

confirmPassword.addEventListener('input', () => {

    if(confirmPassword.value === ''){
        errorDisplay.textContent = "";
    }
    if(password.value != confirmPassword.value){
        errorDisplay.textContent = "Password doesn't match";
        confirmPassword.classList.add('passwordError');
    }   
    else {
        errorDisplay.textContent = "";
        confirmPassword.classList.remove('passwordError');
    }
})

form.addEventListener('submit', (e) => {
    if(password.value != confirmPassword.value) {
        e.preventDefault();
    }
    else{
        alert("Success! of course this is a fake sign-up form!")
    }
})
