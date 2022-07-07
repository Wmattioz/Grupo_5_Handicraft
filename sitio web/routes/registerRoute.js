const express = require('express');
const router = express.Router();
const controllerRegister = require('../controllers/controllerRegister.js');

router.get('/', controllerRegister.mostrarRegister);

module.exports = router;
