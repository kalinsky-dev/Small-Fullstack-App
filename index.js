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
// Parse the body of the request
app.use(express.json());

app.get('/data', (req, res) => {
  res.json(products);
});

app.post('/data', (req, res) => {
  console.log(req.body);

  res.end();
});

app.listen(3000);
