//Router de nuestras vistas

const { Router } = require('express')
const router = Router()
const { auth } = require('../middlewares/authentication.middleware')

 /*
const ProductManager = require('../daos/mongo/product.mongo.js') //Importamos nuestro productManager hecho con la persistencia en mongo
const productManager = new ProductManager()

const CartManager = require('./../daos/mongo/cart.mongo.js')    //Importamos el cartManager
const cartManager = new CartManager()
*/

const ViewsController = require('../controllers/views.controller')

const viewsController = new ViewsController()


//Ruta que renderiza la vista chat.handlebars
router.get('/chat', (req, res)=>{
res.render('chat', {})

})

//Vista que muestra todos los productos disponibles con paginacion
router.get('/products', viewsController.getViewAllProducts)

//Vista que muestra todos los productos en un carrito
router.get('/carts/:cid', viewsController.getViewCart)

//Plantilla de registro
router.get('/register', (req, res) => {
    res.render('register', {})
})

//Plantilla de login
router.get('/login', (req, res) => {

    

    res.render('login', {}) 
})


module.exports = router