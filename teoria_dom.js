/* **********     Curso JavaScript: 60. WEB APIs - #jonmircha     ********** */
/* https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model */
/* https://developer.mozilla.org/en-US/docs/Mozilla/Gecko/Chrome/API/Browser_API */
/* https://developer.mozilla.org/en-US/docs/Web/API/CSS_Object_Model */

/* console.log(window);
console.log(document);
let texto = "Hola, soy tu amigo y docente digital... Jonathan MirCha";
const hablar = (texto) => speechSynthesis.speak(new SpeechSynthesisUtterance(texto));
hablar(texto);  */

/* **********     Curso JavaScript: 61. DOM: Introducción - #jonmircha     ********** */
/* console.log("********** Elementos del Documento **********");
console.log(window.document);
console.log(document);//todo el documento HTML  
console.log(document.head);//cabezera del documento
console.log(document.body);//cuerpo
console.log(document.documentElement);//solo el HTML
console.log(document.doctype);// tipo de documento
console.log(document.charset);//juego de caracteres
console.log(document.title);//titulo
console.log(document.links);//links o  enlaces no devuelve arrays sino una HTML collection
console.log(document.images);//imágenes
console.log(document.forms);//formularios
console.log(document.styleSheets);//hojas de estilos
console.log(document.scripts);//scrips de programación
setTimeout(() => {
  console.log(document.getSelection().toString());//seleccionar parte del código
}, 2000);
document.write("<h2>Hola Mundo desde el DOM</h2>");//escribir en el final del documento antes del cierre del body */
/*
*/
/* **********     Curso JavaScript: 62. DOM: Nodos, Elementos y Selectores - #jonmircha     ********** */
//https://developer.mozilla.org/en-US/docs/Web/API/Node/nodeType
/* console.log(document.getElementsByTagName("li"));//elementos por nombre de etiquetas
console.log(document.getElementsByClassName("card"));//por nombre de clase
console.log(document.getElementsByName("nombre"));//por nombre
console.log(document.getElementById("menu"));//por id, es más rápido :)
console.log(document.querySelector("#menu"));//busca por selector valido por css
console.log(document.querySelector("a"));//el primer enlace
console.log(document.querySelectorAll("a"));//todos los enlaces
console.log(document.querySelectorAll("a").length);//cuantos enlaces
document.querySelectorAll("a").forEach((el) => console.log(el));// imprime todos los enlaces en la consola
console.log(document.querySelector(".card"));//la primer tarjeta
console.log(document.querySelectorAll(".card"));//todas las tarjetas
console.log(document.querySelectorAll(".card")[2]);//solo la tercer tarjeta 0-1-2
console.log(document.querySelector("#menu li"));//primera lista que se encuentren dentro del id menu
console.log(document.querySelectorAll("#menu li")); //todas las listas que se encuentren dentro del id menu */
/*
*/
/* **********     Curso JavaScript: 63. DOM: Atributos y Data-Attributes - #jonmircha     ********** */
/* console.log(document.documentElement.lang);//obtiene el atributo lang del documento HTML
console.log(document.documentElement.getAttribute("lang"));
console.log(document.querySelector(".link-dom").href);
console.log(document.querySelector(".link-dom").getAttribute("href"));
document.documentElement.lang = "en";//ESTABLECER VALOR AL ATRIBUTO lang
console.log(document.documentElement.lang);
document.documentElement.setAttribute("lang", "es-MX");
console.log(document.documentElement.lang);

const $linkDOM = document.querySelector(".link-dom");//para guardar el valor de elementos del DOM en una variable le anteponemos el simbolo $
$linkDOM.setAttribute("target", "_blank");//asignar atributo para abrir en nueva página el enlace
$linkDOM.setAttribute("rel", "noopener");//no hay dependencia entre la ventana nueva y la ventana de origen
$linkDOM.setAttribute("href", "https://youtube.com/jonmircha");
console.log($linkDOM.hasAttribute("rel"));
$linkDOM.removeAttribute("rel");//remover el atributo
console.log($linkDOM.hasAttribute("rel"));//true

//Data-Attributes
console.log($linkDOM.getAttribute("data-description"));
console.log($linkDOM.dataset);
console.log($linkDOM.dataset.description);
$linkDOM.setAttribute("data-description", "Modelo de Objeto del Documento");//modificar el atributo
console.log($linkDOM.dataset.description);//con la notacion del punto
$linkDOM.dataset.description = "Suscríbete a mi canal y comparte";
console.log($linkDOM.dataset.description);
console.log($linkDOM.hasAttribute("data-id"));//true
$linkDOM.removeAttribute("data-id");//remover atributo
console.log($linkDOM.hasAttribute("data-id")); //false */
/*
*/
/* **********     Curso JavaScript: 64. DOM: Estilos y Variables CSS - #jonmircha     ********** */
/* const $linkDOM = document.querySelector(".link-dom");//seleccionar atributo por clase
console.log($linkDOM.style);//muetra todas las propiedades de estilos
console.log($linkDOM.getAttribute("style"));//muestra solo los estilos que posee
console.log($linkDOM.style.backgroundColor);//accede a una propiedad específica
console.log($linkDOM.style.color);//accede a una propiedad específica
console.log(window.getComputedStyle($linkDOM));//otra forma de acceder a todas las propiedades
console.log(getComputedStyle($linkDOM).getPropertyValue("color"));//accede a una propiedad específica
$linkDOM.style.setProperty("text-decoration", "none");//establecer valores
$linkDOM.style.setProperty("display", "block");//establecer valores
$linkDOM.style.width = "50%";//ancho 50%
$linkDOM.style.textAlign = "center";//alinear texto al centro
$linkDOM.style.marginLeft = "auto";//margen izquierdo auto
$linkDOM.style.marginRight = "auto";//margen derecho auto, para centrar la caja
$linkDOM.style.padding = "1rem";//espaciado a cada lado
$linkDOM.style.borderRadius = ".5rem";//border redondeado
console.log($linkDOM.style);
console.log($linkDOM.getAttribute("style"));
console.log(getComputedStyle($linkDOM));
// //Variables CSS - Custom Properties CSS
const $html = document.documentElement, //accede a la etiqueta html
   $body = document.body;//acceder al body
let varDarkColor = getComputedStyle($html).getPropertyValue("--dark-color"),//acceder a las propiedades de css --dart-color
    varYellowColor = getComputedStyle($html).getPropertyValue("--yellow-color");
console.log(varDarkColor, varYellowColor);//acceder a las propiedades de css --yellow-color
$body.style.backgroundColor = varDarkColor;//asignar las nuevas propiedades al color de fondo del cuerpo
$body.style.color = varYellowColor;//asignar las nuevas propiedades al color de letras del cuerpo
$html.style.setProperty("--dark-color", "#000");//cambia el color a negro
varDarkColor = getComputedStyle($html).getPropertyValue("--dark-color");//asigna el nuevo valor a la variable
$body.style.setProperty("background-color", varDarkColor);//asigna el nuevo color */
/*
*/
/* **********     Curso JavaScript: 65. DOM: Clases CSS - #jonmircha     ********** */
/* const $card = document.querySelector(".card");//seleccionar atributo con la clase card
console.log($card);
console.log($card.className);//devuelve la cadena de texto del atributo class
console.log($card.classList);//devuelve DOMTokenList del atributo class
console.log($card.classList.contains("rotate-45"));//verificar si existe la clase que le indiquemos, devuelve true o false
$card.classList.add("rotate-45");//agregar la clase al atributo
console.log($card.classList.contains("rotate-45"));
console.log($card.className);
console.log($card.classList);
$card.classList.remove("rotate-45");//quitar una clase
console.log($card.classList.contains("rotate-45"));
$card.classList.toggle("rotate-45");//si el elemento tiene la clase se la quita pero si no la tiene se la agrega
console.log($card.classList.contains("rotate-45"));
$card.classList.toggle("rotate-45");
console.log($card.classList.contains("rotate-45"));
$card.classList.toggle("rotate-45");
$card.classList.replace("rotate-45", "rotate-135");//reemplazar el valor de la clase
$card.classList.add("opacity-80", "sepia");
$card.classList.remove("opacity-80", "sepia");
$card.classList.toggle("opacity-80", "sepia");  */
/*
*/
/* **********     Curso JavaScript: 66. DOM: Texto y HTML - #jonmircha     ********** */
/* const $whatIsDOM = document.getElementById("que-es");
let text = `
    <p>
      El Modelo de Objetos del Documento (<b><i>DOM - Document Object Model</i></b>) es un API para documentos HTML y XML.
    </p>
    <p>
      Éste proveé una representación estructural del documento, permitiendo modificar su contenido y presentación visual mediante código JS.
    </p>
    <p>
      <mark>El DOM no es parte de la especificación de JavaScript, es una API para los navegadores.</mark>
    </p>
  `;
//$whatIsDOM.innerText = text;//no se usa fue creada para internet explorer
$whatIsDOM.textContent = text;//para insertar solo texto
$whatIsDOM.innerHTML = text;//para insertar HTML
$whatIsDOM.outerHTML = text;  */
/*
*/
/* **********     Curso JavaScript: 67. DOM Traversing: Recorriendo el DOM - #jonmircha     ********** */
/*  const $cards = document.querySelector(".cards");//seleccionar elemento con la clase cards
console.log($cards);
console.log($cards.children);//hijos de cards
console.log($cards.children[2]);//la tercera cards, esta en la posicion 2
console.log($cards.parentElement);//elemento padre
console.log($cards.firstElementChild);//primer elemento hijo
console.log($cards.lastElementChild);//último elemento hijo
console.log($cards.previousElementSibling);//elemento anterior
console.log($cards.nextElementSibling);//elemento posterior
console.log($cards.closest("div"));//es un método para ancestro null
console.log($cards.closest("body"));// ancestro mas cercano
console.log($cards.children[3].closest("section"));// */
/*
 */
/* **********     Curso JavaScript: 68. DOM: Creando Elementos y Fragmentos - #jonmircha     ********** */
/*  const $figure = document.createElement("figure"),//crea elemento figura
  $img = document.createElement("img"),// imagen
  $figcaption = document.createElement("figcaption"),//crea elemento figcaption
  $figcaptionText = document.createTextNode("Animals"),// cre un nodo de texto
  $cards = document.querySelector(".cards"),// selecciona las cards(elemento padre)
  $figure2 = document.createElement("figure");//
$img.setAttribute("src", "https://placeimg.com/200/200/animals");//agrega el source de la imagen
$img.setAttribute("alt", "Animals");// agrega el alt de la imagen
$figure.classList.add("card");//agrega la clase card a la figura
$figcaption.appendChild($figcaptionText);// agrega el texto al hijo
$figure.appendChild($img);//imagen al hijo
$figure.appendChild($figcaption);////
$cards.appendChild($figure);//agregar la figura
//
$figure2.innerHTML = `
<img src="https://placeimg.com/200/200/people" alt="People">
<figcaption>People</figcaption>
`;
$figure2.classList.add("card");
$cards.appendChild($figure2);

const estaciones = ["Primavera", "Verano", "Otoño", "Invierno"],
  $ul = document.createElement("ul");
document.write("<h3>Estaciones del Año</h3>");
document.body.appendChild($ul);
estaciones.forEach((el) => {
  const $li = document.createElement("li");
  $li.textContent = el;
  $ul.appendChild($li);
});
const continentes = ["África", "América", "Asia", "Europa", "Oceanía"],
  $ul2 = document.createElement("ul");
document.write("<h3>Continentes del Mundo</h3>");
document.body.appendChild($ul2);
$ul2.innerHTML = "";
continentes.forEach((el) => ($ul2.innerHTML += `<li>${el}</li>`));
const meses = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
  ],
  $ul3 = document.createElement("ul"),
  $fragment = document.createDocumentFragment();//recomendado este método de los fragmentos ya solo inserta una vez en el DOM
meses.forEach((el) => {
  const $li = document.createElement("li");
  $li.textContent = el;
  $fragment.appendChild($li);
});
document.write("<h3>Meses del Año</h3>");
$ul3.appendChild($fragment);
document.body.appendChild($ul3);  */
/*
*/
/* **********     Curso JavaScript: 69. DOM: Templates HTML - #jonmircha     ********** */
/*  const $cards = document.querySelector(".cards"),
  $template = document.getElementById("template-card").content,
  $fragment = document.createDocumentFragment(),
  cardsContent = [
    {
      title: "Tecnología",
      img: "https://placeimg.com/200/200/tech",
    },
    {
      title: "Animales",
      img: "https://placeimg.com/200/200/animals",
    },
    {
      title: "Arquitectura",
      img: "https://placeimg.com/200/200/arch",
    },
    {
      title: "Gente",
      img: "https://placeimg.com/200/200/people",
    },
    {
      title: "Naturaleza",
      img: "https://placeimg.com/200/200/nature",
    },
  ];
cardsContent.forEach((el) => {
  $template.querySelector("img").setAttribute("src", el.img);
  $template.querySelector("img").setAttribute("alt", el.title);
  $template.querySelector("figcaption").textContent = el.title;
  let $clone = document.importNode($template, true);//CON EL TRUE CLONA TODA LA ESTRUCTURA DEL TEMPLATE
  $fragment.appendChild($clone);
});
$cards.appendChild($fragment);  */
/*
*/
/* **********     Curso JavaScript: 70. DOM: Modificando Elementos (Old Style) - #jonmircha     ********** */
/*  const $cards = document.querySelector(".cards"),
  $newCard = document.createElement("figure"),
  $cloneCards = $cards.cloneNode(true);
$newCard.innerHTML = `
  <img src="https://placeimg.com/200/200/any" alt="Any">
  <figcaption>Any</figcaption>
`;
//$newCard.classList.add("card");
//$cards.replaceChild($newCard, $cards.children[2]);
//$cards.removeChild($cards.lastElementChild);
//$cards.insertBefore($newCard, $cards.firstElementChild);
//document.body.appendChild($cloneCards);  */
/*
*/
/* **********     Curso JavaScript: 71. DOM: Modificando Elementos (Cool Style) - #jonmircha     ********** */

//   .insertAdjacent...
//   .insertAdjacentElement(position, el)
//   .insertAdjacentHTML(position, html)
//   .insertAdjacentText(position, text)
// Posiciones:
//   beforebegin(hermano anterior)
//   afterbegin(primer hijo)
//   beforeend(ultimo hijo)
//   afterend(hermano siguiente)
/* 
 const $cards = document.querySelector(".cards"),
  $newCard = document.createElement("figure");
let $contenCard = `
  <img src="https://placeimg.com/200/200/any" alt="Any">
  <figcaption></figcaption>
`;
$newCard.classList.add("card");

$newCard.insertAdjacentHTML("beforeend", $contenCard);//INSERTAR UN NODO HTML
$newCard.querySelector("figcaption").insertAdjacentText("afterbegin", "Any"); 
//$cards.insertAdjacentElement("afterbegin", $newCard);
//$cards.insertAdjacentElement("beforeend", $newCard); */

//$cards.prepend($newCard);//primer hijo
//$cards.append($newCard);//ultimo hijo
//$cards.before($newCard);//hermano anterior
//$cards.after($newCard);//hermano posterior
/*
*/
/* **********     Curso JavaScript: 72. DOM: Manejadores de Eventos - #jonmircha y Curso JavaScript: 73. DOM: Eventos con Parámetros y Remover Eventos - #jonmircha     ********** */
/*
Los eventos son los mecanismos que tenemos en JavaScript para controlar las acciones del usuario y definir el comportamiento del documento en cierto momento o cuando se cumplan ciertas condiciones.
Las funciones que se ejecutan en un evento se llaman Event Handler (Manejador de Eventos).
https://developer.mozilla.org/en-US/docs/Web/Events
*/
//evento como atributo HTML, no se recomienda usar
/*  function holaMundo() {
  alert("Hola Mundo");
  console.log(event);

}
//
 function saludar(nombre = "Desconocid@") {
  alert(`Hola ${nombre}`);
   console.log(event);
 }
//eventos de tipo semantico, mediante una variable con el id del elemento se ejecuta la funcion 
const $eventoSemantico = document.getElementById("evento-semantico"),
      $eventoMultiple = document.getElementById("evento-multiple"),
      $eventoRemover = document.getElementById("evento-remover");
$eventoSemantico.onclick = holaMundo;//se ejecuta la funcion sin los parentesis
//se pasa el evento mediante una funcion expresada o flecha
$eventoSemantico.onclick = function (e) {
  alert("Hola Mundo Manejador de Eventos Semántico");
   console.log(e);
   console.log(event);
 };
//eventos con manejador multiple, la más recomendada
 $eventoMultiple.addEventListener("click", holaMundo);
 $eventoMultiple.addEventListener("click", (e) => {
   alert("Hola Mundo Manejador de Eventos Múltiple");
   console.log(e);
   console.log(e.type);
   console.log(e.target);
   console.log(event);
 });
//forma para pasar parámetros a un evento, se realiza mediante una arrow function 
 $eventoMultiple.addEventListener("click", () => {
   saludar();
   saludar("Enderson");
 });

//para remover eventos con los manejadores múltiples
 const removerDobleClick = (e) => {
   alert(`Removiendo el evento de tipo ${e.type}`);
   console.log(e);
    $eventoRemover.removeEventListener("dblclick", removerDobleClick);
    $eventoRemover.disabled = true;
 };
 $eventoRemover.addEventListener("dblclick", removerDobleClick); */ 
/*
*/
/* **********     Curso JavaScript: 74. DOM: Flujo de Eventos (Burbuja y Captura) - #jonmircha     ********** */
/*
Si no se especifica el parámetro boolean, el valor por defecto es false.
  Si el boolean es falso se ejecuta la fase de burbuja (ir del elemento más interno al más externo <body>)
  Si el boolean es verdadero se ejecuta la fase de captura (ir del elemento más externo <body> al más interno)
*/
/* const $divsEventos = document.querySelectorAll(".eventos-flujo div");
function flujoEventos(e) {
  console.log(
    `Hola te saluda ${this.className}, el click lo originó ${e.target.className}`
  );
}
console.log($divsEventos);
$divsEventos.forEach((div) => {
  //Fase de burbuja
  //div.addEventListener("click", flujoEventos);
  //div.addEventListener("click", flujoEventos, false);
  //Fase de captura
  //div.addEventListener("click", flujoEventos, true);
  div.addEventListener("click", flujoEventos, {
    capture: false,//burbuja
    //capture: true,//captura
    once: true,//se ejecuta una sola vez
  });
});  */
/*
*/
/* **********     Curso JavaScript: 75. DOM: stopPropagation & preventDefault - #jonmircha     ********** */
/* const $divsEventos = document.querySelectorAll(".eventos-flujo div"),
  $linkEventos = document.querySelector(".eventos-flujo a");

function flujoEventos(e) {
  console.log(
    `Hola te saluda ${this.className}, el click lo originó ${e.target.className}`
  );
  e.stopPropagation();
}
console.log($divsEventos);
$divsEventos.forEach((div) => {
  //Fase de burbuja
  div.addEventListener("click", flujoEventos);
  //div.addEventListener("click", flujoEventos, false);
  //Fase de captura
  //div.addEventListener("click", flujoEventos, true);
  //div.addEventListener("click", flujoEventos, {
    //capture: false,
    //once: true,
  //});
});
$linkEventos.addEventListener("click", (e) => {
  alert("Hola soy tu amigo y docente digital... Jonathan MirCha");
  e.preventDefault();//detener el evento por defecto del atributo
  e.stopPropagation();//detener la propagacion hacia otros elementos
});  */
/*
*/
/* **********     Curso JavaScript: 76. DOM: Delegación de Eventos - #jonmircha     ********** */
/*  function flujoEventos(e) {
  console.log(
    `Hola te saluda ${this} el click lo originó ${e.target.className}`
  );
  //e.stopPropagation();
}
document.addEventListener("click", (e) => {
   if (e.target.matches(".eventos-flujo div")) {
    flujoEventos(e);
  }
  if (e.target.matches(".eventos-flujo a")) {
    alert("Hola soy tu amigo y docente digital... Jonathan MirCha");
    e.preventDefault();
    //e.stopPropagation();
  } 

console.log("Click en ",e.target);
});  */
/*
*/
/* **********     Curso JavaScript: 77. BOM: Propiedades y Eventos - #jonmircha     ********** */
/*
El evento DOMContentLoaded es disparado cuando el documento HTML ha sido completamente cargado y parseado, sin esperar hojas de estilo, imágenes y subtramas para finalizar la carga.
El evento load se dispara cuando se ha detectado la carga completa de la página.
Es un error frecuente usar load cuando DOMContentLoaded es mucho más apropiado.
Peticiones asíncronas pausan el parseo del DOM.
*/
// window.addEventListener("resize", (e) => {
//   console.clear();
//   console.log("********** Evento Resize **********");
//   console.log(window.innerWidth);
//   console.log(window.innerHeight);
//   console.log(window.outerWidth);
//   console.log(window.outerHeight);
//   console.log(e);
// });
// window.addEventListener("scroll", (e) => {
//   console.clear();
//   console.log("********** Evento Scroll **********");
//   console.log(window.scrollX);
//   console.log(window.scrollY);
//   console.log(e);
// });
// window.addEventListener("load", (e) => {
//   console.log("********** Evento Load **********");
//   console.log(window.screenX);
//   console.log(window.screenY);
//   console.log(e);
// });
// //es mucho más eficiente trabajar con el DOMContentLoaded que con el load
// document.addEventListener("DOMContentLoaded", (e) => {
//   console.log("********** Evento DOMContentLoaded **********");
//   console.log(window.screenX);
//   console.log(window.screenY);
//   console.log(e);
// }); 
/*
*/
/* **********     Curso JavaScript: 78. BOM: Métodos - #jonmircha     ********** */
// window.alert("Alerta");
// window.confirm("Confirmación");
// window.prompt("Aviso");
/* const $btnAbrir = document.getElementById("abrir-ventana"),
  $btnCerrar = document.getElementById("cerrar-ventana"),
  $btnImprimir = document.getElementById("imprimir-ventana");
let ventana;
$btnAbrir.addEventListener("click",(e) => (ventana = window.open("https://jonmircha.com"))
);
$btnCerrar.addEventListener("click", (e) => {
  //window.close();
  ventana.close();
});
$btnImprimir.addEventListener("click", (e) => window.print());  */


/* **********     Curso JavaScript: 79. BOM: Objetos: URL, Historial y Navegador - #jonmircha     ********** */
// console.log("********** Objeto URL (location) **********");
// //
// console.log(location);
// console.log(location.origin);//ruta de la cual se origina
// console.log(location.protocol);//file
// console.log(location.host);
// console.log(location.hostname);
// console.log(location.port); 
// console.log(location.href);
// console.log(location.hash);
// console.log(location.search);//muestra los parámetros pasados por la URL
// console.log(location.pathname);//nombre del archivo
//location.reload();
/* console.log("********** Objeto Historial (history) **********");
console.log(history);//Historial de navegación de la página
console.log(history.length);//cantidad de páginas navegadas
//history.forward(1);//ir hacia adelante
//history.go(-3);//negativo hacia atras y  positivo hacia adelante
//history.back(2);//ir hacia atrás */
// console.log("********** Objeto Navegador (navigator) **********");
// //muy importante
// console.log(navigator);//
// console.log(navigator.connection);//información de la conexión
// console.log(navigator.geolocation);//gps
// console.log(navigator.mediaDevices);//dispositivos
// console.log(navigator.mimeTypes);//tipos de formato que acepta el navegador
// console.log(navigator.onLine);//conectado o desconectado
// console.log(navigator.serviceWorker);//API para convertir un sitio normal en progresive web APP
// console.log(navigator.storage);//Localstorage / web storage
// console.log(navigator.usb);//usb conectados o desconectados
// console.log(navigator.userAgent); // arquitectura del dispositivo de conexión, navegador, etc.