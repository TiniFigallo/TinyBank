/* // SIMULADOR PRESTAMO 

let interes = 1.5;
let monto = 0;
let total = 0;
let cuotas = 0;

const pedirMontoPrestamo = () => {
    monto = Number(prompt("¿cuanto dinero quiere solicitar? (Minimo 1.000$, Maximo 20.000$"));
    while (isNaN((monto)) || monto < 1000 || monto > 20000 ) {
        monto = Number(prompt("Ingrese el monto que desea, entre 1.000$ y 20.000$. Recuerde separar con puntos."));
    }
}

const pedirCuotas = () => {
    cuotas = Number(prompt("¿En cuantas cuotas desea devolverlo? 1-12"))
    while (isNaN(cuotas) || cuotas > 12 || cuotas <= 0) {
        cuotas = Number(prompt("Ingrese en cuantas cuotas desea devolverlo, de 1 a 12"))
    } 
}

const init = () => {
    pedirMontoPrestamo();   
    pedirCuotas();
      total = monto * interes/cuotas
} 
init();
alert("Tu total a pagar durante" +" "+ cuotas +" "+ "meses, será de"+" "+ total +"$ARS")

 */