const prompt = require('prompt');

prompt.start()

prompt.get(["Valor1", "Valor2"] , function(error, resultado){
    let num = resultado.Valor1
    let num2 = resultado.Valor2
    const divisores = [1,2,3,4,5,6,7,8,9,10,11,12];
    const divisores2 = [1,2,3,4,5,6,7,8,9,10,11,12];

    for(let i=0; i < divisores.length; i++){
        if(num %divisores[i]===0){
            console.log(num  + " es divisible por " + divisores[i] + "\n")
        }
        
    
    }

    for(let a=0; a < divisores2.length; a++){
         if(num2 %divisores[a]===0){
            console.log(num2  + " es divisible por " + divisores[a]  + "\n")
        }
        
    }
})