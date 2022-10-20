const prompt = require('prompt');

prompt.start()


prompt.get(["num1", "num2"],  function(error,resultado){
    let num1 = resultado.num1;
    let num2 = resultado.num2;
    let num3 = parseInt(num1) + parseInt(num2);
    console.log("Este es el resultado: " + num3);
})