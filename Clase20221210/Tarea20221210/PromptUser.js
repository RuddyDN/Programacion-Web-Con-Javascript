const prompt = require('prompt');


prompt.start()


prompt.get(['Username'], function(error, resultado) {
    let User = resultado.Username;

    console.log("Hola " + User);
}) 