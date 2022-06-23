let express = require('express');
let router = express.Router();
const controller = require('../controllers/controller.js');

router.get('/', controller.home);

router.get('/home', controller.home);

router.get('/register.html', controller.register);

router.get('/login.html', controller.login);

module.exports = router;