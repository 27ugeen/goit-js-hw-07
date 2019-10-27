'use strict';

const userInput = document.querySelector('#validation-input');

function handelInput(elem) {
  elem.preventDefault();
  
  const { target } = elem;
  userInput.textContent = target.value;

  userInput.classList.add('invalid');

  if (userInput.textContent.length === +target.dataset.length) {
    userInput.classList.replace('invalid', 'valid');
  } else {
    userInput.classList.replace('valid', 'invalid');
  }
}

userInput.addEventListener('blur', handelInput);
