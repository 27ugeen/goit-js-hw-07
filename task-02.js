'use strict';

const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы'
];

// const ingredientsList = document.querySelector('#ingredients');

// const addIngredients = array => {
//   array.forEach(el => {
//     const item = document.createElement('li');

//     item.textContent = `${el}`;

//     ingredientsList.appendChild(item);
//   });
// };

// addIngredients(ingredients);
//=====================================================

const ingredientsList = {
  list: document.querySelector('#ingredients')
};

const listItem = ingredients.map(el => {
  const item = document.createElement('li');
  item.textContent = el;
  return item;
});

ingredientsList.list.append(...listItem);
