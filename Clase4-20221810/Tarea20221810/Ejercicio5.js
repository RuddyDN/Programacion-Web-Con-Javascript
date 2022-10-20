const prompt = require('prompt');

prompt.start()

prompt.get(["Numero1"], function(error, resultado){
    let num = resultado.Numero1;

    if (num %2==0 || num %3==0 || num %5==0 || num %7==0){
        console.log("Es divisible")
    }
    else {
        console.log("No es divisible")
    }

})