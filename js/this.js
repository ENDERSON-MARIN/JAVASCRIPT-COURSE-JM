  /* **********     Curso JavaScript: 57. this - #jonmircha     ********** */
/* DEFINICION: es una palabra reservada this en js,  */
/*      console.log(this);//devuelve el objeto global window
        console.log(window);
        console.log(this === window);//true
        this.nombre = "Contexto Global";
        console.log(this.nombre);
        function imprimir() {
          console.log(this.nombre);
        }
        imprimir();
        const obj = {
          nombre: "Contexto Objeto",
          imprimir: function () {
            console.log(this.nombre);
          }
        }
        obj.imprimir();//imprime el contexto del objeto no el global

        const obj2 = {
          nombre: "Contexto Objeto 2",
          imprimir
        }
        obj2.imprimir();//imprime el contexto del objeto 2

        const obj3 = {
          nombre: "Contexto Objeto 3",
          imprimir: () => {
            console.log(this.nombre);
          }
        }
        obj3.imprimir();//imprime el contexto global con las arrow function

        function Persona(nombre) {
          const that = this;
          //this.nombre = nombre;
          that.nombre = nombre;
          //return console.log(this.nombre);
          //return function () {
          //console.log(this.nombre);
          //}
          //return () => console.log(this.nombre);
          return function () {
            console.log(that.nombre);//imprime contexto global
          }
        }
        let jon = new Persona("Jon");
        jon();
 */



/* **********     Curso JavaScript: 58. call, apply, bind - #jonmircha     ********** */
/* DEFINICION:  */
/*      console.log(this);
    this.lugar = "Contexto Global";
    function saludar(saludo, aQuien) {
      console.log(`${saludo} ${aQuien} desde el ${this.lugar}`);
    }
    saludar("Hola", "kEnAi");
    const obj = {
      lugar: "Contexto Objeto"
    }
    saludar.call(obj, "Hola", "Jon");//llama al contexto del objeto
    saludar.call(null, "Hola", "Jon");//si colocamos null en el parametro devuelve contexto global
    saludar.call(this, "Hola", "Jon");
    saludar.apply(obj, ["Adios", "MirCha"]);
    saludar.apply(null, ["Adios", "MirCha"]);
    saludar.apply(this, ["Adios", "MirCha"]);
    this.nombre = "Window";
    const persona = {
      nombre: "Jon",
      saludar: function () {
        console.log(`Hola ${this.nombre}`)
      }
    }
    persona.saludar();
    const otraPersona = {
      saludar: persona.saludar.bind(this)
    }
    otraPersona.saludar(); 
 */


 