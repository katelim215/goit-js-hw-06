function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const createButton = document.querySelector('[data-create]');
const destroyButton = document.querySelector('[data-destroy]');
const input = document.querySelector('input');
const boxesContainer = document.getElementById('boxes');

function createBoxes(amount) {
  const baseSize = 30;
  for (let i = 0; i < amount; i++) {
    const box = document.createElement('div');
    const size = baseSize + i * 10;
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor = getRandomHexColor();
    boxesContainer.appendChild(box);
  }
}

function destroyBoxes() {
  boxesContainer.innerHTML = '';
}

createButton.addEventListener('click', () => {
  const numberOfBoxes = parseInt(input.value, 10);
  createBoxes(numberOfBoxes);
});

destroyButton.addEventListener('click', destroyBoxes);
