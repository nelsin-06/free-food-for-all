const route = require('express').Router();
const home = require('../controllers/home.controller');

route.get('/', home);

module.exports = route;
