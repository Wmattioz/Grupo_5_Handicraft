const userList = require('../views/users/usersList_JSON');
const userLoggedIn = require('../views/users/userSession_JSON');

const controllerLogin = {
  mostrarLogin: (req, res) => {
    return res.render('users/login', {
      userLoggedIn: userLoggedIn,
    });
  },
  accountDetails: (req, res) => {
    res.render('users/accountDetails', {
      userLoggedIn: userLoggedIn,
      userList: userList,
    });
  },
  validateUser: (req, res) => {
    res.send(userList);
  },
};

module.exports = controllerLogin;
