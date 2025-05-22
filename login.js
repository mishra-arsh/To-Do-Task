const input = document.querySelector(".name-input");
const email = document.querySelector(".email-input");
const password = document.querySelector(".password-input");
const submitBtn = document.querySelector(".submit-btn");
const form = document.querySelector("form");
const errorMsg = document.querySelector(".errorMsg");

form.addEventListener('submit', (e) => {
    let message = [];
    if (input.value === '' || input.value === null) {
        message.push("Name is required");
        errorMsg.innerText = "* Name is required";
        errorMsg.style.display = "block";
        errorMsg.style.color = "red";
        errorMsg.style.fontWeight = "bold";
        e.preventDefault();
    }

    if (email.value === '' || email.value === null){
        errorMsg.innerText = "* Email is required";
        errorMsg.style.display = "block";
        errorMsg.style.color = "red";
        errorMsg.style.fontWeight = "bold";
        e.preventDefault();
    }
    
    if (password.value === '') {
        errorMsg.innerText = "* Password is required";
        errorMsg.style.display = "block";
        errorMsg.style.color = "red";
        errorMsg.style.fontWeight = "bold";
        e.preventDefault();
    }
    else if (password.value.length < 6) {
        errorMsg.innerText = "* Password must be more than 6 words";
        errorMsg.style.display = "block";
        errorMsg.style.color = "red";
        errorMsg.style.fontWeight = "bold";
        e.preventDefault();
}
form.reset();
//   errorMsg.innerText = '';
});