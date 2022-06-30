/* 
// COMPRA Y VENTA DE MONEDAS.
class Monedas {
    constructor (nombre, precioventa, preciocompra) {
        this.nombre = nombre;
        this.precioVenta = precioventa; 
        this.precioCompra = preciocompra;
    }
    comprarMoneda (cantidadMonedas) {
        let totalCompraMoneda = this.precioCompra * cantidadMonedas
        return totalCompraMoneda
    }
    venderMoneda (cantidadMonedas) {
        let totalVentaMoneda = this.precioVenta * cantidadMonedas
        return totalVentaMoneda
    }
}

const moneda1 = new Monedas ("Dolar", 210, 200)
const moneda2 = new Monedas ("Euro", 250, 260)
const moneda3 = new Monedas ("Real", 45, 40)
const moneda4 = new Monedas ("Uruguayo", 10, 7)

const listaDeMonedas = []

listaDeMonedas.push (moneda1)
listaDeMonedas.push (moneda2)
listaDeMonedas.push (moneda3)
listaDeMonedas.push (moneda4)

console.log(listaDeMonedas)

//for -> para recorrer el array de objetos (consigna) y devolver la moneda con cotizacion (sus propiedades) 
// debajo obtencion de datos a utilizar (variables/parametros)

alert("Bienvenido al TinyBank");
for(let i = 0; i < listaDeMonedas.length; i++) {
    alert(`La cotización del ${listaDeMonedas[i].nombre} hoy es: ${listaDeMonedas[i].precioVenta}$ para la venta y ${listaDeMonedas[i].precioCompra}$ para la compra.`)
}
let moneda = Number(prompt(`
        Seleccione tipo de moneda:
        1) Dolar
        2) Euro
        3) Real
        4) Uruguayo`
));
let operacion = Number(prompt(`
        Operaciones disponibles: 
        1) Comprar moneda extranjera 
        2) Vender moneda extranjera`
));
let cantidadMonedas 
const PedirCantidadMonedas = () => {
    cantidadMonedas = Number(prompt("Ingrese monto que desea comprar/vender"));
    while (isNaN((cantidadMonedas)) || cantidadMonedas <= 0)
    cantidadMonedas = Number (prompt("Ingrese monto que desea comprar/vender"))
    return cantidadMonedas
}
PedirCantidadMonedas()

const calculoOperacion = () => {
let resultado = 0;    
if (operacion === 1) { 
    switch (moneda) {
        case 1:
            resultado = moneda1.comprarMoneda(cantidadMonedas);
            break;
        case 2:
            resultado = moneda2.comprarMoneda(cantidadMonedas);
            break;
        case 3:
            resultado = moneda3.comprarMoneda(cantidadMonedas);
            break;
        case 4:
            resultado = moneda4.comprarMoneda(cantidadMonedas);
            break;
        default:
            break;
    }
    return resultado;
}
if(operacion === 2) {
    switch(moneda) {
        case 1:
            resultado = moneda1.venderMoneda(cantidadMonedas);
        break;
        case 2:
            resultado = moneda2.venderMoneda(cantidadMonedas);
        break;
        case 3:
            resultado = moneda3.venderMoneda(cantidadMonedas);
        break;
        case 4:
            resultado = moneda4.venderMoneda(cantidadMonedas);
            break;
        default:
            break;
    }
    return resultado;
} 
}

let devolucion = calculoOperacion();
alert(`El monto correspondiente en ARS$ es ${devolucion}`);
 */