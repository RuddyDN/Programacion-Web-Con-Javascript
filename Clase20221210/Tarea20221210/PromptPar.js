const prompt = require('prompt');

prompt.start()

prompt.get(["valor1"], function(error,resultado){
    let valor1 = resultado.valor1;

    if (valor1 % 2 ==0){
        console.log("El numero: " + valor1 + " es divisible entre 2")

    }
    else {
        console.log("El numero: " + valor1 + " no es divisible entre 2")
    }
})