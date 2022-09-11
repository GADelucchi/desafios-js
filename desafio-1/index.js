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

    while (montoSeleccionado !== "ESC") {
        cuotasSeleccionadas = parseInt(menuCuotas());

        switch (cuotasSeleccionadas) {
            case 1:
                // let unaCuota = calculo(resultadoMonto, resultadoInteres);
                let unaCuota = (montoSeleccionado / cuotasSeleccionadas) + (montoSeleccionado * (0.2 * cuotasSeleccionadas))
                mostrarCotizacion(unaCuota);
                break;
            case 3:
                // let tresCuotas = calculo(resultadoMonto, resultadoInteres);
                let tresCuota = (montoSeleccionado / cuotasSeleccionadas) + (montoSeleccionado * (0.2 * cuotasSeleccionadas))
                mostrarCotizacion(tresCuotas);
                break;
            case 6:
                // let seisCuotas = calculo(resultadoMonto, resultadoInteres);
                let seisCuotas = (montoSeleccionado / cuotasSeleccionadas) + (montoSeleccionado * (0.2 * cuotasSeleccionadas))
                mostrarCotizacion(seisCuotas);
                break;
            case 9:
                // let nueveCuotas = calculo(resultadoMonto, resultadoInteres);
                let nueveCuotas = (montoSeleccionado / cuotasSeleccionadas) + (montoSeleccionado * (0.2 * cuotasSeleccionadas))
                mostrarCotizacion(nueveCuotas);
                break;
            case 12:
                // let doceCuotas = calculo(resultadoMonto, resultadoInteres);
                let doceCuotas = (montoSeleccionado / cuotasSeleccionadas) + (montoSeleccionado * (0.2 * cuotasSeleccionadas))
                mostrarCotizacion(doceCuotas);
                break;
            case 18:
                // let dieciochoCuotas = calculo(resultadoMonto, resultadoInteres);
                let dieciochoCuotas = (montoSeleccionado / cuotasSeleccionadas) + (montoSeleccionado * (0.2 * cuotasSeleccionadas))
                mostrarCotizacion(dieciochoCuotas);
                break;
            case 24:
                // let veinticuatroCuotas = calculo(resultadoMonto, resultadoInteres);
                let veinticuatroCuotasunaCuota = (montoSeleccionado / cuotasSeleccionadas) + (montoSeleccionado * (0.2 * cuotasSeleccionadas))
                mostrarCotizacion(veinticuatroCuotas);
                break;
            case 36:
                // let treintaYSeisCuotas = calculo(resultadoMonto, resultadoInteres);
                let treintaYSeisCuotasunaCuota = (montoSeleccionado / cuotasSeleccionadas) + (montoSeleccionado * (0.2 * cuotasSeleccionadas))
                mostrarCotizacion(treintaYSeisCuotas);
                break;
            case 48:
                // let cuarentaYOchoCuotas = calculo(resultadoMonto, resultadoInteres);
                let cuarentaYOchoCuotas = (montoSeleccionado / cuotasSeleccionadas) + (montoSeleccionado * (0.2 * cuotasSeleccionadas))
                mostrarCotizacion(cuarentaYOchoCuotas);
                break;
            default:
                alert("Seleccionaste una opción inválida");
                break;
        }
        montoSeleccionado = menuMonto()
    }
}

calculador()