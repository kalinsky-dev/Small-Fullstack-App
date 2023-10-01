const express = require('express');

const app = express();

app.use(express.static('static'));

app.get('/data', (req, res) => {
  console.log('request made!');
  res.end();
});

app.listen(3000);
