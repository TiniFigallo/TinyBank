// SIMULADOR PRESTAMO 
const seccion_prestamo = document.getElementById("seccion_prestamo")
const formularioPrestamo = document.getElementById("formularioPrestamo")
const monto = document.getElementById("monto")
const cuotas = document.getElementById("cuotas")



formularioPrestamo.addEventListener('submit', (e) => {

    e.preventDefault();
    const detallesPrestamo = document.createElement('div')
    detallesPrestamo.setAttribute('id',"detallesPrestamo")
    formularioPrestamo.append(detallesPrestamo)
    detallesPrestamo.innerHTML = `
    <p>Estás solicitando un prestamo por ${monto.value} a pagar en ${cuotas.value} meses por un total de ${totalPrestamo()}.</p>`
});


const totalPrestamo = () => {
    let interes = 1.5;
    total = monto.value * interes/cuotas.value;
    return total
}


