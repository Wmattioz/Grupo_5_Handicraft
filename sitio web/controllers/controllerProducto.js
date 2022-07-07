const controllerProducto = {
  mostrarProducto: (req, res) => {
    return res.render('producto');
  },

  crearProducto: (req, res) => {},

  editarProducto: (req, res) => {},

  detalleProducto: (req, res) => {
    res.send('Bienvenidos al detalle del producto: ' + req.params.id);
  },

  detalleComentarioProducto: (req, res) => {
    if (!req.params.cmt) {
      res.send('Este articulo todavia no tiene comentarios.');
    } else {
      res.send(
        'Bienvenidos al detalle del producto: ' +
          req.params.id +
          ' cuyos comentarios son: ' +
          req.params.cmt
      );
    }
  },
};

module.exports = controllerProducto;
