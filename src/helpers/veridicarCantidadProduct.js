const ordenModels = require('../models/orden.model');
const bodegaModels = require('../models/bodega.model');

const verificarCantidadProduct = async () => {
    try {
        let validacion = true;
        const { receta: recetaSelec } = await ordenModels.findOne({ preparado: false });
        for (let i = 0; i < recetaSelec.ingredients.length; i += 1) {
            const element = recetaSelec.ingredients[i];
            // eslint-disable-next-line no-await-in-loop
            const ingrediente = await bodegaModels.findOne({ producto: element.ingrediente });
            if (ingrediente.cantidad < element.cantidad) {
                i = recetaSelec.ingredients.length;
                validacion = false;
            }
        } return validacion;
    } catch (err) {
        return null;
    }
};

module.exports = verificarCantidadProduct;
