let express = require('express');
const controller = require('../controllers/controller.js');

let router = express.Router();

router.get('/', controller.home);

router.get('/home.html', controller.home);

router.get('/home', controller.home);

router.get('/register.html', controller.register);

router.get('/login.html', controller.login);

module.exports = router;