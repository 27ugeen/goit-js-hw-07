'use strict';

const refs = {
  counter: document.querySelector('#counter'),
  value: document.querySelector('#value')
};

const state = {
  counter: 0,
  increment() {
    state.counter += 1;
  },
  decrement() {
    state.counter -= 1;
  }
};

function handleClick({ target }) {
  state[target.dataset.action]();
  refs.value.textContent = state.counter;
}

refs.counter.addEventListener('click', handleClick);