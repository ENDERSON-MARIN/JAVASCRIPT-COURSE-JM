
/* SUMA DE MULTIPLOS DE 3 Y 5 */
function solution(number) {
  let valorTotal = 0;
  for (let i = 1; i < number; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      console.log("este numero es divisible por 3 o por 5 " + " --->" + i);
      valorTotal += i;
      console.log(`---->${valorTotal}<----`);
    }

    // console.log(i);
  }
  return valorTotal;
}

/* VALIDAR PIN DE 4 0 6 DIGITOS */

/*
"1234"   -->  true
"12345"  -->  false
"a234"   -->  false 
*/

function validatePIN (pin) {
  //return true or false  
return /^(\d{4}|\d{6})$/.test(pin)

}

/* Un pangrama es una oración que contiene cada letra del alfabeto al menos una vez. Por ejemplo, la oración "El rápido zorro marrón salta sobre el perro perezoso" es un pangrama, porque usa las letras AZ al menos una vez (el caso es irrelevante).

Dada una cadena, detecta si es un pangrama o no. Devuelve Verdadero si lo es, Falso si no. Ignore los números y la puntuación. */

function isPangram(string){
  //...
  let regex = /([a-z])(?!.*\1)/gi;
  return (string.match(regex)).length === 26;
}

/* CONTAR VOCALES DE UNA FRASE */

function getCount(cadena) {
  var vocales = 0;
  
  // enter your majic here
  let minusculas = cadena.toLowerCase();
  
    for(let letra of cadena){
        if(/[aeiouáéíóúü]/.test(letra)) vocales ++;
    }

  return vocales;
}

/* Cree un programa que filtre una lista de cadenas y devuelva una lista con solo el nombre de sus amigos.

Si un nombre tiene exactamente 4 letras, ¡puede estar seguro de que tiene que ser un amigo suyo! De lo contrario, puede estar seguro de que no ...

Por ejemplo: Entrada = ["Ryan", "Kieran", "Jason", "Yous"], Salida = ["Ryan", "Yous"]

es decir

friend ["Ryan", "Kieran", "Mark"] `shouldBe` ["Ryan", "Mark"]
Nota: mantenga el orden original de los nombres en la salida. */

function friend(friends){
  //your code here
return friends.filter(amigo => amigo.length === 4);

}


/* Jaden Smith, hijo de Will Smith, es el protagonista de películas como The Karate Kid (2010) y After Earth (2013). Jaden también es conocido por parte de su filosofía que transmite a través de Twitter . Cuando escribe en Twitter, es conocido por casi siempre usar mayúsculas en cada palabra. Para simplificar, tendrás que escribir con mayúscula cada palabra, mira cómo se espera que sean las contracciones en el siguiente ejemplo.

Su tarea es convertir cadenas a cómo las escribiría Jaden Smith. Las cadenas son citas reales de Jaden Smith, pero no están en mayúscula de la misma forma en que las escribió originalmente.

Ejemplo:

Not Jaden-Cased: "How can mirrors be real if our eyes aren't real"
Jaden-Cased:     "How Can Mirrors Be Real If Our Eyes Aren't Real" */

String.prototype.toJadenCase = function () {
  //...
   return this.replace(/(^|\s)[a-z]/g, function(x){ return x.toUpperCase(); });
};

/*  */
