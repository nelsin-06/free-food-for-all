const ordenModels = require('../models/orden.model');

const listaOrdenes = async (__, res) => {
    try {
        const lista = await ordenModels.find().lean();
        res.status(200).render('order-history', { lista });
    } catch (err) {
        res.status(500).send('INTERNAL SERVER ERROR=500');
    }
};

module.exports = listaOrdenes;
