const ordenModels = require('../models/orden.model');

// Encargado de verificar que no hayan ordenes pendientes antes de generar una nueva orden.

const ordenPreparada = async (req, res, next) => {
    try {
        const orden = await ordenModels.findOne({ preparado: false });
        if (orden) {
            req.flash('less_ingredients', 'Todas las ordenes deben estar preparadas antes de poder seleccionar una nueva receta');
            res.status(200).redirect('/cook-order');
        } else { next(); }
    } catch (err) {
        res.status(500).send('INTERNAL SERVER ERROR');
    }
};

module.exports = ordenPreparada;
