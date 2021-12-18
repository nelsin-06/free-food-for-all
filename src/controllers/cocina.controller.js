const MethodsCocina = {};
const ordenModels = require('../models/orden.model');
const bodegaModels = require('../models/bodega.model');
const verificarCantidadProduct = require('../helpers/veridicarCantidadProduct');

// Obtener las ordenes pendientes.

MethodsCocina.getOrderToCook = async (req, res) => {
    try {
        const recetaPen = await ordenModels.findOne({ preparado: false }).lean();
        const products = await bodegaModels.find().lean();
        res.status(200).render('cook-recipe', { recetaPendiente: recetaPen, productos: products });
    } catch (err) {
        res.status(500).send('INTERNAL SERVER ERRRO=500');
    }
};

// Preparacion de la orden.

MethodsCocina.cookOrder = async (req, res) => {
    try {
        const respuesta = await verificarCantidadProduct();
        if (!respuesta) {
            req.flash('less_ingredients', 'No tienes los ingredientes necesarios para preparar la receta, dirijase a "Comprar ingredientes" para comprar los ingredientes faltantes');
            res.status(200).redirect('cook-order');
        } else {
            const recetaSelec = await ordenModels.findOne({ preparado: false });
            recetaSelec.preparado = true;
            await recetaSelec.save();
            recetaSelec.receta.ingredients.forEach(async (element) => {
                const ingrediente = await bodegaModels.findOne({ producto: element.ingrediente });
                ingrediente.cantidad -= element.cantidad;
                recetaSelec.preparado = true;
                await ingrediente.save();
            });
            req.flash('success_cook', 'Se preparo exitosamente, por favor seleccione otra deliciosa receta');
            res.status(201).redirect('/order-lunch');
        }
    } catch (err) {
        res.status(500).send('INTERNAL SERVER ERROR=500');
    }
};

module.exports = MethodsCocina;
