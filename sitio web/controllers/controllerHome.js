const productList = require('../views/products/productList_JSON');

const controllerHome = {
  mostrarHome: (req, res) => {
    return res.render('home', { productList: productList });
  },
};

module.exports = controllerHome;
