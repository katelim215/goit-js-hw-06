const validationInput = document.getElementById('validation-input');

validationInput.addEventListener("blur", () => {
    const enteredCharacters = validationInput.value.length;
    const requiredCharacters = parseInt(validationInput.getAttribute("data-length"));

    if (enteredCharacters === requiredCharacters) {
        validationInput.classList.remove("invalid");
        validationInput.classList.add("valid");
    } else {
        validationInput.classList.remove("valid");
        validationInput.classList.add("invalid");
    }
})

