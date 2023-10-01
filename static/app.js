document.querySelector('button').addEventListener('click', loadProducts);
document.querySelector('form').addEventListener('submit', createProduct);
const list = document.querySelector('ul');

async function loadProducts() {
  const res = await fetch('http://localhost:3000/data');
  const data = await res.json();
  // console.log(data);

  for (let item of data) {
    const li = document.createElement('li');
    li.textContent = `${item.name} - $ ${item.price}`;
    list.appendChild(li);
  }
}

async function createProduct(event) {
  event.preventDefault();
  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);
  console.log(data);
}
