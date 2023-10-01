const express = require('express');

const app = express();

app.use(express.static('static'));

app.get('/data', (req, res) => {
  res.json({ message: 'hello' });
});

app.listen(3000);
