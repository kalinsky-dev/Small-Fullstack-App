const express = require('express');

const products = [
  {
    name: 'Product1',
    price: 110,
  },
  {
    name: 'Product2',
    price: 75,
  },
  {
    name: 'Product3',
    price: 165,
  },
];

const app = express();

app.use(express.static('static'));

app.get('/data', (req, res) => {
  res.json(products);
});

app.listen(3000);
