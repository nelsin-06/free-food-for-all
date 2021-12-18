const route = require('express').Router();
const { cookOrder, getOrderToCook } = require('../controllers/cocina.controller');
const recetaPendiente = require('../middlewares/recetasPendientes');

route.get('/cook-order', getOrderToCook);

route.post('/cook-order', recetaPendiente, cookOrder);

module.exports = route;
