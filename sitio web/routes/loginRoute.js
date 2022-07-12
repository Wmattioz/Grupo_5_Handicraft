const express = require('express');
const router = express.Router();
const userList = require('../views/users/usersList_JSON');
const userLoggedIn = require('../views/users/userSession_JSON');
const controllerLogin = require('../controllers/controllerLogin.js');

router.get('/', controllerLogin.mostrarLogin);

router.get('/user', controllerLogin.accountDetails);

router.put('/user', (req, res) => {
  let validateUser = 'el usuario no existe o la contraseña es incorrecta';
  userList.forEach(user => {
    if (
      req.body.user_name == user.user_name &&
      req.body.passwd == user.passwd
    ) {
      user.loggedIn = true;
      userLoggedIn.first_name = user.first_name;
      userLoggedIn.last_name = user.last_name;
      userLoggedIn.user_name = user.user_name;
      userLoggedIn.passwd = user.passwd;
      validateUser = user;
    }
  });
  res.redirect('/');
});
/*
router.put('/login', (req, res) => {
  res.send('estoy en login');
     let i = req.body.id;
    productList[i].name = req.body.name;
    productList[i].price = req.body.price;
    productList[i].disc = req.body.disc;
    productList[i].descs = req.body.descs;
    productList[i].descl = req.body.descl;
    productList[i].image = req.body.image;
    res.redirect('/producto/' + req.body.id + '/mostrar'); 
});*/

module.exports = router;
