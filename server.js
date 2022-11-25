const express = require('express');
const server = express();
const path = require('path');
const port = 8100;

server.use("/assets",express.static(path.resolve(__dirname,"assets")));
server.use("/node_modules",express.static(path.resolve(__dirname,"node_modules")));
server.get("/", function(req,res){
    res.sendFile(path.resolve(__dirname,"vistas","index.html"))
});
server.get("/formulario",function(req,res){
    res.sendFile(path.resolve(__dirname,"vistas","formulario.html"))
})
server.get("/curriculum",function(req,res){
    res.sendFile(path.resolve(__dirname,"vistas","curriculum.html"))
})
server.get("/maqueta",function(req,res){
    res.sendFile(path.resolve(__dirname,"vistas","maqueta.html"))
})
server.get("/for",function(req,res){
    res.sendFile(path.resolve(__dirname,"vistas","for.html"))
})
server.get("/contacto",function(req,res){
    res.sendFile(path.resolve(__dirname,"vistas","contacto.html"))
})
server.get("/prompt",function(req,res){
    res.sendFile(path.resolve(__dirname,"vistas","prompt.html"))
})

server.listen(port);

console.log(`Servidor cooriendo en: https://localhost:${port}.com`)
