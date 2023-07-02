//Configuracion para la conexion de nuestra base de datos en mongoAtlas
require('dotenv').config()
const {connect} = require('mongoose')

//Aquí pegamos la connection string que inclye nuestro user y password de nuestro cluster en mongoAtlas, 
const url =  process.env.MONGO_CONNECTION_STRING                                                                                                                   //Antes del ? colocamos el nombre de nuestra base de datos

module.exports = {
    connectDB: () => { 
        connect(url) 
        console.log('Base de datos conectada') 
    }}