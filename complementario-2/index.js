function menuMonto() {
    let monto = prompt("Bienvenido, ingresá el monto a solicitar (escribe 'ESC' para salir)");
    return monto;
}

function menuCuotas() {
    let cuotas = parseInt(prompt("Seleccioná la cantidad de cuotas \n 1 \n 3 \n 6 \n 9 \n 12 \n 18 \n 24 \n 36 \n 48"));
    return cuotas;
}

function mostrarCotizacion(resultadoCalculo) {
    alert("El precio por " + cuotasSeleccionadas + " cuotas es de " + resultadoCalculo + " pesos cada cuota");
}

let cuotasSeleccionadas = 0

function calculador() {
    let montoSeleccionado = parseFloat(menuMonto());

    const arrayCuotas = [1, 3, 6, 9, 12, 18, 24, 36, 48]

    while (montoSeleccionado !== "ESC") {
        cuotasSeleccionadas = parseInt(menuCuotas());

        switch (cuotasSeleccionadas) {
            case 1:
                let unaCuota = (montoSeleccionado / cuotasSeleccionadas) + (montoSeleccionado * (0.2 * cuotasSeleccionadas))
                console.log(arrayCuotas[0])
                mostrarCotizacion(unaCuota);
                break;
            case 3:
                let tresCuotas = (montoSeleccionado / cuotasSeleccionadas) + (montoSeleccionado * (0.2 * cuotasSeleccionadas))
                console.log(arrayCuotas[1])
                mostrarCotizacion(tresCuotas);
                break;
            case 6:
                let seisCuotas = (montoSeleccionado / cuotasSeleccionadas) + (montoSeleccionado * (0.2 * cuotasSeleccionadas))
                console.log(arrayCuotas[2])
                mostrarCotizacion(seisCuotas);
                break;
            case 9:
                let nueveCuotas = (montoSeleccionado / cuotasSeleccionadas) + (montoSeleccionado * (0.2 * cuotasSeleccionadas))
                console.log(arrayCuotas[3])
                mostrarCotizacion(nueveCuotas);
                break;
            case 12:
                let doceCuotas = (montoSeleccionado / cuotasSeleccionadas) + (montoSeleccionado * (0.2 * cuotasSeleccionadas))
                console.log(arrayCuotas[4])
                mostrarCotizacion(doceCuotas);
                break;
            case 18:
                let dieciochoCuotas = (montoSeleccionado / cuotasSeleccionadas) + (montoSeleccionado * (0.2 * cuotasSeleccionadas))
                console.log(arrayCuotas[5])
                mostrarCotizacion(dieciochoCuotas);
                break;
            case 24:
                let veinticuatroCuotasunaCuota = (montoSeleccionado / cuotasSeleccionadas) + (montoSeleccionado * (0.2 * cuotasSeleccionadas))
                console.log(arrayCuotas[6])
                mostrarCotizacion(veinticuatroCuotas);
                break;
            case 36:
                let treintaYSeisCuotasunaCuota = (montoSeleccionado / cuotasSeleccionadas) + (montoSeleccionado * (0.2 * cuotasSeleccionadas))
                console.log(arrayCuotas[7])
                mostrarCotizacion(treintaYSeisCuotas);
                break;
            case 48:
                let cuarentaYOchoCuotas = (montoSeleccionado / cuotasSeleccionadas) + (montoSeleccionado * (0.2 * cuotasSeleccionadas))
                console.log(arrayCuotas[8])
                mostrarCotizacion(cuarentaYOchoCuotas);
                break;
            default:
                for (const cuotas of arrayCuotas) {
                }
                alert("Seleccionaste una opción inválida");
                break;
        }
        montoSeleccionado = menuMonto()
    }
}

calculador()
