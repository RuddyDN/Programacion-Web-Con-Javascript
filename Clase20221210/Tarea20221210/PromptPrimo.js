const prompt = require('prompt');

prompt.start()

prompt.get(["valor1"], function(error,resultado){
    let valor1 = resultado.valor1;

    if (valor1 / valor1 ==1 || valor1 / 1 == valor1){
        console.log("Es primo")
    }
    else {
        console.log("No es primo")
    }
})

