const ulChildsSum = document.querySelector('#categories').children.length;
console.log(`Number of categories: ${ulChildsSum}`);

let category = document.getElementsByTagName('h2')['0'].textContent;
console.log(`Category: ${category}`)

let sumOfElements = document.getElementsByTagName('ul')['1'].children.length;
console.log(`Elements: ${sumOfElements}`)

category = document.getElementsByTagName('h2')['1'].textContent;
console.log(`Category: ${category}`)

sumOfElements = document.getElementsByTagName('ul')['2'].children.length;
console.log(`Elements: ${sumOfElements}`)

category = document.getElementsByTagName('h2')['2'].textContent;
console.log(`Category: ${category}`)


sumOfElements = document.getElementsByTagName('ul')['3'].children.length;
console.log(`Elements: ${sumOfElements}`)

