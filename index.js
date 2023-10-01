const express = require('express');

const products = [
  {
    id: 'asdf1',
    name: 'Product 1',
    price: 110,
  },
  {
    id: 'asdf2',
    name: 'Product 2',
    price: 125,
  },
  {
    id: 'asdf3',
    name: 'Product 3',
    price: 165,
  },
];

const app = express();

app.use(express.static('static'));
// Parse the body of the request
app.use(express.json());

// CREATE
app.post('/data', (req, res) => {
  // console.log(req.body);
  const record = {
    id: ('000000' + ((Math.random() * 999999) | 0).toString(16)).slice(-6),
    name: req.body.name,
    price: Number(req.body.price),
  };
  // console.log(record);
  products.push(record);
  res.status(201).json(record);
});

// READ
app.get('/data', (req, res) => {
  res.json(products);
});

app.get('/data/:id', (req, res) => {
  const item = products.find((x) => x.id == req.params.id);
  res.json(item);
});

// UPDATE
app.put('/data/:id', (req, res) => {
  const item = products.find((x) => x.id == req.params.id);
  item.name = req.body.name;
  item.price = Number(req.body.price);
  res.status(202).end();
});

// DELETE
app.delete('/data/:id', (req, res) => {
  const itemIndex = products.findIndex((x) => x.id == req.params.id);
  products.splice(itemIndex, 1);
  res.status(202).end();
});

app.listen(3000);
