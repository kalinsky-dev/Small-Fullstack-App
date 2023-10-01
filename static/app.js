document.querySelector('button').addEventListener('click', loadProducts);

async function loadProducts() {
  const res = await fetch('http://localhost:3000/data');
  const data = await res.json();
  console.log(data);
}
