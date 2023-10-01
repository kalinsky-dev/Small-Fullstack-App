document.querySelector('#load').addEventListener('click', loadProducts);
document.querySelector('form').addEventListener('submit', createProduct);
const list = document.querySelector('ul');

async function loadProducts() {
  const res = await fetch('http://localhost:3000/data');
  const data = await res.json();
  // console.log(data);
  
  list.replaceChildren();

  for (let item of data) {
    const li = document.createElement('li');
    li.id = item.id;
    li.textContent = `${item.name} - $ ${item.price}`;
    const btn = document.createElement('a');
    btn.textContent = '[Delete]';
    li.appendChild(btn);
    list.appendChild(li);
  }
}

async function createProduct(event) {
  event.preventDefault();
  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);
  // console.log(data);
  fetch('http://localhost:3000/data', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
}
