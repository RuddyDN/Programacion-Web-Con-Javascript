//Este programa pide una frase y escribe la vocales que aparecen

const prompt = require('prompt');

prompt.start()

prompt.get(["Frase1"], function(error,resultado){
    let Frase1 = resultado.Frase1;
    const array = ['a','e','i','o','u']
 

    for(let i = 0; i < Frase1.length; i++){
        if(Frase1[i] === "a"){
            console.log("la frase tiene una tiene la vocal 'a' ")
        }
        else if (Frase1[i] === "e"){
            console.log("la frase tiene la vocal 'e' ")
        }
        else if (Frase1[i] === "i"){
            console.log("la frase tiene la vocal 'i' ")
            
        }
        else if (Frase1[i] == "o"){
            console.log("la frase tiene la vocal 'o' ")
        }
        else if (Frase1[i] == "u"){
            console.log("la frase tiene la vocal 'u' ")
        }
        else{
            console.log("es letra: " + Frase1[i])
        }
    }

    
})