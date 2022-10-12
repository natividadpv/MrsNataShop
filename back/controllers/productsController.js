const producto=require("../models/productos")
const fetch =(url)=>import('node-fetch').then(({default:fetch})=>fetch(url)); //Usurpación del require

//Ver la lista de productos
exports.getProducts=async (req,res,next) =>{
    const productos=await producto.find();
    res.status(200).json({
        success:true,
        cantidad: productos.length,
        productos
    })
}

//Ver un producto por ID
exports.getProductById= async(req, res, next)=>{
    const product=await producto.findById(req.params.id)
    if (!product){      //Si no existe el producto
        res.status(404).json({
            success:false,
            message:"No encontramos ese producto"
        })
    }
    res.status(200).json({
        success:true,
        message: "Aqui debajo encuentras información sobre tu producto: ",
        product
    })
}

//Update de producto - Actualizar producto
exports.updateProduct= async (req,res, next) =>{
    let product=await producto.findById(req.params.id) //Variable de tipo modificable
    if (!product){     //Verifico que el objeto no existe para finalizar el proceso  
            return res.status(404).json({
            success:false,
            message:"No encontramos ese producto"
        })
    }
    //Si el objeto si existia, entonces si ejecutpo la actualizacion
    product=await producto.findByIdAndUpdate(req.params.id, req.body,{
        new:true,
        runValidators:true
    });
    //Respondo OK si el producto si se actualizó
    res.status(200).json({
        success:true,
        message:"Producto actualizado correctamente",
        product
    })
}

//Eliminar un producto
exports.deleteProduct= async (req,res, next) =>{
    const product=await producto.findById(req.params.id) //Variable de tipo modificable
    if (!product){     //Verifico que el objeto no existe para finalizar el proceso  
            return res.status(404).json({ //Si el objeto no existe, return termina el método
            success:false,
            message:"No encontramos ese producto"
        })
    }
    //Si el producto si existe, entonces ejecuta lo siguiente:
    await product.remove(); //Eliminamos el proceso
    res.status(200).json({
        success:true,
        message:"Producto eliminado correctamente"
    })
}

//Crear nuevo producto /api/productos
exports.newProduct=async(req,res,next) => {
    const product= await producto.create(req.body);

    res.status(201).json({
        success:true,
        product
    })
}


//HABLEMOS DE FETCH
//Comando para instalar Fecth: npm install node-fetch

//Ver todos los productos
function verProductos(){
    fetch('http://localhost:4000/api/productos')
    .then(res=>res.json())
    .then(res=>console.log(res))
    .catch(err=>console.error(err))
}

//verProductos(); LLamamos al metodo creado para probar la consulta

//Ver por id
function verProductoPorID(id){
    fetch('localhost:4000/api/producto/'+id)
    .then(res=>res.json())
    .then(res=>console.log(res))
    .catch(err=>console.error(err))
}

//verProductoPorID('63471dff9a36704bc03c4ee');
