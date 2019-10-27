'use strict';

const refs = {
  input: document.getElementById('font-size-control'),
  text: document.getElementById('text')
};

// console.log((refs.text.style.fontSize = '100%'));

function changeRange(elem) {
  elem.preventDefault();
  const { target } = elem;

  refs.text.style.fontSize = `${target.value * 2}%`;
}

refs.input.addEventListener('input', changeRange);
