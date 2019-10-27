'use strict';

const refs = {
  input: document.getElementById('name-input'),
  name: document.getElementById('name-output')
};

function handelInput(elem) {
  elem.preventDefault();
  const { target } = elem;
  refs.name.textContent = target.value;
}

refs.input.addEventListener('input', handelInput);
