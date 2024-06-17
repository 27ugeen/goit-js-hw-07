'use strict';

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

// Select elements
const changeColorButton = document.querySelector('button.change-color');
const colorSpan = document.querySelector('span.color');
const body = document.body;

// Add click event listener to the button
changeColorButton.addEventListener('click', function () {
  // Generate random color
  const randomColor = getRandomHexColor();

  // Change background color of body
  body.style.backgroundColor = randomColor;

  // Update span text with the color
  colorSpan.textContent = randomColor;
});
