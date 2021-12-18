const mongoose = require('mongoose');

const recetaSchema = new mongoose.Schema({
    nombre: {
        type: String,
        unique: true,
        require,
    },
    ingredients: {
        type: Object,
    },
});
module.exports = mongoose.model('recetas', recetaSchema);
