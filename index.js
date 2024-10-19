const express = require('express');
const cors = require('cors');
const { resolve } = require('path');
const { hotels } = require('./hotel');

const app = express();
const port = 3010;

app.use(cors)
app.use(express.static('static'));

app.get('/', (req, res) => {
  res.sendFile(resolve(__dirname, 'pages/index.html'));
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
