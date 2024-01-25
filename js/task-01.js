// let categoriesList = document.getElementById('categories');
let categories = document.querySelectorAll('.item');
console.log('Number of categories:', categories.length);


for (let i = 0; i < categories.length; i++) {
  const category = categories[i];
  const header = category.querySelector('h2');
  const elementsList = category.querySelector('ul');
  const elements = elementsList.querySelectorAll('li');
  
  console.log('Category:', header.textContent);
  console.log('Elements:', elements.length);
}