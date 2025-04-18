const climahtml= document.querySelector(".estacion")
const apikey = "7a573a50f9114271aac141338250904";
const ciudad = "Barcelona";
const url = `https://api.weatherapi.com/v1/forecast.json?key=${apikey}&q=${ciudad}&lang=es&days=1`;


function estacion () {
fetch (url).then(response => response.json())
.then(data => {
    const horas = data.forecast.forecastday[0].hour;

    let html= `
    <div class="locandtemp">
        <p>${data.location.name}</p>
        <p>${data.current.temp_c}º</p>
    </div>
    
    <div class="condition">
    <p>${data.current.condition.text}</p>
    <img src="${data.current.condition.icon}">
    <p>Viento: ${data.current.wind_kph} km/h</p>
    <p>Precipitación: ${data.current.precip_mm} mm</p>
    <p>Humedad: ${data.current.humidity}%</p>
    </div>
    
    <div class="barrahoras">
    `;

    horas.forEach(hora => {
        const horahtml = hora.time.split(" ")[1].split(":")[0];
        html +=`
        <div class="hora">
            <p>${horahtml}h</p>
            <img src="${hora.condition.icon}" alt="">
        </div>`;
        
    });

    html += `</div>`;
    climahtml.innerHTML = html;


}).catch (error => console.error("error al obtener datos", error));

};

estacion()