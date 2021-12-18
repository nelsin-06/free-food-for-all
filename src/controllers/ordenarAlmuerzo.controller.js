const MethodsOrderluch = {};
const recetasModels = require('../models/receta.model');
const OrdenesModels = require('../models/orden.model');
const numeroRandom = require('../helpers/numeroRandom');

// Seleccionar plato al azar.

MethodsOrderluch.lunch = async (req, res) => {
    res.status(200).render('order-lunch');
};

MethodsOrderluch.orderLunch = async (req, res) => {
    try {
        const recetas = await recetasModels.find();
        const recetaSeleccionada = recetas[numeroRandom()];
        const nuevaOrden = await new OrdenesModels({
            receta: recetaSeleccionada,
        });
        await nuevaOrden.save();
        res.status(201).redirect('/cook-order');
    } catch (err) {
        res.status(500).send('INTERNAL SERVER ERROR=500');
    }
};

module.exports = MethodsOrderluch;
