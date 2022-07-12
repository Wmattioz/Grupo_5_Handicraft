const productList = require('../views/products/productList_JSON');
const userList = require('../views/users/usersList_JSON');
const userLoggedIn = require('../views/users/userSession_JSON');

const controllerHome = {
  mostrarHome: (req, res) => {
    return res.render('home', {
      productList: productList,
      userLoggedIn: userLoggedIn,
    });
  },
};

module.exports = controllerHome;
