document.querySelector('button').addEventListener('click', loadProducts);

async function loadProducts() {
  fetch('http://localhost:3000/data');
}
