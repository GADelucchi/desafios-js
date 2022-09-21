let botonRojo = document.getElementById("btn-rojo")
let botonVerde = document.getElementById("btn-verde")
let contenedorGral = document.getElementById("contenedorGeneral")
let botonNegro

botonRojo.onclick = (event) => mainRojo(event)
botonVerde.onclick = (event) => mainVerde(event)
// botonNegro.onclick = () => location.reload()

function textUno() {
    contenedorGral.className = "d-flex flex-column align-items-center justify-content-evenly fs-2"
    contenedorGral.innerHTML = `<div class="fw-bold text-danger">Texto ejemplo botón rojo</div>
                                <button class="btn btn-dark h-25 w-25" id="btn-negro"">
                                    PROBÁ DE NUEVO
                                </button>`
    let botonNegro = document.getElementById("btn-negro")
    botonNegro.onclick = () => location.reload()
}

function textDos() {
    contenedorGral.className = "d-flex flex-column align-items-center justify-content-evenly fs-2"
    contenedorGral.innerHTML = `<div class="fw-bold text-success">Texto ejemplo botón verde</div>
                                <button class="btn btn-dark h-25 w-25" id="btn-negro">
                                    PROBÁ DE NUEVO
                                </button>`
    let botonNegro = document.getElementById("btn-negro")
    botonNegro.onclick = () => location.reload()
}

function mainRojo() {
    botonRojo.hidden = true
    botonVerde.hidden = true
    textUno()

}

function mainVerde() {
    botonRojo.hidden = true
    botonVerde.hidden = true
    textDos()

}