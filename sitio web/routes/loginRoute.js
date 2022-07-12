const express = require('express');
const router = express.Router();
const controllerLogin = require('../controllers/controllerLogin.js');

router.get('/', controllerLogin.mostrarLogin);

router.get('/user', controllerLogin.authenticateUser);
/*
router.put('/login', (req, res) => {
  res.send('estoy en login');
     let i = req.body.id;
    productList[i].name = req.body.name;
    productList[i].price = req.body.price;
    productList[i].disc = req.body.disc;
    productList[i].descs = req.body.descs;
    productList[i].descl = req.body.descl;
    productList[i].image = req.body.image;
    res.redirect('/producto/' + req.body.id + '/mostrar'); 
});*/

module.exports = router;
