const userList = require('../views/users/usersList_JSON');

const controllerLogin = {
  mostrarLogin: (req, res) => {
    return res.render('users/login');
  },
  authenticateUser: (req, res) => {
    res.send(req.body.id);
  },
  validateUser: (req, res) => {
    res.send(req.body.name);
  },
};

module.exports = controllerLogin;
