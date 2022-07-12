const express = require('express');
const router = express.Router();
const controllerRegister = require('../controllers/controllerRegister.js');
const userList = require('../views/users/usersList_JSON.js');

router.get('/', controllerRegister.mostrarRegister);

router.put('/registrar', (req, res) => {
  let i = req.body.id;
  productList[i].name = req.body.name;
  productList[i].price = req.body.price;
  productList[i].disc = req.body.disc;
  productList[i].descs = req.body.descs;
  productList[i].descl = req.body.descl;
  productList[i].image = req.body.image;
  res.redirect('/producto/' + req.body.id + '/mostrar');
});

module.exports = router;
