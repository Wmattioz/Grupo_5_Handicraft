const productList = require('../views/products/productList_JSON');
const userList = require('../views/users/usersList_JSON');

const controllerHome = {
  mostrarHome: (req, res) => {
    return res.render('home', { productList: productList, userList: userList });
  },
};

module.exports = controllerHome;
