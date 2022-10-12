const mongoose = require ("mongoose")

//Crear json
const productosSchema = mongoose.Schema({
    //Caracteristicas del producto
    nombre:{
        type:String,
        required: [true,"Por favor registra el nombre del producto."], //Validación de recursos
        trim:true, //Eliminación de caracteres blancos iniciando una cadena de texto
        maxLength: [120, "El nombre del producto no debe exceder los 120 caracteres."] //Limite de caracteres
    },
    precio:{
        type:Number,
        required:[true,"Por favor registre el precio del producto."],
        maxLength:[8,"El precio del producto no puede estar por encima de 99'999.999"],
        default: 0.0
    },
    descripcion:{
        type:String,
        required:[true,"Por favor registre una descripcion para el producto."]
    },
    calificacion:{
        type:Number,
        default:0
    },
    imagen:[
        {
            public_id:{
                type:String,
                required:true
            },
            url:{
                type:String,
                requiered:true
            },
        }

    ],
    categoria:{
        type:String,
        required:[true,"Por favor seleccione la categoria del producto:"],
        enum:{ //Enumera la lista
            values:[
                "Pastel básico",
                "Pastel personalizado",
                "Cupcakes básicos",
                "Cupcakes personalizados",
                "Cakepops básicos",
                "Cakepops personalizados",
                "Minitartaletas",
                "Tartas",
                "Postres en shot"
            ]
        }  
    },
    vendedor:{
        type:String,
        required:[true,"Por favor registre el vendedor del producto."]
    },
    inventario:{
        type: Number,
        required:[true,"Por favor registre el stock del producto"],
        maxLength:[4,"La cantidad maxima del producto no puede sobrepasar los 9999"],
        default:0
    },
    numCalificaciones:{
        type:Number,
        default:0
    },
    opiniones:[
        {
            nombreCliente:{
                type:String,
                required:true
            },
            rating:{
                type:Number,
                required:true
            },
            comentario:{
                type:String,
                required:true
            }
        }
    ],
    fechaCreacion:{
        type:Date,
        default:Date.now
    }

})

module.exports=mongoose.model("productos",productosSchema)