import hamburgerMenu from "./dom/menu_hamburguesa.js";
import {digitalClock, alarm} from "./dom/reloj_alarma.js";
import {atajos, moveBall} from "./dom/eventos-teclado.js";
import countDown from "./dom/cuenta_regresiva.js";
import scrollTopButton from "./dom/boton_scroll.js";
import darkTheme from "./dom/tema_oscuro.js";
import responsiveMedia from "./dom/objeto_responsive.js";
import responsiveTester from "./dom/prueba_responsive.js";
import userDeviceInfo from "./dom/deteccion_dispositivos.js";
import networkStatus from "./dom/deteccion_red.js";
import webCam from "./dom/deteccion_webcam.js";
import getGeolocation from "./dom/geolocalizacion.js";
import searchFilters from "./dom/filtro_busquedas.js";
import sorteo from "./dom/sorteo.js";
import slider from "./dom/carrusel.js";
import scrollSpy from "./dom/scroll_espia.js";
import smartVideo from "./dom/video_inteligente.js";
import contactFormValidations from "./dom/validaciones_formulario.js";
import speechReader from "./dom/narrador.js";
const d = document;

//llamado de funciones menu de hamburguesa, reloj y alarma
d.addEventListener("DOMContentLoaded", (e) => {
  hamburgerMenu(".panel-btn", ".panel", ".menu a");
  digitalClock("#reloj", "#activar-reloj", "#desactivar-reloj");
  alarm("assets/car-alarm.mp3", "#activar-alarma", "#desactivar-alarma");
  countDown(
    "countdown",
    "Sep 03, 2022 01:23:23",
    "Feliz cumpleaños Ing. Enderson Marín desarrollador web Full Stack"
  );

  scrollTopButton(".scroll-top-btn");

  responsiveMedia(
    "youtube",
    "(min-width: 1024px)",
    `<a href="https://youtu.be/6IwUl-4pAzc?list=PLvq-jIkSeTUZ6QgYYO3MwG9EMqC-KoLXA" target="_blank" rel="noopener">Ver Video</a>`,
    `<iframe width="560" height="315" src="https://www.youtube.com/embed/6IwUl-4pAzc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
  );
  responsiveMedia(
    "gmaps",
    "(min-width: 1024px)",
    `<a href="https://goo.gl/maps/uy6uRFi2DG5SRQ2x8" target="_blank" rel="noopener">Ver Mapa</a>`,
    `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62738.43047680623!2d-63.28778087277071!3d10.645304757052198!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8c33dcdf8adf07bb%3A0x89afa1986ae1112d!2sCar%C3%BApano%2C%20Sucre%2C%20Venezuela!5e0!3m2!1ses!2sco!4v1632244586735!5m2!1ses!2sco" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>`
  );

  responsiveTester("responsive-tester");

  userDeviceInfo("user-device");

  webCam("webcam");
  getGeolocation("geolocation");
  searchFilters(".card-filter", ".card");
  sorteo("#winner-btn", ".player");
  slider();
  scrollSpy();
  smartVideo();
  contactFormValidations();
});

darkTheme(".dark-theme-btn", "dark-mode");
networkStatus();

speechReader();

/* EVENTOS DEL TECLADO */
//metodo keydown: se ejecuta al presionar la tecla
//metodo keyup: se ejecuta al soltar la tecla
//metodo keypress: se ejecuta al mantener presionada la tecla
d.addEventListener("keydown", (e) => {
  atajos(e);
  moveBall(e, ".ball", ".stage");
});
