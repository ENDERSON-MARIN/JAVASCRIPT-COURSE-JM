/* 1) Programa una función que cuente el número de caracteres de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá 10. */
// SOLUCION EJERCICIO #1

//CON FUNCION DECLARADA
/*  function contarCarateres(cadena) {
  if (cadena!= "" || typeof cadena === "string" ) {
      console.log(`El número de caracteres de la cadena ingresada es= ${cadena.length}`);       
  } else { 
      alert("La cadena ingresada no es válida, por favor verifique");
  }

}

contarCarateres("hercas publicidad")  */

//CON FUNCION EXPRESADA O  FUNCION FLECHA

/* const contarCaracteres = (cadena = "") =>
(!cadena)
    ?console.warn("No ingresaste ninguna cadena")
    :console.info(`La cadena ${cadena} tiene ${cadena.length} caracteres`);

contarCaracteres();
contarCaracteres("Love Javascript");  */
 
/* 
2) Programa una función que te devuelva el texto recortado según el número de caracteres indicados, pe. miFuncion("Hola Mundo", 4) devolverá "Hola". */

//SOLUCION EJERCICIO #2

/* let texto = "Javascript";

 function cortarTexto(texto,limite){

    if (texto!= "" || typeof texto === "string" ) {
        let textoCortado = texto.slice(0,limite); //Primer parametro : Donde empieza Segundo parametro: Donde termina
        console.log(`El texto ingresado cortado es= ${textoCortado}`); 
    }else{
        alert("El texto ingresado no es válido, por favor verifique");
    }
}
cortarTexto(texto, 9) */

//CON FUNCION FLECHA

/* const cortarTexto = (texto = "", limite = undefined) =>
    (!texto)
        ?console.warn("No ingresaste ningun texto")
        :(limite === undefined)
            ?console.warn("No ingresaste el limite para recortar el texto")
            :console.log(`El texto recortado es: ${texto.slice(0,limite)} y el límite es: ${limite}`)

cortarTexto()//sin pasar parámetros
cortarTexto("Programacion Web")//sin pasar el límite
cortarTexto("Programación Web", 12)// pasando parámetros texto y limite  */
 
/* 3) Programa una función que dada una String te devuelva un Array de textos separados por cierto caracter, pe. miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal']. */

//SOLUCION EJERCICIO #3

/*let cadena = "lunes,martes,miercoles,jueves,viernes,sabado,domingo";
 function stringToArray(cadena){
 


    if (cadena!= "" || typeof cadena === "string" ) {
        let arrayDeCadenas = cadena.split(',', 6);//primer parámetro es el separador y el segundo es el limite
        console.log(`La cadena ingresada convertida a array es= ${arrayDeCadenas}`); 
    }else{
        alert("La cadena ingresada no es válida, por favor verifique");
    }
}

stringToArray(cadena);
 */

//CON FUNCION FLECHA

/* const stringToArray = (cadena ="", separador = undefined)=>
    (!cadena)
        ?console.warn("No ingresaste una cadena de texto")
        :(separador===undefined)
            ?console.warn("No ingresaste el caracter separador")
            :console.log(cadena.split(separador));

stringToArray("Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam repellat similique consequatur natus necessitatibus sapiente eos, aperiam accusantium maiores harum in ab nisi reprehenderit eum eaque vero dolore laborum est?"," ")//con cadena de texto y separador

stringToArray("Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam repellat similique consequatur natus necessitatibus sapiente eos, aperiam accusantium maiores harum in ab nisi reprehenderit eum eaque vero dolore laborum est?")//solo cadena sin separador */

/* 4) Programa una función que repita un texto X veces, pe. miFuncion('Hola Mundo', 3) devolverá Hola Mundo Hola Mundo Hola Mundo.  */

//SOLUCION EJERCICIO #4

/* let texto = "Venezuela, ";

 function repetirTexto(texto){
 
    if (texto!= "" || typeof texto === "string" ) {
        let textoRepetido = texto.repeat(5);
        console.log(`El texto ingresado repetido es= ${textoRepetido}`); 
    }else{
        alert("El texto ingresado no es válido, por favor verifique");
    }
}

repetirTexto(texto);
  */

//SOLUCION CON FUNCION FLECHA
/* 
const repetirTexto = (texto = "", veces = undefined)=>{
    if(!texto) return console.warn("No ingresaste un texto");

    if(veces === undefined) return console.warn("No ingresaste el número de veces a repetir el texto");

    if(veces===0) return console.error("El número de veces no puede ser 0");

    if(Math.sign(veces)=== -1) return console.error("El número de veces no puede ser negativo");

    for ( let i=1; i <= veces; i++)console.info(`${texto}, ${i}`);

}

repetirTexto("", 10);
repetirTexto("Programación Backend");
repetirTexto("Programación Backend", 0);
repetirTexto("Programación Backend", -5);
repetirTexto("Programación Backend", 5); */

/* 
5) Programa una función que invierta las palabras de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá "odnuM aloH".*/

 
//SOLUCION AL EJERCICIO #5 CON FUNCION FLECHA

/* const invertirTextos = (texto = "") => 
    (!texto)
        ?console.warn("No ingresaste una cadena de texto")
        :console.info(texto.split("").reverse().join(""));
//split convierte el texto en un array, 
//reverse invierte el array
//join une los elementos de un array y los devuelve
invertirTextos();//SIN TEXTO
invertirTextos(" PROGRAMACIÓN FUNCIONAL");
         */

/*
6) Programa una función para contar el número de veces que se repite una palabra en un texto largo, pe. miFuncion("hola mundo adios mundo", "mundo") devolverá 2.*/

 
//SOLUCION AL EJERCICIO #6 CON FUNCION FLECHA

/* const textoEnCadena = (cadena = "",texto = "")=>
{
    if(!cadena) return console.warn("No ingresaste el texto largo");

    if(!texto) return console.warn("No ingresaste la palabra a evaluar");

    let i = 0;
    let contador = 0;

        while(i !== -1){
            i = cadena.indexOf(texto,i);
            if (i !== -1){
            i++;
            contador++;
            }
        }
    return console.info(`La palabra ${texto} se repite ${contador} veces`);

}

textoEnCadena();
textoEnCadena("", "mundo");
textoEnCadena("hola mundo adios mundo peli mundo, papo mundo,porto mundo", "mundo"); */

/*
7) Programa una función que valide si una palabra o frase dada, es un palíndromo (que se lee igual en un sentido que en otro), pe. mifuncion("Salas") devolverá true.
*/

/* const palindromo = (frase = "")=>{
    if(!frase) return console.warn("No ingresaste la frase a evaluar");

    frase = frase.toLowerCase();
    let alReves = frase.split("").reverse().join("");

    return (frase === alReves)
        ?console.info(`Sí es palindromo, frase original ${frase}, Frase al revés ${alReves}`):console.info(`No es palindromo, frase original ${frase}, Frase al revés ${alReves}`);

}

palindromo();
palindromo("SolOS");
palindromo("SALARIO"); */


/*
8) Programa una función que elimine cierto patrón de caracteres de un texto dado, pe. miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz") devolverá  "1, 2, 3, 4 y 5.
*/

/* const eliminarCaracteres = (texto = "", patron = "")=>
    (!texto)
        ?console.warn("No ingresaste el texto")
        :(!patron)
            ?console.warn("No ingresaste un patron de caracteres")
            :console.info(texto.replace(new RegExp(patron, "ig"),""));

eliminarCaracteres();
eliminarCaracteres("xyz1, xyz2, xyz3, xyz4 y xyz5");
eliminarCaracteres("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz");
eliminarCaracteres("Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui nam delectus, debitis necessitatibus quidem aperiam dolorem! Adipisci consectetur magni veniam est sed corrupti provident! Voluptatibus obcaecati placeat repellendus corrupti aliquid.", "[a-z]"); */

/* 9) Programa una función que obtenga un numero aleatorio entre 501 y 600. */

/* function getRandomArbitrary(min = 501, max = 601) {
console.info(Math.round(Math.random() * (max - min) + min));

}

getRandomArbitrary(); */


//CON FUNCION FLECHA

/* const getAleatorio = ()=> console.info((Math.round(Math.random() * 100) + 500));

getAleatorio()
  */

/* 10) Programa una función que reciba un número y evalúe si es capicúa o no (que se lee igual en un sentido que en otro), pe. miFuncion(2002) devolverá true. */

/*  
 const capicua = (numero = 0)=>{
    if(!numero) return console.warn("No ingresaste el numero a evaluar");

     if(typeof numero !== "number") return console.error(`El valor ${numero} ingresado, NO es un número`);

    numero = numero.toString();
    let alReves = numero.split("").reverse().join("");

    return (numero === alReves)
        ?console.info(`Sí es capicua, numero original ${numero}, numero al revés ${alReves}`):console.info(`No es capicua, numero original ${numero}, numero al revés ${alReves}`);

}


capicua();
capicua("19");
capicua({});
capicua(2002); 
capicua(78787); 
capicua(56987);   
capicua(212.212); 
 */
 
/* 11) Programa una función que calcule el factorial de un número (El factorial de un entero positivo n, se define como el producto de todos los números enteros positivos desde 1 hasta n), pe. miFuncion(5) devolverá 120. */


/* 
const factorial = (numero = undefined)=> {

     if(!numero) return console.warn("No ingresaste un número");

     if(typeof numero !== "number") return console.error(`El valor ${numero} ingresado, NO es un número`);

     if(numero === 0) return console.error("El número NO puede ser 0");

     if (Math.sign(numero) === -1) return console.error("el número no puede ser negativo");

    let factorial = 1;

    for(let i = numero; i > 1; i--){
    factorial *= i;
}

    return console.info(`El factorial de ${numero} es ${factorial}`);

}

factorial();
factorial("5");
factorial(0);
factorial(-5);
factorial(5);
factorial(8); */

/* 12) Programa una función que determine si un número es primo (aquel que solo es divisible por sí mismo y 1) o no, pe. miFuncion(7) devolverá true. */

/* const numeroPrimo = (numero = undefined)=>{

     if(!numero) return console.warn("No ingresaste un número");

     if(typeof numero !== "number") return console.error(`El valor ${numero} ingresado, NO es un número`);

     if(numero === 0) return console.error("El número NO puede ser 0");

     if(numero === 1) return console.error("El número NO puede ser 1");

     if (Math.sign(numero) === -1) return console.error("el número no puede ser negativo");

    let divisible = false; 

    for (let i = 2; i < numero; i++){
        if((numero % i) === 0){
            divisible = true;
            break;
        }
    }

    return(divisible)
        ?console.log(`El número ${numero}, NO es primo`)
        :console.log(`El número ${numero}, SI es primo`);  

}

numeroPrimo();
numeroPrimo("100");
numeroPrimo(0);
numeroPrimo(1);
numeroPrimo(-5);
numeroPrimo(13); */


/* 13) Programa una función que determine si un número es par o impar, pe. miFuncion(29) devolverá Impar. */

/*  const numeroPar = (numero = undefined)=>{

     if(!numero) return console.warn("No ingresaste un número");

     if(typeof numero !== "number") return console.error(`El valor ${numero} ingresado, NO es un número`);

    return ((numero % 2) === 0)
        ?console.log(`El número ${numero} es PAR`)
        :console.log(`El número ${numero} es IMPAR`);

}

numeroPar();
numeroPar("3");
numeroPar(-18);
numeroPar({});
numeroPar([]);
numeroPar(259);
numeroPar(260); */

/* 14) Programa una función para convertir grados Celsius a Fahrenheit y viceversa, pe. miFuncion(0,"C") devolverá 32°F. */

/* const convertirGrados = (grados = undefined, unidad = undefined) => 
{
    if(grados === undefined) return console.warn("No ingresaste grados a convertir");

    if(typeof grados !== "number") return console.error(`El valor ${grados} ingresado, NO es un número`);

    if(unidad === undefined) return console.warn("No ingresaste el tipo de grado a convertir");

    if(typeof unidad !== "string") return console.error(`El valor ${unidad} ingresado, NO es una cadena de texto`);

    if(unidad.length !== 1 || !/(C|F)/.test(unidad))return console.warn("Valor de unidad no reconocido");

    if(unidad === "C"){
    return console.log(`${grados}°C = ${Math.round((grados * (9/5)) + 32)}°F`);
    } else if(unidad === "F"){
    return console.log(`${grados}°F = ${Math.round(((grados - 32) * (5/9)))}°C`);
    } else{
    return console.error("El tipo de grados a convertir NO es válido")
    }

}

convertirGrados();
convertirGrados("32");
convertirGrados(2);
convertirGrados(2, true);
convertirGrados(2, "hola");
convertirGrados(100, "FC");
convertirGrados(2, "E");
convertirGrados(32, "C");
convertirGrados(0, "C");
convertirGrados(32, "F"); */


/* 
15) Programa una función para convertir números de base binaria a decimal y viceversa, pe. miFuncion(100,2) devolverá 4 base 10. */

/* const convertirBinarioDecimal = (numero = undefined, base = undefined)=>{

     if(numero === undefined) return console.warn("No ingresaste un número");

     if(typeof numero !== "number") return console.error(`El valor ${numero} ingresado, NO es un número`);

     if(base === undefined) return console.warn("No ingresaste la base a convertir");

     if(typeof base !== "number") return console.error(`El valor ${base} ingresado, NO es un número`);

    if(base === 2){
    return console.log(`${numero} base ${base} = ${parseInt(numero,base)} base 10`);
    }else if(base === 10){
    return console.log(`${numero} base ${base} = ${(numero.toString(2))} base 2`);  
    }
}

convertirBinarioDecimal();
convertirBinarioDecimal("2");
convertirBinarioDecimal(100);
convertirBinarioDecimal(100, "2");
convertirBinarioDecimal(100, 2);
convertirBinarioDecimal(4, 10);
 */
/* 16) Programa una función que devuelva el monto final después de aplicar un descuento a una cantidad dada, pe. miFuncion(1000, 20) devolverá 800. */

/* const aplicarDescuento = (monto = undefined, descuento = undefined)=>{

     if(monto === undefined) return console.warn("No ingresaste el monto");

     if(typeof monto !== "number") return console.error(`El valor ${monto} ingresado, NO es un número`);

     if (Math.sign(monto) === -1) return console.error("el monto no puede ser negativo");


     if(descuento === undefined) return console.warn("No ingresaste el porcentaje de descuento");

     if(typeof descuento !== "number") return console.error(`El valor ${descuento} ingresado, NO es un número`);

     if (Math.sign(descuento) === -1) return console.error("el descuento no puede ser negativo");


    if (monto !== 0 && descuento !== 0){
return console.log(`El ${descuento} % de descuento de ${monto} es: ${(descuento / 100) * monto}`);
}else {
return console.log("El valor del monto o el descuento no pueden ser 0");
}

}

aplicarDescuento();
aplicarDescuento("1200");
aplicarDescuento(-1200);
aplicarDescuento(1200);
aplicarDescuento(1200,"10");
aplicarDescuento(1200,-10);
aplicarDescuento(1200,10);
aplicarDescuento(1200,50);
aplicarDescuento(0,0);
aplicarDescuento(800000,70); */

/* 17) Programa una función que dada una fecha válida determine cuantos años han pasado hasta el día de hoy, pe. miFuncion(new Date(1984,4,23)) devolverá 35 años (en 2020). */

/* const calcularAnios = (fecha=undefined)=>{
    if(fecha === undefined) return console.warn("No ingresaste la fecha");

    if(!(fecha instanceof Date)) return console.error("El valor que ingresaste no es una fecha válida");

    let hoyMenosFecha = new Date().getTime() - fecha.getTime(),
        aniosEnMS = 1000 * 60 * 60 * 24 * 365
        aniosHumanos = Math.floor(hoyMenosFecha/aniosEnMS);

    return(Math.sign(aniosHumanos)===-1)
        ?console.info(`faltan ${Math.abs(aniosHumanos)} años para el ${(fecha.getFullYear())}`)
        :(Math.sign(aniosHumanos)===1)
            ?console.log(`Han pasado ${aniosHumanos} años, desde ${fecha.getFullYear()}`)
            :console.log(`Estamos en el año actual ${fecha.getFullYear()}`)

}

calcularAnios();
calcularAnios({});
calcularAnios(false);
calcularAnios(new Date());
calcularAnios(new Date(1987,9,03));
calcularAnios(new Date(1887,9,03));
calcularAnios(new Date(2087,9,03)); */



/* 18) Programa una función que dada una cadena de texto cuente el número de vocales y consonantes, pe. miFuncion("Hola Mundo") devuelva Vocales: 4, Consonantes: 5. */

/* const contarLetras = (cadena = "")=>{

    if(!cadena) return console.warn("No ingresaste la cadena de texto");

    if(typeof cadena !== "string") return console.error(`El valor ${cadena} ingresado, NO es una cadena de texto`);

    let vocales = 0,
        consonantes = 0;

    cadena = cadena.toLowerCase();

    for(let letra of cadena){
        if(/[aeiouáéíóúü]/.test(letra)) vocales ++;
        
        if(/[bcdfghjklmnpqrstvwxyz]/.test(letra)) consonantes ++;   
    }

    return console.log({
        cadena,
        vocales,
        consonantes
    })
}

contarLetras();
contarLetras(33);
contarLetras("Hola Mundo");
contarLetras("Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente omnis perspiciatis ipsam nulla ducimus eveniet id hic asperiores beatae exercitationem provident odio expedita, eaque consequatur consectetur autem accusantium molestiae ullam!"); */



/* 19) Programa una función que valide que un texto sea un nombre válido, pe. miFuncion("Jonathan MirCha") devolverá verdadero. */

/* const validarNombre = (nombre = "")=>{
    if(!nombre) return console.warn("No ingresaste el nombre");

    if(typeof nombre !== "string") return console.error(`El valor ${nombre} ingresado, NO es una cadena de texto`);

    let expReg = /^[A-Za-zÑñÁÉÍÓÚÜáéíóúü\s]+$/g.test(nombre);
    //expresion regular
    // ^ no puede haber nada antes de la expresion
    // $ no puede haber nada despues de la expresion
    //[] agrupadores
    // + evalue cada caracter de la cadena de texto

    return (expReg)
        ?console.log(`"${nombre}", es un nombre VÁLIDO`)
        :console.log(`"${nombre}",  NO es un nombre VÁLIDO`);
}

validarNombre()
validarNombre(33)
validarNombre("Enderson")
validarNombre("Enderson Marín")
validarNombre("Enderson Marín, 35") */



/* 20) Programa una función que valide que un texto sea un email válido, pe. miFuncion("jonmircha@gmail.com") devolverá verdadero.
 */

/* const validarEmail = (email = "")=>{
    if(!email) return console.warn("No ingresaste el email");

    if(typeof email !== "string") return console.error(`El valor ${email} ingresado, NO es una cadena de texto`);

    let expReg = /[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})/i.test(email);

    return (expReg)
        ?console.log(`"${email}", es un email VÁLIDO`)
        :console.log(`"${email}",  NO es un email VÁLIDO`);
}

validarEmail()
validarEmail(33)
validarEmail("mar,rin,en,der,son@gmail")
validarEmail("marinenderson@gmail")
validarEmail("marinenderson@gmail.com") */



/* 
21) Programa una función que dado un array numérico devuelve otro array con los números elevados al cuadrado, pe. mi_funcion([1, 4, 5]) devolverá [1, 16, 25]. */

/* const devolverCuadrados = (arreglo = undefined)=>{
if(arreglo === undefined) return console.warn("No ingresaste un arreglo de números");

if(!(arreglo instanceof Array)) return console.error("El valor que ingresaste no es un arreglo");

if(arreglo.length === 0 ) return console.error("El arreglo está vacío");

for(let num of arreglo){
    if(typeof num !== "number") return console.error(`El valor "${num}" ingresado, NO es un número`);
}

const newArreglo = arreglo.map(el => el * el);

return console.log(`Arreglo original= ${arreglo}\nArreglo elevado al cuadrado=${newArreglo}`);


}

devolverCuadrados()
devolverCuadrados({})
devolverCuadrados([])
devolverCuadrados(["a","b","c"])
devolverCuadrados([2,3,4]) */


/* 22) Programa una función que dado un array devuelva el número mas alto y el más bajo de dicho array, pe. miFuncion([1, 4, 5, 99, -60]) devolverá [99, -60]. */

/*  const arrMaxMin = (arreglo = undefined)=>{
if(arreglo === undefined) return console.warn("No ingresaste un arreglo de números");

if(!(arreglo instanceof Array)) return console.error("El valor que ingresaste no es un arreglo");

if(arreglo.length === 0 ) return console.error("El arreglo está vacío");

for(let num of arreglo){
    if(typeof num !== "number") return console.error(`El valor "${num}" ingresado, NO es un número`);
}

return console.log({
Arreglo_Original: arreglo,
Valor_Mayor: Math.max(...arreglo),
Valor_Menor: Math.min(...arreglo)
})

}

arrMaxMin()
arrMaxMin({})
arrMaxMin([])
arrMaxMin([1,2,"3"])
arrMaxMin([1, 4, 5, 99, -60])  */

/* 23) Programa una función que dado un array de números devuelva un objeto con 2 arreglos en el primero almacena los números pares y en el segundo los impares, pe. miFuncion([1,2,3,4,5,6,7,8,9,0]) devolverá {pares: [2,4,6,8,0], impares: [1,3,5,7,9]}. */

/* const separarParesImpares = (arreglo = undefined)=> {
if(arreglo === undefined) return console.warn("No ingresaste un arreglo de números");

if(!(arreglo instanceof Array)) return console.error("El valor que ingresaste no es un arreglo");

if(arreglo.length === 0 ) return console.error("El arreglo está vacío");

for(let num of arreglo){
    if(typeof num !== "number") return console.error(`El valor "${num}" ingresado, NO es un número`);
}

return console.log({
pares: arreglo.filter(num => num % 2 === 0),
impares: arreglo.filter(num => num % 2 === 1)
})

}

separarParesImpares()
separarParesImpares(true)
separarParesImpares([])
separarParesImpares([4,5,6,"7"])
separarParesImpares([1,2,3,4,5,6,7,8,9,10]) */


/* 24) Programa una función que dado un arreglo de números devuelva un objeto con dos arreglos, el primero tendrá los numeros ordenados en forma ascendente y el segundo de forma descendiente, pe. miFuncion([7, 5,7,8,6]) devolverá { asc: [5,6,7,7,8], desc: [8,7,7,6,5] }. */

/* ordenarArreglo = (arreglo = undefined)=>{
if(arreglo === undefined) return console.warn("No ingresaste un arreglo de números");

if(!(arreglo instanceof Array)) return console.error("El valor que ingresaste no es un arreglo");

if(arreglo.length === 0 ) return console.error("El arreglo está vacío");

for(let num of arreglo){
    if(typeof num !== "number") return console.error(`El valor "${num}" ingresado, NO es un número`);
}

return console.log({
Arreglo_Original: arreglo,
ascendente: arreglo.map(el => el).sort(),
descendente: arreglo.map(el => el).sort().reverse()
});

}

ordenarArreglo()
ordenarArreglo(false)
ordenarArreglo([])
ordenarArreglo([3,4,5,"6"])
ordenarArreglo([7,5,7,8,6,3]) */




/* 25) Programa una función que dado un arreglo de elementos, elimine los duplicados, pe. miFuncion(["x", 10, "x", 2, "10", 10, true, true]) devolverá ["x", 10, 2, "10", true]. */

/* const eliminarDuplicados = (arreglo = undefined)=>{
if(arreglo === undefined) return console.warn("No ingresaste un arreglo");

if(!(arreglo instanceof Array)) return console.error("El valor que ingresaste no es un arreglo");

if(arreglo.length === 0 ) return console.error("El arreglo está vacío");

if(arreglo.length === 1 ) return console.error("El arreglo debe tener al menos 2 elementos");



return console.log({
Arreglo_Original: arreglo,
Sin_duplicados: 
});

}

eliminarDuplicados()
eliminarDuplicados("hola")
eliminarDuplicados([])
eliminarDuplicados([2])
eliminarDuplicados(["x", 10, "x", 2, "10", 10, true, true])  */

/* 26) Programa una función que dado un arreglo de números obtenga el promedio, pe. promedio([9,8,7,6,5,4,3,2,1,0]) devolverá 4.5. */

/* const promedioArrays = (arreglo = undefined) =>{
if(arreglo === undefined) return console.warn("No ingresaste un arreglo de números");

if(!(arreglo instanceof Array)) return console.error("El valor que ingresaste no es un arreglo");

if(arreglo.length === 0 ) return console.error("El arreglo está vacío");

for(let num of arreglo){
    if(typeof num !== "number") return console.error(`El valor "${num}" ingresado, NO es un número`);
}

let suma = 0;

for(let i = 0; i < arreglo.length; i++){
    //suma = suma + arreglo[i];
    suma += arreglo[i];
}

let promedio = suma / arreglo.length;

return console.log({
Array_Original: arreglo,
Promedio_Array: promedio
})

}

promedioArrays()
promedioArrays(true)
promedioArrays([])
promedioArrays([1,2,3,"4"])
promedioArrays([9,8,7,6,5,4,3,2,1,0]) */


/* 27) Programa una clase llamada Pelicula.

La clase recibirá un objeto al momento de instanciarse con los siguentes datos: id de la película en IMDB, titulo, director, año de estreno, país o países de origen, géneros y calificación en IMBD.
- Todos los datos del objeto son obligatorios.
- Valida que el id IMDB tenga 9 caracteres, los primeros 2 sean letras y los 7 restantes números.
- Valida que el título no rebase los 100 caracteres.
- Valida que el director no rebase los 50 caracteres.
- Valida que el año de estreno sea un número entero de 4 dígitos.
- Valida que el país o paises sea introducidos en forma de arreglo.
- Valida que los géneros sean introducidos en forma de arreglo.
- Valida que los géneros introducidos esten dentro de los géneros aceptados*.
- Crea un método estático que devuelva los géneros aceptados*.
- Valida que la calificación sea un número entre 0 y 10 pudiendo ser decimal de una posición.
- Crea un método que devuelva toda la ficha técnica de la película.
- Apartir de un arreglo con la información de 3 películas genera 3 instancias de la clase de forma automatizada e imprime la ficha técnica de cada película.

* Géneros Aceptados: Action, Adult, Adventure, Animation, Biography, Comedy, Crime, Documentary ,Drama, Family, Fantasy, Film Noir, Game-Show, History, Horror, Musical, Music, Mystery, News, Reality-TV, Romance, Sci-Fi, Short, Sport, Talk-Show, Thriller, War, Western. */


/* class Pelicula{
    constructor({id, titulo, director, estreno, pais, generos, calificacion}){
        this.id = id;
        this.titulo = titulo;
        this.director = director;
        this.estreno = estreno;
        this.pais = pais;
        this.generos = generos;
        this.calificacion = calificacion;

        this.validarIMDB(id);
        this.validarTitulo(titulo);
        this.validarDirector(director);
        this.validarEstreno(estreno);
        this.validarPais(pais);
        this.validarGeneros(generos);
        this.validarCalificacion(calificacion);

    }

    static get listaGeneros(){
        return ["Action", "Adult", "Adventure", "Animation", "Biography", "Comedy", "Crime", "Documentary" ,"Drama", "Family", "Fantasy", "Film Noir", "Game-Show", "History", "Horror", "Musical", "Music", "Mystery", "News", "Reality-TV", "Romance", "Sci-Fi", "Short", "Sport", "Talk-Show", "Thriller", "War", "Western"];  
    }

    static generosAceptados(){
        return console.log(`Los géneros aceptados son:${Pelicula.listaGeneros.join(", ")}`);
    }


  validarCadena(propiedad,valor){
    if(!valor) return console.warn(`${propiedad} "${valor}" está vacío`);

    if(typeof valor !== "string") return console.error(`${propiedad} "${valor}" ingresado, NO es una cadena de texto`);

    return true;
  }


  validarLongitudCadena(propiedad,valor,longitud){
    if(valor.length > longitud) return console.error(`${propiedad}"${valor}" excede el número de caracteres permitidos (${longitud}). `);

    return true;
  }

  validarNumero(propiedad,valor){
    if(!valor) return console.warn(`${propiedad} "${valor}" está vacío`);

    if(typeof valor !== "number") return console.error(`${propiedad} "${valor}" ingresado, NO es un número`);

    return true;
  }

  validarArreglo(propiedad,valor){
    if(!valor) return console.warn(`${propiedad}"${valor}" está vacío`);

    if(!(valor instanceof Array)) return console.error(`${propiedad}"${valor}" ingresado, NO es un arreglo`);

    if(valor.length === 0 ) return console.error(`${propiedad}"${valor}" no tiene datos`);

    for(let cadena of valor){
        if(typeof cadena !== "string") return console.error(`El valor "${cadena}" ingresado, NO es una cadena de texto`);
    }

    return true;
  }

  validarIMDB(id){
    if(this.validarCadena("IMDB id", id))
        if(!(/^([a-z]){2}([0-9]){7}$/.test(id)))
            return console.error(`IMDB ID "${id}" no es válido, debe tener 9  caracteres, los 2 primeros letras minúsculas, los 7 restantes números`)  
  }

  validarTitulo(titulo){
    if(this.validarCadena("Título", titulo))
        this.validarLongitudCadena("Título",titulo,100);
  }

  validarDirector(director){
    if(this.validarCadena("Director", director))
        this.validarLongitudCadena("Director",director,50);
  }

  validarEstreno(estreno){
    if(this.validarNumero("Año de Estreno", estreno))
        if(!(/^([0-9]){4}$/.test(estreno)))
            return console.error(`El año de estreno "${estreno}" no es válido, debe ser un numero de 4 dígitos`)  
  }

  validarPais(pais){
    this.validarArreglo("País",pais);
  }

  validarGeneros(generos){
    if(this.validarArreglo("Géneros",generos)){
        for(let genero of generos){
            //console.log(genero, Pelicula.listaGeneros.includes(genero));
                if(!Pelicula.listaGeneros.includes(genero)){
                    console.error(`Género(s) incorrectos "${generos.join(", ")}"`);
                    Pelicula.generosAceptados();
                }
        }
    }
  }

  validarCalificacion(calificacion){
    if(this.validarNumero("Calificación", calificacion))
       return (calificacion < 0 || calificacion > 10)
        ? console.error(`La calificación tiene que estar en un rango entre 0 y 10`)
        : this.calificacion = calificacion.toFixed(1);
  }

    fichaTecnica(){
        console.log(`Ficha Técnica:\nTítulo:"${this.titulo}"\nDirector:"${this.director}"\nAño:"${this.estreno}"\nPaís:"${this.pais.join("-")}"\nGéneros:"${this.generos.join(",")}"\nCalificación:"${this.calificacion}"\nIMDB ID:"${this.id}"`)
    }

}//fin de la Clase Pelicula

//Pelicula.generosAceptados();

const peli = new Pelicula({
id:"tt1234567",
titulo:"Título de la Pelicula",
director:"Director de la Pelicula",
estreno:2021,
pais:["Canadá","EEUU","Suecia"],
generos: ["Comedy","History", "Sport"],
calificacion:7.8895

});

peli.fichaTecnica();
 */










