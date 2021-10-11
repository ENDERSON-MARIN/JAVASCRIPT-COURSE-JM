const d = document;

export default function sorteo(btn, selector) {
  const getWinner = (selector) => {
    const $players = d.querySelectorAll(selector),
      random = Math.floor(Math.random() * $players.length),
      winner = $players[random];

    //console.log($players, random, winner);

    return `El ganador es: ${winner.textContent}`;
  };

  d.addEventListener("click", (el) => {
    if (el.target.matches(btn)) {
      let result = getWinner(selector);
      console.log(result);
      alert(result);
    }
  });


}


/* OBTENER GANADORES RANDOM DE LOS COMENTARIOS DE YOUTUBE APLICA TAMBIEN PARA OTRA RED SOCIAL SOLO ES BUSCAR Y EVALUAR EL SELECTOR VÁLIDO */

/* const getWinnerComment = (selector) => {
    const $players = document.querySelectorAll(selector),
      random = Math.floor(Math.random() * $players.length),
      winner = $players[random];

    //console.log($players, random, winner);

    return `El ganador es: ${winner.textContent}`;
  };

getWinnerComment("ytd-comment-thread-renderer #author-text span"); */
