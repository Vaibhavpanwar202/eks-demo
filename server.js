const express = require('express');
const app = express();
const port = 3000;

app.get('/products', (req, res) => {
  res.json([
    { id: 1, name: 'Phone' },
    { id: 2, name: 'Laptop' }
  ]);
});

app.listen(port, () => {
  console.log(`Product service running on port ${port}`);
});
