const express = require('express');
const { hotels } = require('./hotel');
const hotelSortRoute = express.Router();

hotelSortRoute.get('/pricing', (req, res) => {
    let priceParam = req.query.price;
    let arr = [...hotels];

    if (priceParam == "high-to-low") {
        arr.sort((a, b) => b.price - a.price);
    } else {
        arr.sort((a, b) => a.price - b.price);
    }

    res.json({ "hotels": arr });
});

hotelSortRoute.get('/rating', (req, res) => {
    let ratingParam = req.query.rating;
    let arr = [...hotels];

    if (ratingParam == "high-to-low") {
        arr.sort((a, b) => b.rating - a.rating);
    } else {
        arr.sort((a, b) => a.rating - b.rating);
    }

    res.json({ "hotels": arr });
});

hotelSortRoute.get('/reviews', (req, res) => {
    let reviewsParam = req.query.reviews;
    let arr = [...hotels];

    if (reviewsParam == "most-to-least") {
        arr.sort((a, b) => b.reviews - a.reviews);
    } else {
        arr.sort((a, b) => a.reviews - b.reviews);
    }

    res.json({ "hotels": arr });
});

module.exports = hotelSortRoute