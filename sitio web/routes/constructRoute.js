const express = require('express');
const router = express.Router();
const controllerConstruccion = require('../controllers/controllerConstruccion.js');

router.get('/', controllerConstruccion.mostrarConstruccion);

module.exports = router;
