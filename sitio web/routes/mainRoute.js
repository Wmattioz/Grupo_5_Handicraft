const express = require('express');
const router = express.Router();

const mainController = require('../controllers/mainController')

router.get('/', mainController.mostrarHome);

router.get('/register', mainController.mostrarRegister);

router.get('/login', mainController.mostrarLogin);

router.get('/login', mainController.mostrarProducto);

router.get('/cart', mainController.mostrarCart);

module.exports = router;