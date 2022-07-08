const express = require('express');
const router = express.Router();
const controllerProducto = require('../controllers/controllerProducto.js');

router.get('/', controllerProducto.mostrarProducto);

router.get('/:id', controllerProducto.mostrarProducto);

router.get('/:id/comentarios/:cmt?', controllerProducto.detalleComentario);

module.exports = router;
