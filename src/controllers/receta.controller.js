const MethodsRecipes = {};
const recetasModels = require('../models/receta.model');

// Obtener lista de recetas.

MethodsRecipes.getRecipe = async (__, res) => {
    try {
        const recetas = await recetasModels.find().lean();
        res.status(200).render('get-recipes', { prueba: recetas });
    } catch (err) {
        res.status(500).send('INTERNAL SERVER ERROR=500');
    }
};

module.exports = MethodsRecipes;
