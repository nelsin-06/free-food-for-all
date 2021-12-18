const bodegaModels = require('../models/bodega.model');

// Funcion para agregar la cantidad comprada del producto a la cantidad que se tiene en bodega.

const agreCantidadProducto = async (producto, cantidadComprada) => {
    try {
        const productoBodega = await bodegaModels.findOne({ producto });
        productoBodega.cantidad += cantidadComprada;
        await productoBodega.save();
    } catch (err) {
        // eslint-disable-next-line no-undef
        res.status(500).send('INTERNAL SERVER ERROR=500');
    }
};

module.exports = agreCantidadProducto;
