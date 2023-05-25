// Solicitar monto total al usuario
let montoTotal = parseFloat(prompt("Ingrese el monto total:"));

// Validar si se ingresó un monto válido
if (!isNaN(montoTotal) && montoTotal > 0) {
  // Solicitar cantidad de cuotas al usuario
  let cantidadCuotas = parseInt(prompt("Ingrese la cantidad de cuotas:"));

  // Validar si se ingresó una cantidad de cuotas válida
  if (!isNaN(cantidadCuotas) && cantidadCuotas > 0) {
    // Calcular el monto de cada cuota con interés del 5%
    let montoCuota = (montoTotal * 1.05) / cantidadCuotas;

    console.log("DETALLES DEL PRÉSTAMO");
    console.log("Monto total: $" + montoTotal.toFixed(2));
    console.log("Cantidad de cuotas: " + cantidadCuotas);
    console.log("Monto por cuota (con interés del 5%): $" + montoCuota.toFixed(2));

    // Ciclo while para mostrar cada cuota
    let cuotaActual = 1;
    while (cuotaActual <= cantidadCuotas) {
      console.log("Cuota " + cuotaActual + ": $" + montoCuota.toFixed(2));
      cuotaActual++;
    }

    // Ciclo for para mostrar cada cuota nuevamente
    for (let cuota = 1; cuota <= cantidadCuotas; cuota++) {
      console.log("Cuota " + cuota + ": $" + montoCuota.toFixed(2));
    }
  } else {
    console.log("No ingresó una cantidad de cuotas válida.");
  }
} else {
  console.log("No ingresó un monto válido.");
}