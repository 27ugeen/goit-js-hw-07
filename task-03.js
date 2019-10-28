'use strict';

const images = [
  {
    url:
      'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat'
  },
  {
    url:
      'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish'
  },
  {
    url:
      'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running'
  }
];

// const gallery = document.querySelector('#gallery');

// const addImages = array => {
//   array.forEach(({ url, alt }) => {
//     gallery.insertAdjacentHTML(
//       'afterbegin',
//       `<li><img src="${url}" alt="${alt}"/></li>`
//     );
//     gallery.style.cssText =
//       'display: flex; flex-wrap: wrap; justify-content: flex-start; list-style: none;';
//     const item = document.querySelector('img');
//     item.style.cssText = 'width: 630px; height: 375px;';
//   });
// };

// addImages(images);
//=================================================

const gallery = {
  listGallery: document.querySelector('#gallery')
};

const addImg = images.filter(({ url, alt }) => {
  gallery.listGallery.insertAdjacentHTML(
    'afterbegin',
    `<li><img src="${url}" alt="${alt}"/></li>`
  );
  gallery.listGallery.classList.add('gallery');

  const item = document.querySelector('img');
  item.style.cssText = 'width: 70%; height: auto;';
});

gallery.listGallery.append(addImg);
