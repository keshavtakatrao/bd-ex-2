const express = require('express');
const { hotels } = require('./hotel');

const hotelFilterRoute = express.Router();

let filterHotels = (key, param) => {
    let arr = [...hotels]
    param = param ?? ""
    return arr.filter(item => `${item[key]}`.toLowerCase() == param.toLowerCase())
}


const filterByAmenity = (param) => {
    return filterHotels('amenity', param)
}

const filterByCountry = (param) => {
    return filterHotels('country', param)
}

const filterByCategory = (param) => {
    return filterHotels('category', param)
}

hotelFilterRoute.get('/country', (req, res) => {
    let countryParam = req.query.country

    let result = filterByCountry(countryParam)
    res.json({ hotels: result })
})

hotelFilterRoute.get('/amenity', (req, res) => {
    let amenityParam = req.query.amenity

    let result = filterByAmenity(amenityParam)
    res.json({ hotels: result })
})

hotelFilterRoute.get('/category', (req, res) => {
    let categoryParam = req.query.category

    let result = filterByCategory(categoryParam)
    res.json({ hotels: result })
})

module.exports = hotelFilterRoute
