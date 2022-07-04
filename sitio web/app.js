const express = require('express');

const app = express();

// esta porción de código hay que poner para traer el modulo de ruta y asi vincular controlador// 
const mainRoute =require('./routes/mainRoute')


//si optimizamos el código a MVC este const path ya no sirve //
const path = require('path');


app.listen(process.env.PORT || 3000, () => console.log('Server runnning'));



////mejorar este código con propuesta debajo///
app.use('/public', express.static(__dirname + '/public'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/views/home.ejs'));
});

app.get('/home.html', (req, res) => {
  res.sendFile(path.join(__dirname, '/views/home.ejs'));
});

app.get('/register.html', (req, res) => {
  res.sendFile(path.join(__dirname, '/views/register.ejs'));
});

app.get('/login.html', (req, res) => {
  res.sendFile(path.join(__dirname, '/views/login.htmlejs'));
});

app.get('/producto.html', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/producto.ejs'));
  });





  /* Nuevo código código MVC. - creo estructura de carpetas y controlador + archivo rutas


app.use(express.static('./public'))

app.set('view engine', 'ejs');

app.use('/', mainRoute);
app.use('/login', mainRoute);
app.use('/register', mainRoute);
app.use('/producto', mainRoute);


  */
