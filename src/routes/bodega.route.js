const route = require('express').Router();
const { getProducts } = require('../controllers/bodega.controller');

route.get('/get-product', getProducts);

module.exports = route;
