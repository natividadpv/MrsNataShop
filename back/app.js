const express=require("express");
const app = express();

app.use(express.json());

//Importar rutas
const productos=require("./routes/products")

//Ruta del navegador
app.use('/api',productos) //sujeto a cambios

module.exports=app
