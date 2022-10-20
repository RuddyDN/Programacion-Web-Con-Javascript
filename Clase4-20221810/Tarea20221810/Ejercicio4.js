const prompt = require('prompt');

prompt.start();

prompt.get(["Frase"], function(error, resultado){
    let Frase = resultado.Frase;
    const vocales = ['a','e','i','o','u'];


    let ConteoA = 0;
    let ConteoE = 0;
    let ConteoI = 0;
    let ConteoO = 0;
    let ConteoU = 0;

    for(let i = 0; i < Frase.length; i++) {
        if (Frase[i] == vocales[0] ) {
            ConteoA+=1;
            
        }
        else if (Frase[i] == vocales[1] ) {
            ConteoE+=1;
            
        }
        else if (Frase[i] == vocales[2]) {
            ConteoI+=1;
            
        }
        else if (Frase[i] == vocales[3]) {
            ConteoO+=1;
            
        }
        else if (Frase[i] == vocales[4]) {
            ConteoU+=1;
            
        }
        else{
            console.log("no es una vocal: " + Frase[i])
        }
    }

    console.log("La frase tiene la 'u': " + ConteoU + " veces")
    console.log("La frase tiene la 'o': " + ConteoO + " veces")
    console.log("La frase tiene la 'i': " + ConteoI + " veces")
    console.log("La frase tiene la 'e': " + ConteoE + " veces")
    console.log("La frase tiene la 'a': " + ConteoA + " veces")
    
})