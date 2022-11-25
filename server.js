const express = require('express');
const server = express();
const path = require('path');
const port = 8100;

server.use("/assets",express.static(path.resolve(__dirname,"/assets")));
server.get("/", function(req,res){
    res.sendFile(path.resolve(__dirname,"vistas","index.html"))
});

server.listen(port);

console.log(`Servidor cooriendo en: https://localhost:${port}.com`)