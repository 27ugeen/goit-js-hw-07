'use script';

// Напиши скрипт, который выполнит следующие операции.

// Посчитает и выведет в консоль количество категорий в ul#categories, то есть элементов li.item.
// Получится 'В списке 3 категории.'.

// Для каждого элемента li.item в списке ul#categories, найдет и выведет в консоль
//текст заголовка элемента (тега h2) и количество элементов в категории (всех вложенных в него элементов li).

// Например для первой категории получится:

// Категория: Животные
// Количество элементов: 4
//=======================================================

const categories = document.querySelectorAll('.item');
// console.dir(categories);

console.log(`В списке ${categories.length} категории.`);

const res = [...categories].forEach(el => {
  console.log(
    `Категория: ${el.firstElementChild.textContent}\nКоличество элементов: ${el.lastElementChild.children.length}`
  );
});
