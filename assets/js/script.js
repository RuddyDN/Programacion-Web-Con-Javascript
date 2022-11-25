const Miformulario = document.getElementById("mi-formulario")
const nombreEvento = "submit"
const accionEvento = (event) => {
    event.preventDefault()
    const info = Miformulario.elements.info.value
    const color = Miformulario.elements.color.value

    const pantalla = document.getElementById("pantalla")
    pantalla.style.background = color

    document.querySelector("#info").innerHTML = info;

    
    
}

Miformulario.addEventListener(nombreEvento, accionEvento)