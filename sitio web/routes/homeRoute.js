const express = require('express');
const router = express.Router();
const controllerHome = require('../controllers/controllerHome.js');

router.get('/', controllerHome.mostrarHome);

module.exports = router;
