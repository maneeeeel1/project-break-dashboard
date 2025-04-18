
export function time(){
    const now= new Date();
    let horas = now.getHours();
    let minutos = now.getMinutes();
    let segundos = now.getSeconds();
    let dia = now.getDate();
    let mes = now.getMonth() +1;
    let año = now.getFullYear();

    horas = horas < 10 ? "0" + horas : horas;
    minutos = minutos < 10 ? "0" + minutos : minutos;
    segundos = segundos < 10 ? "0" + segundos : segundos; 
    dia = dia < 10 ? "0" + dia : dia; 
    mes = mes < 10 ? "0" + mes : mes; 

    const reloj = `${horas}:${minutos}:${segundos}`;
    const fecha = `${dia}/${mes}/${año}`;

    document.querySelector(".clock").textContent = reloj;
    document.querySelector(".day").textContent = fecha;

    let frases="";
    const numerohoras=parseInt(horas);

    if (numerohoras >= 7 && numerohoras <9){
        frases = "Buenos dias, hora de levantarse!";

    }else if ( numerohoras >= 9 && numerohoras < 11){
        frases ="Hora de comenzar a picar codigo 👨🏽‍💻"

    }else if ( numerohoras >= 11 && numerohoras < 14){
        frases ="Ves pensando que quieres comer..."

    }else if ( numerohoras >= 14 && numerohoras < 18){
        frases ="Ya se acaba el dia chaval!!"

    } else if ( numerohoras >= 18 && numerohoras < 22){
        frases ="Piensa en la pedazo de cena que toca!"

    }else {
        frases ="Hora de descansar 🛏"
    }

    document.querySelector(".frase").textContent = frases;

}
setInterval(time, 1000)

time()
