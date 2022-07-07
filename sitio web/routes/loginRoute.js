const express = require('express');
const router = express.Router();
const loginHandler = require('../controllers/controllerLogin.js');

router.get('/', loginHandler.mostrarLogin);

module.exports = router;
