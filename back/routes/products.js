const express=require("express")
const router=express.Router();

const {getProducts, newProduct} =require("../controllers/productsController") //Traemos la respuesta json desde el controlador

router.route('/productos').get(getProducts) //Establecemos desde que ruta queremos ver el getProducts
router.route('/producto/nuevo').post(newProduct); //Establecemos la ruta del producto nuevo

module.exports=router;
