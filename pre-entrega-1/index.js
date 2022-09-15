function menuMonto() {
    let monto = prompt("Bienvenido " + PERSONA1.nombre + ", ingresá el monto a solicitar (escribe 'ESC' para salir)");
    return monto;
}

function menuCuotas() {
    let cuotas = parseInt(prompt("Seleccioná la cantidad de cuotas \n 1 \n 3 \n 6 \n 9 \n 12 \n 18 \n 24 \n 36 \n 48"));
    return cuotas;
}

function mostrarCotizacion(resultadoCalculo) {
    alert(PERSONA1.nombre + ", el precio por " + cuotasSeleccionadas + " cuotas es de $" + resultadoCalculo + " cada cuota");
}

// function pedirNombre() {
//     prompt("Ingresá tu nombre")
//     return
// }

// function pedirApellido() {
//     prompt("Ingresá tu apellido")
//     return
// }

// function pedirEdad() {
//     prompt("Ingresá tu edad")
//     return
// }

// function pedirDatos() {
//     nombrePersona = pedirNombre()
//     apellidoPersona = pedirApellido()
//     edadPersona = pedirEdad()
//     return
// }

class Persona {
    constructor(nombre, apellido, edad) {
        this.nombre = nombre
        this.apellido = apellido
        this.edad = edad
    }
}

let nombrePersona = prompt("Ingresá tu nombre")
let apellidoPersona = prompt("Ingresá tu apellido")
let edadPersona = prompt("Ingresá tu edad")

const PERSONA1 = new Persona(nombrePersona, apellidoPersona, edadPersona)

// function crearPersona() {
//     let arrayPersonas = []
//     let numeroPersonas = parseInt(prompt("Ingrese cantidad de personas a solicitar préstamo"))
//     for (let index = 0; index < numeroPersonas; index++) {
//         let nombrePersona = prompt("Ingresá tu nombre")
//         let apellidoPersona = prompt("Ingresá tu apellido")
//         let edadPersona = prompt("Ingresá tu edad")

//         let personaACrear = new Persona(nombrePersona, apellidoPersona, edadPersona)

//         arrayPersonas.push(personaACrear)
//     }
//     return arrayPersonas
// }

// function main() {
//     let arrayPersonas = crearPersona()
//     console.log(arrayPersonas);
//     calculador()
// }

let arrayCuotas = [1, 3, 6, 9, 12, 18, 24, 36, 48]

let cuotasSeleccionadas = 0

function calculador() {
    let montoSeleccionado = parseFloat(menuMonto());

    while (montoSeleccionado !== "ESC") {
        cuotasSeleccionadas = parseInt(menuCuotas());

        switch (cuotasSeleccionadas) {
            case 1:
                // let unaCuota = calculo(resultadoMonto, resultadoInteres);
                let unaCuota = Math.ceil((montoSeleccionado / cuotasSeleccionadas) + (montoSeleccionado * (0.2 * cuotasSeleccionadas)))
                mostrarCotizacion(unaCuota);
                break;
            case 3:
                // let tresCuotas = calculo(resultadoMonto, resultadoInteres);
                let tresCuota = Math.ceil((montoSeleccionado / cuotasSeleccionadas) + (montoSeleccionado * (0.2 * cuotasSeleccionadas)))
                mostrarCotizacion(tresCuotas);
                break;
            case 6:
                // let seisCuotas = calculo(resultadoMonto, resultadoInteres);
                let seisCuotas = Math.ceil((montoSeleccionado / cuotasSeleccionadas) + (montoSeleccionado * (0.2 * cuotasSeleccionadas)))
                mostrarCotizacion(seisCuotas);
                break;
            case 9:
                // let nueveCuotas = calculo(resultadoMonto, resultadoInteres);
                let nueveCuotas = Math.ceil((montoSeleccionado / cuotasSeleccionadas) + (montoSeleccionado * (0.2 * cuotasSeleccionadas)))
                mostrarCotizacion(nueveCuotas);
                break;
            case 12:
                // let doceCuotas = calculo(resultadoMonto, resultadoInteres);
                let doceCuotas = Math.ceil((montoSeleccionado / cuotasSeleccionadas) + (montoSeleccionado * (0.2 * cuotasSeleccionadas)))
                mostrarCotizacion(doceCuotas);
                break;
            case 18:
                // let dieciochoCuotas = calculo(resultadoMonto, resultadoInteres);
                let dieciochoCuotas = Math.ceil((montoSeleccionado / cuotasSeleccionadas) + (montoSeleccionado * (0.2 * cuotasSeleccionadas)))
                mostrarCotizacion(dieciochoCuotas);
                break;
            case 24:
                // let veinticuatroCuotas = calculo(resultadoMonto, resultadoInteres);
                let veinticuatroCuotasunaCuota = Math.ceil((montoSeleccionado / cuotasSeleccionadas) + (montoSeleccionado * (0.2 * cuotasSeleccionadas)))
                mostrarCotizacion(veinticuatroCuotas);
                break;
            case 36:
                // let treintaYSeisCuotas = calculo(resultadoMonto, resultadoInteres);
                let treintaYSeisCuotasunaCuota = Math.ceil((montoSeleccionado / cuotasSeleccionadas) + (montoSeleccionado * (0.2 * cuotasSeleccionadas)))
                mostrarCotizacion(treintaYSeisCuotas);
                break;
            case 48:
                // let cuarentaYOchoCuotas = calculo(resultadoMonto, resultadoInteres);
                let cuarentaYOchoCuotas = Math.ceil((montoSeleccionado / cuotasSeleccionadas) + (montoSeleccionado * (0.2 * cuotasSeleccionadas)))
                mostrarCotizacion(cuarentaYOchoCuotas);
                break;
            default:
                alert("Seleccionaste una opción inválida");
                break;
        }
        montoSeleccionado = menuMonto()
    }
}

console.log(PERSONA1);
calculador()