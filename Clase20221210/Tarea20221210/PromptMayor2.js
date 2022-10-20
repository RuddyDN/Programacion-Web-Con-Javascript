const prompt = require('prompt');

prompt.start()

prompt.get(["num1", "num2", "num3"], function(error,resultado){
    let num1 = resultado.num1;
    let num2 = resultado.num2;
    let num3 = resultado.num3;

    if (num1 > num2 && num1 > num3) {
        console.log("El mayor es: " + num1);
    }
    else if (num2 > num1 && num2 > num3) {
        console.log("El mayor es: " + num2);
    }
    else{
        console.log("El mayor es: " + num3);
    }
})