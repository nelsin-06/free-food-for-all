const mongoose = require('mongoose');
const recetaModels = require('../models/receta.model');
const bodegaModels = require('../models/bodega.model');

const URI = `mongodb://mongodb/comedoralegra`;
const db = mongoose.connection;

(async () => {
    try {
        await mongoose.connect(URI, { useUnifiedTopology: true, useNewUrlParser: true });
}   catch (err) {
        console.log("ERROR AL CORRER BASE DE DATOS >>>>>>>" + err);
}
})
();
    db.on('open', async () => {console.log("conectado a la bd")
    
    // La siguiente es una rutina de creacion de datos default para que el programa funcione en entornos locales

    const defaultData = await recetaModels.find();
    if (defaultData === null) {
        
    // Se crean las recetas.

        const receta1 = await new recetaModels({
            nombre: 'receta1',
            ingredients: [
                {ingrediente: 'tomato', cantidad: 2},
                {ingrediente: 'lemon', cantidad: 1},
                {ingrediente: 'lettuce', cantidad: 2},
                {ingrediente: 'onion', cantidad: 1},
            ]
        });
        await receta1.save();

        const receta2 = await new recetaModels({
            nombre: 'receta2',
            ingredients: [
                {ingrediente: 'potato', cantidad: 3},
                {ingrediente: 'chicken', cantidad: 2},
                {ingrediente: 'rice', cantidad: 1},
                {ingrediente: 'cheese', cantidad: 1},
            ]
        });
        await receta2.save();

        const receta3 = await new recetaModels({
            nombre: 'receta3',
            ingredients: [
                {ingrediente: 'ketchup', cantidad: 3},
                {ingrediente: 'rice', cantidad: 2},
                {ingrediente: 'chicken', cantidad: 3},
                {ingrediente: 'potato', cantidad: 1},
            ]
        });
        await receta3.save();

        const receta4 = await new recetaModels({
            nombre: 'receta4',
            ingredients: [
                {ingrediente: 'meat', cantidad: 4},
                {ingrediente: 'onion', cantidad: 2},
                {ingrediente: 'lemon', cantidad: 2},
            ]
        });
        await receta4.save();

        const receta5 = await new recetaModels({
            nombre: 'receta5',
            ingredients: [
                {ingrediente: 'meat', cantidad: 2},
                {ingrediente: 'cheese', cantidad: 2},
                {ingrediente: 'rice', cantidad: 1},
                {ingrediente: 'potato', cantidad: 3},
            ]
        });
        await receta5.save();

        const receta6 = await new recetaModels({
            nombre: 'receta6',
            ingredients: [
                {ingrediente: 'lettuce', cantidad: 3},
                {ingrediente: 'meat', cantidad: 3},
                {ingrediente: 'chicken', cantidad: 3},
                {ingrediente: 'potato', cantidad: 3},
                {ingrediente: 'ketchup', cantidad: 2},
            ]
        });
        await receta6.save();

        // Se crean los productos.

        const producto1 = await new bodegaModels({
            producto: 'potato',
            cantidad: 5,
        });

        await producto1.save();

        const producto2 = await new bodegaModels({
            producto: 'meat',
            cantidad: 5,
        });

        await producto2.save();
        
        const producto3 = await new bodegaModels({
            producto: 'chicken',
            cantidad: 5,
        });

        await producto3.save();

        const producto4 = await new bodegaModels({
            producto: 'tomato',
            cantidad: 5,
        });

        await producto4.save();
    
        const producto5 = await new bodegaModels({
            producto: 'lemon',
            cantidad: 5,
        });

        await producto5.save();

        const producto6 = await new bodegaModels({
            producto: 'rice',
            cantidad: 5,
        });

        await producto6.save();
    
        const producto7 = await new bodegaModels({
            producto: 'ketchup',
            cantidad: 5,
        });

        await producto7.save();
    
        const producto8 = await new bodegaModels({
            producto: 'onion',
            cantidad: 5,
        });

        await producto8.save();

        const producto9 = await new bodegaModels({
            producto: 'cheese',
            cantidad: 5,
        });

        await producto9.save();

        const producto10 = await new bodegaModels({
            producto: 'lettuce',
            cantidad: 5,
        });

        await producto10.save();
    }
});
    db.on('error', (err) => console.error(err));
