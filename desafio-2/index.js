let botonRojo = document.getElementById("btn-rojo")
let botonVerde = document.getElementById("btn-verde")

botonRojo.onclick = (event) => mainRojo(event)
botonVerde.onclick = (event) => mainVerde(event)

function textoSad() {
    let contenedorSad = document.createElement("div")
    contenedorSad.innerHTML = `<p class="fs-4 fw-bold">Ella no te ama</p>`
    document.body.appendChild(contenedorSad)
}

function textoSadTroll() {
    let contenedorSad = document.createElement("div")
    contenedorSad.innerHTML = `<p class="fs-4 fw-bold">Ella aún no te ama</p>`
    document.body.appendChild(contenedorSad)
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

