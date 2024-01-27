let counterValue = 0;

const counter = document.getElementById('counter');
    counter.addEventListener('click', event => {
    if (event.target.dataset.action === 'decrement') {
        counterValue--;
    } else if (event.target.dataset.action === 'increment') {
        counterValue++;
    }

    document.getElementById('value').textContent = counterValue;
});