const express = require('express');
const call = express();
const path = require('path');
const port = 5000;


call.use("/assets", express.static(path.resolve(__dirname, "assets")));
call.get("/", function(req,res){
    res.sendFile(path.resolve(__dirname,"vistas", "index.html"));
})

call.listen(port)
console.log(`Servidor web corriendo: http://localhost:${port}`);