const mongoose=require("mongoose");
 
//Método Connect - Conectar BD
const connectDatabase = () => {
    mongoose.connect(process.env.DB_LOCAL_URI, {
        useNewUrlParser:true, //Permite que haya un paso de datos
        useUnifiedTopology: true
    }).then(con => {
        console.log(`Base de datos mongo conectada con el servidor: ${con.connection.host}`)
    }).catch(con => {
        console.log("No se logró la conexion con la nase de datos")
    })
}

module.exports=connectDatabase;