const d = document;

export default function countDown(id, limitDate, finalMessage){
    const $countdown = d.getElementById(id),
          countdownDate = new Date(limitDate).getTime();

    let countdownTempo = setInterval(()=>{
// le asignamos a la variable now la fache actual y mediante getTime(), se obtiene la hora en milisegundos
        let now = new Date().getTime(),
//en la variable limitTime le asignamos la resta de la fecha introducida menos la fecha actual en milisegundos
            limitTime = countdownDate - now,
//luego realizamos la conversion en días, horas, minutos y segundos
            days = Math.floor(limitTime / (1000*60*60*24)),
            hours = ("0" +  Math.floor(limitTime % (1000*60*60*24)/(1000*60*60))).slice(-2),
            minutes = ("0" +  Math.floor(limitTime % (1000*60*60)/(1000*60))).slice(-2),
            seconds = ("0" +  Math.floor(limitTime % (1000*60)/(1000))).slice(-2);

        $countdown.innerHTML = `<h3>Faltan: ${days} días ${hours} horas ${minutes} minutos ${seconds} segundos para mi próximo cumpleaños</h3>`;

        //console.log(countdownDate, now, limitTime);

        if(limitTime < 0){
            clearInterval(countdownTempo);
            $countdown.innerHTML = `<h3> ${finalMessage}</h3>`;
        }    

    }, 1000);
}