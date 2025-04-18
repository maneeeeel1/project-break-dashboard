export function contrasena(){

const home = document.querySelector(".home");
const contador = document.querySelector(".number");
const btngenerar = document.querySelector(".generar2");
const resultados = document.querySelector(".resultadoscontraseña");

const mayus ="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const minus = "abcdefghijklmnopqrstuvwxyz";
const num = "0123456789";
const simb = "!@#$%^&*()-_=+";
const todos = mayus + minus + simb + num;


function generar() {
    let contraseña = "";
    const longitud= parseInt(contador.value);

    contraseña += mayus[Math.floor(Math.random() * mayus.length)];
    contraseña += minus[Math.floor(Math.random() * minus.length)];
    contraseña += num[Math.floor(Math.random() * num.length)];
    contraseña += simb[Math.floor(Math.random() * simb.length)];

    for(let i = contraseña.length; i < longitud; i++) {
        contraseña += todos[Math.floor(Math.random() * todos.length)];

    }
        contraseña = contraseña.split("").sort(() => Math.random() - .5).join("")
        resultados.innerHTML = `<p>${contraseña}</p>`;

}
    btngenerar.addEventListener("click", generar);

}

//home.addEventListener("click", () =>{

//})