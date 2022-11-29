const Formulario = document.getElementById("Formulario")
const Evento = "submit"
const accionEvento = (event) => {
    event.preventDefault()
    const nombre = Formulario.elements.Nombre.value
    const telefono = Formulario.elements.Telefono.value
    const correo = Formulario.elements.Correo.value
    const motivo = Formulario.elements.Motivo.value
    alert(`Buenas ${nombre} \n Nombre: ${nombre} \n Telefono: ${telefono} \n Correo: ${correo} \n Motivo: ${motivo}`)
    const status = confirm("La informacion mostrada anteriormente es correcta")

    if(status == true){
        alert("Informacion enviadad con exito, espere su respuesta.")
    }
    else{
        alert("Ingrese otra vez la informacion.")
    }
}

Formulario.addEventListener(Evento,accionEvento)