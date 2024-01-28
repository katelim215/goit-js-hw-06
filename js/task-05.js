const nameInput = document.getElementById('name-input');

nameInput.addEventListener('input', function() {
    const inputValue = this.value.trim();
    const nameOutput = document.getElementById('name-output');

    if (inputValue === '') {
        nameOutput.textContent = 'Anonymous';
    } else {
        nameOutput.textContent = inputValue;
    }
});