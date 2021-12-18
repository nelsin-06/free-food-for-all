const mongoose = require('mongoose');

const ordenSchema = new mongoose.Schema({
    preparado: {
        type: Boolean,
        default: false,
    },
    receta: {
        type: Object,
    },
});
module.exports = mongoose.model('ordenes', ordenSchema);
