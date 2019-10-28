'use strict';

const refs = {
  input: document.getElementById('name-input'),
  name: document.getElementById('name-output')
};

const defaultName = refs.name.textContent;

function handelInput(elem) {
  elem.preventDefault();

  const { target } = elem;

  if (!target.value) {
    refs.name.textContent = defaultName;
  } else {
    refs.name.textContent = target.value;
  }
}

refs.input.addEventListener('input', handelInput);
