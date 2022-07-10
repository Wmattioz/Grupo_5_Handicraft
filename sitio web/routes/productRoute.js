const express = require('express');
const router = express.Router();
const controllerProducto = require('../controllers/controllerProducto.js');

router.get('/', controllerProducto.mostrarProducto);

router.get('/:id', controllerProducto.mostrarProducto);

router.post('/editarProducto', controllerProducto.editarProducto);

module.exports = router;
