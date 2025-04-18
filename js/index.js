function index (id, link){
    fetch(link).then(response=>response.text())
    .then(html =>{
        document.getElementById(id).innerHTML = html;
    
    }).catch( error =>{
        document.getElementById(id).innerHTML =`<p>Error al cargar ${link}</p>`
        console.error(error);
        });
}

window.onload = () =>{
    index("widgetreloj", "./reloj.html");
    index("widgetcontrasena", "./contrasena.html");
    index("widgetenlaces", "./enlaces.html");
    index("widgetestacion", "./estacion.html");

setTimeout(() =>{
    import('./reloj.js').then(modulo => {
        modulo.time();
      });
}, 500);

setTimeout(() =>{
    import('./contrasena.js').then(modulo => {
        modulo.contrasena();
      });
}, 500);

setTimeout(() =>{
    import('./enlaces.js').then(modulo => {
        modulo.links();
      });
}, 500);

setTimeout(() =>{
    import('./estacion.js').then(modulo => {
        modulo.estacion();
      });
}, 1000);
}





