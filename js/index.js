const userName = document.getElementById('username')
const password = document.getElementById('password')
const form = document.getElementById('formSignIn')
const p_warnings = document.getElementById ("warnings")

form.addEventListener("sumbit", (e)=>{
    e.preventDefault()
    let warnings = ""
    let entrar = false
    p_warnings.innerHTML = ``
    if(userName.value.length <5){
        warnings += `El nombre muy corto.<br>`
        entrar = true
    }
    if(password.value.length <= 8) {
        warnings += `La contraseña debe tener 8 digitos mínimo.<br>`
        entrar = true
    }
    if (entrar) {
        p_warnings.innerHTML = warnings
    }

})