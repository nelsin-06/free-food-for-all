const MethodsMarketPlace = {};
const fetch = require('node-fetch');
const agreCantidadProducto = require('../helpers/agreCantidadProduct');
const HistorialModels = require('../models/historialCompras.models');

let mensaje = '';

// Obtener lista de productos para comprar.

MethodsMarketPlace.market = async (req, res) => {
    res.status(200).render('buy-products', { mensaje });
};

// Comprar productos en el mercado.

MethodsMarketPlace.buyProducts = async (req, res) => {
    try {
        const { producto } = req.body;
        const valor = await fetch(`https://recruitment.alegra.com/api/farmers-market/buy?ingredient=${producto}`);
        const { quantitySold: cantidadCompra } = await valor.json();
        if (cantidadCompra === undefined) {
            res.status(200).redirect('buy-products');
            mensaje = 'Solo se permite comprar un producto a la vez, por favor intentelo nuevamente :(';
        } else if (cantidadCompra === 0) {
            res.status(200).redirect('buy-products');
            mensaje = `No hay unidades disponibles del ingrediente ${producto} :(`;
        } else {
            agreCantidadProducto(producto, cantidadCompra);
            mensaje = `Se compro exitosamente ${cantidadCompra} unidades del ingrediente ${producto}`;
            const NewRegistro = await new HistorialModels({
                compras: mensaje,
            });
            await NewRegistro.save();
            res.status(201).redirect('buy-products');
        }
    } catch (err) {
        res.status(500).send('INTERNAL SERVER ERROR=500');
    }
};

module.exports = MethodsMarketPlace;
