const express = require('express');
const cors = require('cors');
const { resolve } = require('path');
const { hotels } = require('./hotel');
const hotelSortRoute = require('./sort');
const hotelFilterRoute = require('./filter');

const app = express();
const port = 3010;

app.use(cors());
app.use(express.static('static'));

const hotelRoute = express.Router();

hotelRoute.get('/', (req, res) => {
  res.json({ "hotels": hotels });
});

hotelRoute.use('/sort', hotelSortRoute);
hotelRoute.use('/filter', hotelFilterRoute)
app.use('/hotels', hotelRoute);

app.get('/', (req, res) => {
  res.sendFile(resolve(__dirname, 'pages/index.html'));
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
