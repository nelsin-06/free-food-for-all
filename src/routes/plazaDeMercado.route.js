const route = require('express').Router();

const { buyProducts, market } = require('../controllers/plazaDeMercado.controller');

route.post('/buy-products', buyProducts);

route.get('/buy-products', market);

module.exports = route;
