const form = document.getElementById("formSignIn");
const userName = document.getElementById("username");
const password = document.getElementById("password");
const p_warnings = document.getElementById ("warnings")

 form.addEventListener("submit", (e)=>{
    e.preventDefault()
    let warnings = ""
    let entrar = false
    p_warnings.innerHTML = ``
    if(userName.value.length <5){
        warnings += `El nombre muy corto.<br>`
        entrar = true
    }if(password.value.length <= 8) {
        warnings += `La contraseña debe tener 8 digitos mínimo.<br>`
        entrar = true
    }if (entrar) {
        p_warnings.innerHTML = warnings
    }else{
        location.replace("./pages/home.html")
    }
    })
 
/* form.addEventListener("submit",(e) => {
    e.preventDefault();  
    //form = e.target;
    let user = userName.value;
    let pass = form.children[1].children['password'].value;

    console.log(user);
    console.log(pass);


}) */



