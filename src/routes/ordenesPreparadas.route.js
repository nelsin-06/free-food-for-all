const route = require('express').Router();
const listaOrdenes = require('../controllers/ordenesPreparadas.controllers');

route.get('/order-history', listaOrdenes);

module.exports = route;
