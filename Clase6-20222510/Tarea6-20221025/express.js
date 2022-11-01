const express = require('express')
const call = express()

call.get('/', function(req, res){
    res.sendFile("C:/Users/DELL/OneDrive/Documentos/Escritorio/Diplomado/Clase6-20222510/Tarea6-20221022/index.html")
})

call.listen(80)
console.log("Servidor web corriendo: http://localhost:80")