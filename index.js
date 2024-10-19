const express = require('express');
const cors = require('cors');
const { resolve } = require('path');
const { hotels } = require('./hotel');

const app = express();
const port = 3010;

app.use(cors)
app.use(express.static('static'));


const hotelSortRoute = express.Router()

hotelSortRoute.get('/pricing', (req, res) => {
  let priceParam = req.query.price
  let arr = [...hotels]

  if (priceParam == "high-to-low") {
    arr.sort((a, b) => b.price - a.price)
  }
  else {
    arr.sort((a, b) => a.price - b.price)
  }

  res.json({ "hotels": arr })

})

hotelSortRoute.get('/rating', (req, res) => {
  let ratingParam = req.query.rating
  let arr = [...hotels]

  if (ratingParam == "high-to-low") {
    arr.sort((a, b) => b.rating - a.rating)
  }
  else {
    arr.sort((a, b) => a.rating - b.rating)
  }

  res.json({ "hotels": arr })

})


app.get('/', (req, res) => {
  res.sendFile(resolve(__dirname, 'pages/index.html'));
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
