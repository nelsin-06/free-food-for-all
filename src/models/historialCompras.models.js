const mongoose = require('mongoose');

const historySchema = new mongoose.Schema({
    compras: {
        type: String,
    },
});
module.exports = mongoose.model('historialCompras', historySchema);
