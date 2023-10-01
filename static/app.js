document.querySelector('#load').addEventListener('click', loadProducts);
document.querySelector('form').addEventListener('submit', createProduct);
const list = document.querySelector('ul');
list.addEventListener('click', deleteItem);

async function loadProducts() {
  const res = await fetch('http://localhost:3000/data');
  const data = await res.json();
  // console.log(data);

  list.replaceChildren();

  for (let item of data) {
    createRow(item);
  }
}

function createRow(item) {
  const li = document.createElement('li');
  li.id = item.id;
  li.textContent = `${item.name} - $ ${item.price}  `;
  const btn = document.createElement('a');
  btn.textContent = '[Delete]';
  btn.href = 'javascript:void(0)';
  li.appendChild(btn);
  list.appendChild(li);
}

async function createProduct(event) {
  event.preventDefault();
  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);
  // console.log(data);
  const res = await fetch('http://localhost:3000/data', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  const item = await res.json();
  createRow(item);
}

async function deleteItem(event) {
  event.preventDefault();
  if (event.target.tagName == 'A') {
    const id = event.target.parentNode.id;
    // console.log(id);
    const res = await fetch('http://localhost:3000/data/' + id, {
      method: 'DELETE',
    });
    if (res.ok) {
      event.target.parentNode.remove();
    }
  }
}
