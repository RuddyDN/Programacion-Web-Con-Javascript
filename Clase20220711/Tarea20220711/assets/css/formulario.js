const Miformulario = document.getElementById("mi-formulario")
const nombreEvento = "submit"
const accionEvento = (event) => {
    event.preventDefault()
    const ancho = Miformulario.elements.ancho.value
    const altura = Miformulario.elements.altura.value
    const color = Miformulario.elements.color.value
    const contenido = Miformulario.elements.contenido.value

    const pantalla = document.getElementById("pantalla")
    pantalla.style.width = ancho + "px"
    pantalla.style.height = altura + "px"
    pantalla.style.background = color
    pantalla.document.write = contenido
    
}

Miformulario.addEventListener(nombreEvento, accionEvento)


