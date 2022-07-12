const controllerLogin = {
  mostrarLogin: (req, res) => {
    return res.render('users/login');
  },
  authenticateUser: (req, res) => {
    res.send('estoy en el login');
  },
};

module.exports = controllerLogin;
