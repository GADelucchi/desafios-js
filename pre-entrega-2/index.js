// Variables de información
let productos = [];
let usuario;

// Variables para elementos de autenticación y usuario

let formularioIdentificacion;
let contenedorIdentificacion;
let contenedorUsuario;
let textoUsuario;
let limpiarStorage;

// Variables para formulario de productos
let formulario;
let inputCodigo;
let inputNombre;
let inputPrecioCompra;
let inputPrecioVenta;
let inputCantidad;
let contenedorProductos;

class Producto {
    constructor(id, nombre, precioCompra, precioVenta, cantidad) {
        this.id = id;
        this.nombre = nombre.toUpperCase();
        this.precioCompra = precioCompra;
        this.precioVenta = precioVenta;
        this.cantidad = cantidad;
    }
}

function inicializarElementos() {
    limpiarStorage = document.getElementById("limpiarStorage");
    contenedorUsuario = document.getElementById("contenedorUsuario");
    textoUsuario = document.getElementById("textoUsuario");
    contenedorIdentificacion = document.getElementById(
        "contenedorIdentificacion");
    formularioIdentificacion = document.getElementById(
        "formularioIdentificacion");
    inputUsuario = document.getElementById("inputUsuario");

    formulario = document.getElementById("formulario");
    inputCodigo = document.getElementById("inputCodigo");
    inputNombre = document.getElementById("inputNombreProducto");
    inputPrecioCompra = document.getElementById("inputPrecioCompra");
    inputPrecioVenta = document.getElementById("inputPrecioVenta");
    inputCantidad = document.getElementById("inputCantidad");
    contenedorProductos = document.getElementById("contenedorProductos");
}

function inicializarEventos() {
    formulario.onsubmit = (event) => validarFormulario(event);
    formularioIdentificacion.onsubmit = (event) => identificarUsuario(event);
    limpiarStorage.onclick = eliminarStorage;
}

function eliminarStorage() {
    localStorage.clear();
    usuario = "";
    productos = [];
    mostrarFormularioIdentificacion();
    pintarProductos();
}

function identificarUsuario(event) {
    event.preventDefault();
    usuario = inputUsuario.value;
    formularioIdentificacion.reset();
    actualizarUsuarioStorage();
    mostrarTextoUsuario();
}

function mostrarTextoUsuario() {
    contenedorIdentificacion.hidden = true;
    contenedorUsuario.hidden = false;
    textoUsuario.innerHTML += ` ${usuario}`;
}

function mostrarFormularioIdentificacion() {
    contenedorIdentificacion.hidden = false;
    contenedorUsuario.hidden = true;
    textoUsuario.innerHTML = ``;
}

function validarFormulario(event) {
    event.preventDefault();
    if (usuario) {
        let codigoProducto = inputCodigo.value;
        let nombre = inputNombre.value;
        let precioCompra = parseFloat(inputPrecioCompra.value);
        let precioVenta = parseFloat(inputPrecioVenta.value);
        let cantidad = parseInt(inputCantidad.value);

        const idExiste = productos.some((producto) => producto.id === codigoProducto);
        if (!idExiste) {
            let producto = new Producto(
                codigoProducto,
                nombre,
                precioCompra,
                precioVenta,
                cantidad
            );

            productos.push(producto);
            formulario.reset();
            actualizarProductosStorage();
            pintarProductos();
        } else {
            alert("El código ya existe");
        }
    } else {
        alert("Identifíquese antes de agregar un producto");
    }
}

function eliminarProducto(codigoProducto) {
    let columnaBorrar = document.getElementById(`columna-${codigoProducto}`);
    let indiceBorrar = productos.findIndex(
        (producto) => Number(producto.id) === Number(codigoProducto)
    );

    productos.splice(indiceBorrar, 1);
    columnaBorrar.remove();
    actualizarProductosStorage();
}

function pintarProductos() {
    contenedorProductos.innerHTML = "";
    productos.forEach((producto) => {
        let column = document.createElement("div");
        column.className = "col-md-4 mt-3";
        column.id = `columna-${producto.id}`;
        column.innerHTML = `
            <div class="card">
                <div class="card-body">
                <p class="card-text">Código:
                    <b>${producto.id}</b>
                </p>
                <p class="card-text">Nombre:
                    <b>${producto.nombre}</b>
                </p>
                <p class="card-text">Precio de compra:
                    <b>${producto.precioCompra}</b>
                </p>
                <p class="card-text">Precio de venta:
                    <b>${producto.precioVenta}</b>
                </p>
                <p class="card-text">Cantidad:
                    <b>${producto.cantidad}</b>
                </p>
                </div>
                <div class="card-footer">
                    <button class="btn btn-danger" id="botonEliminar-${producto.id}" >Eliminar</button>
                </div>
            </div>`;

        contenedorProductos.append(column);

        let botonEliminar = document.getElementById(`botonEliminar-${producto.id}`);
        botonEliminar.onclick = () => eliminarProducto(producto.id);
    });
}

function actualizarProductosStorage() {
    let productosJSON = JSON.stringify(productos);
    localStorage.setItem("productos", productosJSON);
}

function actualizarUsuarioStorage() {
    localStorage.setItem("usuario", usuario);
}

function obtenerProductosStorage() {
    let productosJSON = localStorage.getItem("productos");
    if (productosJSON) {
        productos = JSON.parse(productosJSON);
        pintarProductos();
    }
}

function obtenerUsuarioStorage() {
    let usuarioAlmacenado = localStorage.getItem("usuario");
    if (usuarioAlmacenado) {
        usuario = usuarioAlmacenado;
        mostrarTextoUsuario();
    }
}

function main() {
    inicializarElementos();
    inicializarEventos();
    obtenerProductosStorage();
    obtenerUsuarioStorage();
}

main();