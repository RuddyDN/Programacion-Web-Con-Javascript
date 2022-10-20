const prompt = require('prompt');

prompt.start();

prompt.get(["Frase"], function(error, resultado) {
    let Frase = resultado.Frase;
    const vocales = ['a','e','i','o','u'];
    let ConteoVocal = 0;
    
    for(let i = 0; i < Frase.length; i++){
        if (Frase[i] == vocales[0] || Frase[i] == vocales[1] || Frase[i] == vocales[2] || Frase[i] == vocales[3] || Frase[i] == vocales[4]) {
            ConteoVocal+=1
        }

        
    }

    console.log("La frase tiene: " + ConteoVocal + " vocales")
})