/* AJAX: METODO NATIVO XMLHttpRequest */

//funciones autoejecutables
(() => {
  //PASO 1: LA INSTANCIA
  const xhr = new XMLHttpRequest(),
    $xhr = document.getElementById("xhr"),
    $fragment = document.createDocumentFragment();

  //PASO 2: ASIGNACION DEL EVENTO, AQUI VA LA LÓGICA NECESARIA
  xhr.addEventListener("readystatechange", (e) => {
    if (xhr.readyState !== 4) return; //SI EL READY_STATE NO ESTA COMPLETO RETORNA;

    //console.log(xhr);

    if (xhr.status >= 200 && xhr.status <= 300) {
      //console.log("Exito");
      //console.log(xhr.responseText);
      let json = JSON.parse(xhr.responseText); //CONVIERTE LA RESPUESTA EN ARRAY
      //console.log(json);

      json.forEach((el) => {
        //RECORRE EL JSON
        const $li = document.createElement("li"); //se crea el elemento li
        $li.innerHTML = `${el.name}---${el.email}---${el.phone}`;
        $fragment.appendChild($li);
      });

      $xhr.appendChild($fragment);
    } else {
      //console.log("Error");
      let message = xhr.statusText || "Ocurrió un Error";
      $xhr.innerHTML = `Error ${xhr.status}: ${message}`;
    }

    //console.log("Este mensaje se imprimirá de cualquier forma");
  });

  //PASO 3: ABRIR LA PETICION
  //URL EXTERNA
  xhr.open("GET", "https://jsonplaceholder.typicode.com/users/");

  //ARCHIVO LOCAL
  //xhr.open("GET", "assets/users.json");

  //PASO 4: ENVIAR LA PETICION
  xhr.send();
})();

/* AJAX: API DE FETCH */

(() => {
  const $fetch = document.getElementById("fetch"),
    $fragment = document.createDocumentFragment();

  fetch("https://jsonplaceholder.typicode.com/users")
    //fetch("https://assets/users.json") LOCALMENTE
    .then((res) => (res.ok ? res.json() : Promise.reject(res)))
    .then((json) => {
      //console.log(json);
      json.forEach((el) => {
        //RECORRE EL JSON
        const $li = document.createElement("li"); //se crea el elemento li
        $li.innerHTML = `${el.name}---${el.email}---${el.phone}`;
        $fragment.appendChild($li);
      });
      $fetch.appendChild($fragment); //se hace una sola inserción en el DOM por más elementos que tenga
    })
    .catch((err) => {
      console.log(err);
      let message = err.statusText || "Ocurrió un Error";
      $fetch.innerHTML = `Error ${err.status}: ${message}`;
    })
    .finally(() => {
      /*       console.log(
        "Esto se ejecutará independientememnte del resultado de la Promesa Fetch"
      ); */
    });
})();

/* AJAX: API Fetch + Async-Await */

(() => {
  const $fetchAsync = document.getElementById("fetch-async"),
    $fragment = document.createDocumentFragment();

  async function getData() {
    try {
      let res = await fetch("https://jsonplaceholder.typicode.com/users"),
        json = await res.json();

      //console.log(res, json);

      //if(!res.ok) throw new Error("Ocurrió un error al solicitar los datos");
      if (!res.ok) throw {status: res.status, statusText: res.statusText};

      json.forEach((el) => {
        //RECORRE EL JSON
        const $li = document.createElement("li"); //se crea el elemento li
        $li.innerHTML = `${el.name}---${el.email}---${el.phone}`;
        $fragment.appendChild($li);
      });
      $fetchAsync.appendChild($fragment); //se hace una sola inserción en el DOM por más elementos que tenga
    } catch (err) {
      console.log(err);
      let message = err.statusText || "Ocurrió un Error";
      $fetchAsync.innerHTML = `Error ${err.status}: ${message}`;
    } finally {
      /*     console.log(
        "Esto se ejecutará independientememnte del resultado de la Promesa Fetch"
      );  */
    }
  }
  getData();
})();

/* AJAX: AXIOS CON PROMESAS */

(() => {
  const $axios = document.getElementById("axios"),
    $fragment = document.createDocumentFragment();

  axios
    .get("https://jsonplaceholder.typicode.com/users")
    .then((res) => {
      //console.log(res);
      let json = res.data;
      json.forEach((el) => {
        //RECORRE EL JSON
        const $li = document.createElement("li"); //se crea el elemento li
        $li.innerHTML = `${el.name}---${el.email}---${el.phone}`;
        $fragment.appendChild($li);
      });
      $axios.appendChild($fragment); //se hace una sola inserción en el DOM por más elementos que tenga
    })
    .catch((err) => {
      console.log(err.response);
      let message = err.response.statusText || "Ocurrió un Error";
      $axios.innerHTML = `Error ${err.response.status}: ${message}`;
    })
    .finally(() => {
      //console.log("Esto se ejecutará independientemente del resultado Axios");
    });
})();

/* AJAX: AXIOS CON ASYNC AWAIT */

(() => {
  const $axiosAsync = document.getElementById("axios-async"),
    $fragment = document.createDocumentFragment();

  async function getData() {
    try {
      //let res = await axios.get("assets/users.json"),//archivos locales
      let res = await axios.get("https://jsonplaceholder.typicode.com/users"),
      json = await res.data;
      //console.log(res, json);
      json.forEach((el) => {
        //RECORRE EL JSON
        const $li = document.createElement("li"); //se crea el elemento li
        $li.innerHTML = `${el.name}---${el.email}---${el.phone}`;
        $fragment.appendChild($li);
      });
      $axiosAsync.appendChild($fragment); //se hace una sola inserción en el DOM por más elementos que tenga
    } catch (err) {
      console.log(err.response);
      let message = err.response.statusText || "Ocurrió un Error";
      $axiosAsync.innerHTML = `Error ${err.response.status}: ${message}`;
    } finally {
      //console.log("Esto se ejecutará independientemente del try...catch");
    }
  }

  getData();
})();
