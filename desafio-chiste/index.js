let botonRojo = document.getElementById("btn-rojo")
let botonVerde = document.getElementById("btn-verde")
let contenedorGral = document.getElementById("contenedorGeneral")
let botonNegro

botonRojo.onclick = (event) => mainRojo(event)
botonVerde.onclick = (event) => mainVerde(event)
// botonNegro.onclick = () => location.reload()

function textoSad() {
    contenedorGral.className = "d-flex flex-column align-items-center justify-content-evenly fs-2"
    contenedorGral.innerHTML = `<div class="fw-bold text-danger">Ella no te ama</div>
                                <button class="btn btn-dark h-25 w-25" id="btn-negro"">
                                    INTENTÁ DE NUEVO
                                </button>`
    let botonNegro = document.getElementById("btn-negro")
    botonNegro.onclick = () => location.reload()
}

function textoSadTroll() {
    contenedorGral.className = "d-flex flex-column align-items-center justify-content-evenly fs-2"
    contenedorGral.innerHTML = `<div class="fw-bold text-success">Ella aún no te ama, me ama a mí</div>
                                <button class="btn btn-dark h-25 w-25" id="btn-negro">
                                    INTENTÁ DE NUEVO
                                </button>`
    let botonNegro = document.getElementById("btn-negro")
    botonNegro.onclick = () => location.reload()
}

function mainRojo() {
    botonRojo.hidden = true
    botonVerde.hidden = true
    textoSad()

}

function mainVerde() {
    botonRojo.hidden = true
    botonVerde.hidden = true
    textoSadTroll()

}