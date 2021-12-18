const mongoose = require('mongoose');

const bodegaSchema = new mongoose.Schema({
    producto: {
        type: String,
        unique: true,
        required: true,
    },
    cantidad: {
        type: Number,
        required: true,
    },
});
module.exports = mongoose.model('bodegas', bodegaSchema);
