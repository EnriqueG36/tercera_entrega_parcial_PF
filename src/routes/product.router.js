//Endpoint para manejar los productos

const{Router} = require('express')
const ProductController  = require('../controllers/product.controller')		//Importamos la clase ProductController
const { auth } = require('../middlewares/authentication.middleware')
const productController = new ProductController()



const router = Router()	//Intanciamos router

//Aqui van todos los endpoints para productos

//Obtiene todos los productos en la colección
router.get('/', productController.getProducts)

//Añade un nuevo producto a la coleccion
router.post('/', auth, productController.postProduct)

//Obtiene un producto por su id
router.get('/:pid', productController.getProductById)

//Elimina un producto por su id
router.delete('/:pid', auth, productController.deleteProductById)

//Actualiza un producto por su id
router.put('/:pid', auth, productController.putProductbyId)

module.exports = router

