const home = document.getElementById("home")
const mov = document.getElementById("movimientos")
const datosUsuario = document.getElementById("datosUsuario")

const bienvenida = document.createElement("h1")
bienvenida.setAttribute("class", "bienvenida_h1")
bienvenida.innerText = `Bienvenido al TinyBank! `
home.appendChild(bienvenida);

const tablaUsuario = document.createElement("table")
tablaUsuario.setAttribute("class", "table table-sm")
const numeroDeCuenta = 45356456 + Math.random()
const numeroDeCuentaUSD = 341432 + Math.random()

tablaUsuario.innerHTML= `
        <tbody>
            <thead>
              <tr class="table-success" >
                <th colspan="1">Tipo de cuenta</th>
                <th colspan="2">Moneda</th>
                <th colspan="3">Cuenta</th>
                <th colspan="4">Saldo</th>
              </tr>
            </thead>
              <tr>
                <td colspan="1">Caja de Ahorro</th>
                <td colspan="2">$</td>
                <td colspan="3">${numeroDeCuenta}</td>
                <td colspan="4">300.392,29</td>
              </tr>
              <tr>
                <td colspan="1">Cuenta Corriente</th>
                <td colspan="2">US$D</td>
                <td colspan="3">${numeroDeCuentaUSD}</td>
                <td colspan="4">231.543,50</td>
              </tr>
        </tbody>
`
home.appendChild(tablaUsuario)
  

