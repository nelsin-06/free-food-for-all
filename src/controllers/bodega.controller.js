const MethodsBodega = {};
const bodegaModels = require('../models/bodega.model');
const historialModels = require('../models/historialCompras.models');
// Obtener lista de productos disponibles.

MethodsBodega.getProducts = async (__, res) => {
    try {
        const historial = await historialModels.find().lean();
        const products = await bodegaModels.find().lean();
        res.status(200).render('get-products', { productos: products, historialCompras: historial });
    } catch (err) {
        res.status(500).send('INTERNAL SERVER ERROR=500');
    }
};

module.exports = MethodsBodega;
