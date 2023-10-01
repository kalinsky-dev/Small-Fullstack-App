document.querySelector('#load').addEventListener('click', loadProducts);
document.querySelector('form').addEventListener('submit', createProduct);
const list = document.querySelector('ul');
list.addEventListener('click', itemAction);

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
  createAction(li, '[Details]', 'details');
  createAction(li, '[Delete]', 'delete');
  list.appendChild(li);
}

function createAction(li, label, className) {
  const btn = document.createElement('a');
  btn.textContent = label;
  btn.className = className;
  btn.href = 'javascript:void(0)';
  li.appendChild(btn);
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

async function itemAction(event) {
  event.preventDefault();
  if (event.target.tagName == 'A') {
    const id = event.target.parentNode.id;
    // console.log(id);
    if (event.target.className == 'delete') {
      deleteItem(id);
    } else if (event.target.className == 'details') {
      details(id);
    }
  }
}

async function details(id) {
  const res = await fetch('http://localhost:3000/data/' + id);
  const data = await res.json();
  console.log(data);
}

async function deleteItem(id) {
  const res = await fetch('http://localhost:3000/data/' + id, {
    method: 'DELETE',
  });
  if (res.ok) {
    document.getElementById(id).remove();
  }
}
