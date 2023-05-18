const express = require('express');
const app = express();
require('dotenv').config();
const port = process.env.PORT;

// Handlebars usa la carpeta views
var hbs = require('hbs');

app.set('view engine', 'hbs');
// Registro de partials.
hbs.registerPartials(__dirname + '/views/partials');

// Servir contenido estático middleware.
app.use(express.static('public'));

app.get('/', (req, res) => {
    // Renderizar vista con información.
    res.render('home', {
        nombre: 'Modesto',
        titulo: 'Curso de Node'
    });
});

app.get('/generic', (req, res) => {
    // Renderizar vista con información.
    res.render('generic', {
        nombre: 'Modesto',
        titulo: 'Curso de Node'
    });
});

app.get('/elements', (req, res) => {
    // Renderizar vista con información.
    res.render('elements', {
        nombre: 'Modesto',
        titulo: 'Curso de Node'
    });
});

// app.get('/elements', (req, res) => {
//     res.sendFile(`${__dirname}/public/elements.html`);
// });

// app.get('/hola-mundo', (req, res) => {
//     res.send('Hola Mundo en su respectiva ruta')
// });

app.get('*', (req, res) => {
    res.sendFile(`${__dirname}/public/404.html`);
});

app.listen(port, () => {
    console.log(`Aplicación corriendo en el puerto ${port}`)
});
