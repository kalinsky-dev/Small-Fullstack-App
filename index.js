const express = require('express');

const products = [
  {
    id: 'asdf1',
    name: 'Product1',
    price: 110,
  },
  {
    id: 'asdf2',
    name: 'Product2',
    price: 75,
  },
  {
    id: 'asdf3',
    name: 'Product3',
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

// UPDATE

// DELETE

app.listen(3000);
