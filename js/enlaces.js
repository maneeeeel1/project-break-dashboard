export function links(){

const nombre = document.getElementById("nombre");
const link = document.getElementById("enlace");
const contenedor = document.querySelector(".contenedorenlaces");
const btn = document.querySelector(".generar1");

let guardarenlaces = JSON.parse(localStorage.getItem("enlaces")) || [];


    guardarenlaces.forEach(enlace => {
        crearEnlace(enlace.nombre, enlace.url);
    });


btn.addEventListener("click", enlaces);

function enlaces(){

    const nombreValor = nombre.value;
    let linkValor = link.value;

    if (!nombreValor || !linkValor) {
        alert("Por favor, rellena ambos campos.");
        return;
    }

    const nuevo = {
        nombre: nombreValor,
        url: linkValor,
    };

    guardarenlaces.push(nuevo);
    localStorage.setItem("enlaces", JSON.stringify(guardarenlaces));

    crearEnlace(nuevo.nombre, nuevo.url);

    
    nombre.value="";
    link.value="";

}

function crearEnlace(nombreTexto, url){

        contenedor.innerHTML+=`
        <div class="divlink">
            <a class="newlink" href="${url}" target="_blank">${nombreTexto}</a>
            <span class="cierrelink"><img class="cruz" src="./img/cierre.svg"></span>
        </div>`;

        
            }

            contenedor.addEventListener("click", (e) =>{

                if(e.target && e.target.matches (".cierrelink img")){
                const div = e.target.closest(".divlink");
                const textoEnlace = div.querySelector("a").textContent;
    
    
                div.remove();
    
                guardarenlaces = guardarenlaces.filter(e=>e.nombre !== textoEnlace);
                localStorage.setItem("enlaces", JSON.stringify(guardarenlaces));
            
        }
    });
};

if (window.location.pathname.includes("enlaces.html")) {
    links();
}






