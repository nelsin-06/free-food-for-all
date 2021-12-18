const route = require('express').Router();
const { orderLunch, lunch } = require('../controllers/ordenarAlmuerzo.controller');
const ordenPreparada = require('../middlewares/ordenPreparada');

route.get('/order-lunch', lunch);

route.post('/order-lunch', ordenPreparada, orderLunch);

module.exports = route;
