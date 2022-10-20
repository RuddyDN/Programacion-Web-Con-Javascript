//Este programa pide una frase y escribe cuantas a tiene la frase

const prompt= require('prompt');

prompt.start()

prompt.get(["Frase1"], function(error,resultado){
    let Frase1 = resultado.Frase1;
    let Conteoa = 0;

    for (a = 0; a < Frase1.length; a++) {
        if (Frase1[a] === "a"){
            Conteoa +=1;
        }
    }

    console.log("La letra 'a' aparce " + Conteoa + " numero de veces")
})