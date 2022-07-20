let listaCrypto;

fetch('/json/crypto.json')
.then(respuesta => respuesta.json())
.then(info => {
    console.log(info);
    listaCrypto = info;
    for (const crypto of listaCrypto) {
            let card = document.createElement('div')
            card.setAttribute('class', 'divCard')
           
            card.innerHTML += `
            <img src="${crypto.img}" class="imgCards"></img>
            <h3>${crypto.name}</h3>
            <p> US$ ${crypto.price}</p>`
            
            let botonAddCart = document.createElement("button")
            botonAddCart.addEventListener("click", () => addCarrito(crypto))
            botonAddCart.innerText = "Comprar"
            botonAddCart.setAttribute("class", "addCart")
            botonAddCart.setAttribute("class", "btn btn-outline-success")
            card.appendChild(botonAddCart)
            
            showCryptos.append(card)
    }
})
.catch(error => console.log(error));





const addCarrito = (crypto) => {
        carrito.push(crypto)
        Swal.fire({
            icon: 'success',
            title: ("Agregaste " + crypto.name + " a tu compra."),
          })
        detalleCompra.innerHTML = ``
        showCarrito()
        localStorage.setItem("carrito", JSON.stringify(carrito));
} 





let carrito = JSON.parse(localStorage.getItem('carrito')) || [];


let detalleCompra = document.getElementById('detalleCompra')
let buttonDeleteCart = document.createElement("button")

//MOSTRAR CARRITO

let carritoVacio = document.createElement("h4")

if(!carrito.length) {
carritoVacio.innerText = ("No tienes cryptos en tu lista de compra.")
detalleCompra.append(carritoVacio)
} 


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
        //CALCULO DE PRECIO TOTAL
        const totalCryptos = carrito.map((crypto) => parseInt((crypto.price))).reduce((precioTotalCarrito, precioCrypto) => precioTotalCarrito + precioCrypto, 0);
        let totalCompraCryptos = document.createElement("h4")
        if (carrito.length) {
                totalCompraCryptos.innerText = ("El monto total a pagar por la compra es de " + totalCryptos)
            detalleCompra.append(totalCompraCryptos)
        }


        buttonDeleteCart.innerText = "Eliminar compra"
        detalleCompra.appendChild(buttonDeleteCart)
        buttonDeleteCart.setAttribute ("class", "buttonDeleteCart")
        buttonDeleteCart.setAttribute ("class", "btn btn-outline-danger")
        buttonDeleteCart.onclick = () => {
            carrito = []
            detalleCompra.innerHTML=``
            detalleCompra.innerHTML=`El carrito está vacío. `
            
            console.log(carrito)
        }   
}
const loadPage = () => {
    if (JSON.parse(localStorage.getItem('carrito'))) {
        carrito = JSON.parse(localStorage.getItem("carrito"))
        showCarrito()
    } else {
        localStorage.setItem("Cart", JSON.stringify([]))
        carrito = JSON.parse(localStorage.getItem("Cart"))
    }
}
loadPage() 

