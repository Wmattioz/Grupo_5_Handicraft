const express = require('express');
const router = express.Router();
const controllerProducto = require('../controllers/controllerProducto.js');

router.get('/', controllerProducto.mostrarProducto);

module.exports = router;
