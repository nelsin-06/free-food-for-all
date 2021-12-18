/* eslint-disable no-param-reassign */
const express = require('express');
const path = require('path');
const { engine } = require('express-handlebars');
const flash = require('connect-flash');
const session = require('express-session');
const routeReceta = require('./routes/recetas.route');
const routeBodega = require('./routes/bodega.route');
const routePlazaMercado = require('./routes/plazaDeMercado.route');
const routeOrdenarAlmuerzo = require('./routes/ordenarAlmuerzo.route');
const routeCocina = require('./routes/cocina.route');
const routeHome = require('./routes/home.route');
const routeHistorialOrdenes = require('./routes/ordenesPreparadas.route');

// Conexion express.
const app = express();

// Front
app.set('views', path.join(__dirname, 'views'));

app.engine(
    '.hbs',
    engine({
        layoutsDir: path.join(app.get('views'), 'layouts'),
        partialsDir: path.join(app.get('views'), 'partials'),
        defaulLayout: 'main',
        extname: '.hbs',
        helpers: {
            // Function to do basic mathematical operation in handlebar
            math(lvalue, operator, rvalue) {
                lvalue = parseFloat(lvalue);
                rvalue = parseFloat(rvalue);
                return {
                    '+': lvalue + rvalue,
                    '-': lvalue - rvalue,
                    '*': lvalue * rvalue,
                    '/': lvalue / rvalue,
                    '%': lvalue % rvalue,
                }[operator];
            },
        },
    }),
);
app.set('view engine', '.hbs');

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true,
}));
app.use(flash());

// MSG connect-flash
app.use((req, res, next) => {
    res.locals.less_ingredients = req.flash('less_ingredients');
    res.locals.success_cook = req.flash('success_cook');
    next();
});

// Rutas.
app.use(routeReceta);
app.use(routeBodega);
app.use(routePlazaMercado);
app.use(routeOrdenarAlmuerzo);
app.use(routeCocina);
app.use(routeHome);
app.use(routeHistorialOrdenes);

module.exports = app;
