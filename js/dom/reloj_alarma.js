const d = document;
export function digitalClock(clock, btnPlay, btnStop) {
  let clockTempo; //declaramos esta variable que luego guardará el setInterval con el reloj
  //asignamos el evento click a los botones, este recibe el nombre del evento y la funcion a ejecutar
  d.addEventListener("click", (e) => {
    //si el boton es play ejecuta lo siguiente
    if (e.target.matches(btnPlay)) {
      clockTempo = setInterval(() => {
        //se declara la variable clockHour para guardar la fecha convertida en formato string
        let clockHour = new Date().toLocaleTimeString();
        //seleccionamos el elemento con id reloj y le agregamos la hora en un h2
        d.querySelector(clock).innerHTML = `<h2>${clockHour}</h2>`;
      }, 1000); //se reproducira cada segundo

      e.target.disabled = true;//desabilitamos el boton de play
    }
    //si el boton es detener ejecuta lo siguiente
    if (e.target.matches(btnStop)) {
      clearInterval(clockTempo);//detenemos el setInterval
      d.querySelector(clock).innerHTML = null;//eliminamos el h2 con la hora del div
      d.querySelector(btnPlay).disabled = false;//habilitamos de nuevo el boton de play
    }
  });
}

export function alarm(sound, btnPlay, btnStop) {
  let alarmTempo;//declaramos esta variable que luego guardará el setInterval con el reloj
 
  const $alarm = d.createElement("audio");//creamos el elemento de audio
  $alarm.src = sound;//asignamos el source del audio
 //asignamos el evento click a los botones, este recibe el nombre del evento y la funcion a ejecutar
  d.addEventListener("click", (e) => {
    //si el boton es play ejecuta lo siguiente
    if (e.target.matches(btnPlay)) {
      alarmTempo = setTimeout(() => {
        $alarm.play();//reproducir el sonido de inmediato, cero milisegundos
      }, 0);

      e.target.disabled = true;//desabilitamos el boton de play
    }
    //si el boton es stop ejecuta lo siguiente
    if (e.target.matches(btnStop)) {
      clearTimeout(alarmTempo); //detenemos el setTimeout
      $alarm.pause(); //pausamos el sonido
      $alarm.currentTime = 0; //volvemos el tiempo de la reproducción al inicio
      d.querySelector(btnPlay).disabled = false; //habilitamos de nuevo el boton de reproducir alarma
    }
  });
}
