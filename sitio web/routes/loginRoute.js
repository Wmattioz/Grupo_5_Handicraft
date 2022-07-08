const express = require('express');
const router = express.Router();
const controllerLogin = require('../controllers/controllerLogin.js');

router.get('/', controllerLogin.mostrarLogin);

module.exports = router;
