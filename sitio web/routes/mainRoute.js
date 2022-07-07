const express = require('express');
const router = express.Router();
const controllerHome = require('../controllers/controllerHome');
const controllerRegister = require('../controllers/controllerRegister');
const controllerLogin = require('../controllers/controllerLogin');
const controllerProducto = require('../controllers/controllerProducto');
const controllerCart = require('../controllers/controllerCart');
const controllerConstruccion = require('../controllers/controllerConstruccion');

//const mainController = require('../controllers/mainController');
//const { mostrarHome } = require('../controllers/controllerHome');

router.get('/', controllerHome.mostrarHome);

router.get('/home', controllerHome.mostrarHome);

router.get('/register', controllerRegister.mostrarRegister);

router.get('/login', controllerLogin.mostrarLogin);

router.get('/producto', controllerProducto.mostrarProducto);

router.get('/cart', controllerCart.mostrarCart);

router.get('/enConstruccion', controllerConstruccion.mostrarConstruccion);

module.exports = router;
