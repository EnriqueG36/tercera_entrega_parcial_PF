//Router de sesiones

const { Router } = require('express')
const UserController = require('../controllers/user.controller')
const userController = new UserController()
const router = Router()
const passport = require('passport')



//const userModel = require('../daos/model/user.model')
//const { createHash, isValidPassword } = require('../utils/utils')


//Dado que ahora el user lleva un campo de cart id, traemos el cartManager para crear un nuevo carro a la vez que un nuevo ususario se registra
//const CartManager = require('./../daos/mongo/cart.mongo.js')    //Importamos el cartManager
//const cartManager = new CartManager()                           //NUeva instancia de cart manager




//Login
router.post('/login', userController.postUserLogin)

//Nuevo endpoint de login con github
//github, la primera redirecciona a la segunda
router.get('/github', passport.authenticate('github', {scope: ['user:email']}))

router.get('/githubcallback', passport.authenticate('github', {failureRedirect: '/views/login'}), async (req, res)=>{
	req.session.user = req.user
	res.redirect('/products')               //Vista de productos
})

//Regitro de usuario, los datos de usuarios se guardaran en mongoAtlas
router.post('/register', userController.postNewUserRegister)

//logout
router.get('/logout', userController.getUserLogout)

//Enpoint current, devuelve el usuario actual
router.get('/current', userController.getCurrentUserSessionData)

module.exports = router

