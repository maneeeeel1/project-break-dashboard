const backgrounds = [

    "./img/fondo1.jpg",
    "./img/fondo2.jpg",
    "./img/fondo3.jpg",
    "./img/fondo4.jpg",
    "./img/fondo5.jpg",
    "./img/fondo6.jpg",
    "./img/fondo7.jpg",
    "./img/fondo8.jpg",
    "./img/fondo9.jpg",
    "./img/fondo10.jpg",
    "./img/fondo11.jpg"

];

function cambio(){
const randombg = Math.floor(Math.random()*backgrounds.length);
document.body.style.backgroundImage= `url("${backgrounds[randombg]}")`;
document.body.style.backgroundSize= "cover";
document.body.style.backgroundPosition= "auto 30%";
document.body.style.transition= "background-image 0.5s ease-in-out";
};

cambio();

setInterval(cambio, 10000);