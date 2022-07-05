const express = require('express');
const app = express();
const mainRoute =require('./routes/mainRoute')
const path = require('path');

app.set('view engine', 'ejs');
app.use('/public', express.static(__dirname + '/public'));
app.listen(process.env.PORT || 3000, () => console.log('Server runnning'));




app.get('/', (req, res) => {
  res.render('home');
});

app.get('/home.ejs', (req, res) => {
  res.render('home');
});

app.get('/cart.ejs', (req, res) => {
  res.render('cart');
});

app.get('/login.ejs', (req, res) => {
  res.render('login');
});

app.get('/register.ejs', (req, res) => {
  res.render('register');
});

app.get('/producto.ejs', (req, res) => {
  res.render('producto');
});



  /* Nuevo código código MVC. - creo estructura de carpetas y controlador + archivo rutas




app.set('view engine', 'ejs');

app.use('/', mainRoute);
app.use('/login', mainRoute);
app.use('/register', mainRoute);
app.use('/producto', mainRoute);
app.use('/cart', mainRoute);

  */
