const d = document,
  n = navigator;

export default function getGeolocation(id){
   const $id = d.getElementById(id),
    options = {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0
    };

    const success = (position)=>{
        let coordenadas = position.coords;
        //console.log(coordenadas);
        $id.innerHTML = `
            <p>Tu posición actual es:</p>
            <ul>
                <li>Latitud: <b>${coordenadas.latitude}</b></li>
                <li>Longitud: <b>${coordenadas.longitude}</b></li>
                <li>Precisión: <b>${coordenadas.accuracy}</b></li>
            </ul>
            <a href="https://www.google.com/maps/@${coordenadas.latitude},${coordenadas.longitude},15z" target="_blank" rel="noopener">Ver en Google Maps</a>
        `;
    };

    const error = (err)=>{
        $id.innerHTML = `<p><mark>Error: ${err.code}: ${err.message}</mark></p>`;
        console.log(`Error ${err.code}: ${err.message}`);
    };

    n.geolocation.getCurrentPosition(success, error, options);
}