const productList = require('../views/products/productList_JSON');

const controllerProducto = {
  mostrarProducto: (req, res) => {
    return res.render('product');
  },

  crearProducto: (req, res) => {},

  editarProducto: (req, res) => {},

  detalleProducto: (req, res) => {
    res.send('Bienvenidos al detalle del producto: ' + req.params.id);
  },
  list: function (req, res) {
    res.render('productList', { productList: productList });
  },

  detalleComentario: (req, res) => {
    if (!req.params.cmt) {
      res.send(`Este articulo todavia no tiene comentarios.`);
    } else {
      res.send(
        `Bienvenidos al detalle del producto: ${req.params.id} comentario numero: ${req.params.cmt}`
      );
    }
  },
};

module.exports = controllerProducto;
