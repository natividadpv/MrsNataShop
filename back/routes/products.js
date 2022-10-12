const express=require("express")
const router=express.Router();

const {getProducts, newProduct, getProductById, updateProduct, deleteProduct} =require("../controllers/productsController") //Traemos la respuesta json desde el controlador

router.route('/productos').get(getProducts) //Establecemos desde que ruta queremos ver el getProducts
router.route('/producto/nuevo').post(newProduct); //Establecemos la ruta del producto nuevo
router.route('/producto/:id').get(getProductById); //Establecemos la ruta del producto por ID (establecido por parámetro)
router.route('/producto/:id').put(updateProduct); //Creacion de la ruta de actualizacion por ID
router.route('/producto/:id').delete(deleteProduct); //Creacion de la ruta de eliminación por ID


module.exports=router;
