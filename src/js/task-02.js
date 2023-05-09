const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

let ul = document.querySelector('#ingredients');
let li = document.createElement("li");

document.querySelector('#ingredients').insertAdjacentHTML('beforeend', ingredients
  .map(n => `<li>${n}</li>`)
  .join('')
);