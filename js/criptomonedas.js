const listaCrypto = [
{
    name: "Bitcoin",
    price: 21300,
    img: '../images/criptomonedas/bitcoin.png',
    id: 001
},
{
    name: "Dash",
    price: 47,
    img: "../images/criptomonedas/dash.png",
    id: 002
},
{
    name: "Litecoin",
    price: 53,
    img: "../images/criptomonedas/litecoin.png",
    id: 003
},
{
    name: "Ether",
    price: 1130,
    img: "../images/criptomonedas/ether.png",
    id:004
},
{
    name: "Monero",
    price: 120000,
    img: "../images/criptomonedas/monero.png",
    id: 005
},
{
    name: "Solana",
    price: 34,
    img: "../images/criptomonedas/solana.png",
    id: 006
},
{
    name: "BNB",
    price: 220,
    img: "../images/criptomonedas/bnb.png",
    id: 007
},
{
    name: "Tether",
    price: 1,
    img: "../images/criptomonedas/tether.png",
    id: 08
}
]

// RECORDAR AGREGAR PARA QUE SE PUEDA PONER CANTIDADES EN EL CARRITO|
const addCarrito = (crypto) => {
    
        carrito.push(crypto)
        alert("Agregaste " + crypto.name + " a tu compra.")
        detalleCompra.innerHTML = ``
        showCarrito()
        console.log(carrito)
        
        localStorage.setItem("Cart", carrito);
} 

let showCryptos = document.getElementById("showCryptos")
const mostrarCryptos = () => {
    listaCrypto.forEach((crypto) => {
        let card = document.createElement('div')
        card.setAttribute('class', 'divCard')
       
        card.innerHTML += `
        <img src="${crypto.img}" class="imgCards"></img>
        <h3>${crypto.name}</h3>
        <p> US$ ${crypto.price}</p>`
        
        let botonAddCart = document.createElement("button")
        botonAddCart.addEventListener("click", () => addCarrito(crypto))
        botonAddCart.innerText = "Agregar al Carrito"
        botonAddCart.setAttribute("class", "addCart")
        card.appendChild(botonAddCart)
        
        showCryptos.append(card)
    })   
    
}
mostrarCryptos()

let carrito = []

const loadPage = () => {
    if (JSON.parse(localStorage.getItem("Cart"))) {
        carrito = JSON.parse(localStorage.geteItem("Cart"))
    } else {
        localStorage.setItem("Cart", JSON.stringify([]))
        carrito = JSON.parse(localStorage.getItem("Cart"))
    }
}
loadPage()

let detalleCompra = document.getElementById('detalleCompra')
let buttonDeleteCart = document.createElement("button")
//MOSTRAR CARRITO

const showCarrito = () => {
        carritoVacio.remove()
    
        carrito.forEach((crypto) => {
        const liCarrito = document.createElement('li')
        liCarrito.setAttribute('class','liCarrito')
        liCarrito.innerHTML += `
        <img src="${crypto.img}" class="imgCardsCarrito"></img>
        <h3>${crypto.name}</h3>
        <p> US$ ${crypto.price}</p>`
        liCarrito.appendChild(buttonDeleteCart)
        detalleCompra.appendChild(liCarrito)
    })
        
        buttonDeleteCart.innerText = "Eliminar compra"
        detalleCompra.appendChild(buttonDeleteCart)
        buttonDeleteCart.setAttribute ("class", "buttonDeleteCart")
        buttonDeleteCart.onclick = () => {
            carrito = []
            detalleCompra.innerHTML=``
            console.log(carrito)
        }
        
       
}
    


let carritoVacio = document.createElement("h4")

if(!carrito.length) {
carritoVacio.innerText = ("No tienes cryptos en tu lista de compra.")
detalleCompra.append(carritoVacio)
} 


//CALCULO DE PRECIO TOTAL
const totalCryptos = carrito.map((crypto) => (crypto.price)).reduce((precioTotalCarrito, precioCrypto) => precioTotalCarrito + precioCrypto, 0);
let totalCompraCryptos = document.createElement("h4")
if (carrito.length) {
        totalCompraCryptos.innerText = ("El monto total a pagar por la compra es de " + totalCryptos)
    detalleCompra.append(totalCompraCryptos)
}