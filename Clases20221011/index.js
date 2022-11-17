const express = require('express');
const call = express();
const path = require('path')

call.use("/assets",express.static(path.resolve(__dirname,'assets')));

call.get('/', function(res,req){
    req.sendFile('C:/Users/DELL/OneDrive/Documentos/Escritorio/Diplomado/Clase20221011/vistas/index.html');
});

call.listen(5000);

console.log("Servidor web corriendo: http://localhost:5000");