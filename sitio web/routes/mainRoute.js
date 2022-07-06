const express = require('express');
const router = express.Router();

const mainController = require('../controllers/mainController');

router.get('/', mainController.mostrarHome);

router.get('/home', mainController.mostrarHome);

router.get('/register', mainController.mostrarRegister);

router.get('/login', mainController.mostrarLogin);

router.get('/producto', mainController.mostrarProducto);

router.get('/cart', mainController.mostrarCart);

router.get('/enConstruccion', mainController.mostrarConstruccion);

module.exports = router;
