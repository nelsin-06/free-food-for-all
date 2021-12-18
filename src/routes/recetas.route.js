const route = require('express').Router();
const { getRecipe } = require('../controllers/receta.controller');

route.get('/get-recipe', getRecipe);

module.exports = route;
