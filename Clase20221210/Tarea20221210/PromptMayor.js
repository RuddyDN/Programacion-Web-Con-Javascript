const prompt = require('prompt')

prompt.start();


prompt.get(["num1", "num2"], function(error,resultado){
    let num1 = resultado.num1;
    let num2 = resultado.num2;

    if (num1 > num2) {
        console.log("El mayor es: " + num1)
    }
    else{
        console.log("El mayor es: " + num2)
    }
})