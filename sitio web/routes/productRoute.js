const express = require('express');
const router = express.Router();
const controllerProducto = require('../controllers/controllerProducto.js');
const productList = require('../views/products/productList_JSON.js');

router.get('/', controllerProducto.mostrarProducto);

router.get('/:id', controllerProducto.mostrarProducto);

router.get('/:id/editar', controllerProducto.editarProducto);

router.put('/editar', (req, res) => {
  let i = req.body.id;
  i--;
  productList[i].name = req.body.name;
  productList[i].price = req.body.price;
  productList[i].disc = req.body.disc;
  productList[i].descs = req.body.descs;
  productList[i].descl = req.body.descl;
  productList[i].image = req.body.image;
  res.redirect('/producto/' + req.body.id);
});

router.get('/:id/comentarios/:cmt?', controllerProducto.detalleComentario);

module.exports = router;
