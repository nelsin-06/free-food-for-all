const ordenModels = require('../models/orden.model');

// Encargada de verificar que hayan recetas para que la cocine prepare.

const recetaPendiente = async (__, res, next) => {
    try {
        const orden = await ordenModels.findOne({ preparado: false });
        if (orden) {
            next();
        } else {
            res.status(200).send('No hay recetas pendientes para cocinar.');
        }
    } catch (err) {
        res.status(500).send('INTERNAL SERVER ERROR');
    }
};

module.exports = recetaPendiente;
