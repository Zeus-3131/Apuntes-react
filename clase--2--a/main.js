/** SUGAR SYNTAX **/

//La utilización de operadores avanzados con la idea de simplificar el código. 

//1) Plantillas Literales: Las usamos con las backsticks ``

//alt + 96 = ``

//Las usamos para simplificar la concatenación de datos. 

let nombre = "Pepe Argento";
let trabajo = "Zapatería";

let mensaje = `${nombre} trabaja en una ${trabajo} `;

console.log(mensaje);

//2) Operador Ternario: es una simplificación de la estructura if/else. 

//Sintaxis: condicion ? condigoSiEsVerdad  : codigoSiEsFalso.

let llueve = false;

console.log(llueve ? "Tortas fritas y netflix" : "pileta del vecino");

// let respuesta = llueve ? "Tortas fritas y netflix" : "pileta del vecino";
// console.log(respuesta);

//3) Operador Spread: Operador de propagación. 
//Se utiliza con elementos iterables (arrays, objetos) enviando cada uno de sus elementos como parametros individuales a una función. 

const nombres = ["Juan", "Pedro", "Maria", "Jose"];

console.log(nombres);

//Que pasa si uso el operador spread: 

console.log(...nombres);

//Seria como hacer esto: 

console.log(nombres[0], nombres[1], nombres[2], nombres[3]);

//Copiar objetos: 

const alumno = {
    nombre: "Coki",
    apellido: "Argento",
    edad: 16
}

const alumnoDos = alumno;

//¿Que pasa si hago esto? 
//Si hago esto, estoy copiando la referencia en memoria. 

alumnoDos.nombre = "Paola";
console.log(alumno);

//No hagamos esto en JS! Si queremos copiar datos de un objeto usemos mejor el operador SPREAD. 

const alumnoTres = {...alumno};

alumnoTres.nombre = "Moni";
console.log(alumno);
console.log(alumnoTres);


//Copiar Arrays: 

const a = [1,2,3];
const b = [4,5,6];

const nuevoArray = [...a, ...b];
console.log(nuevoArray);

//4) Desestructuración de Objetos:  
//Es una expresión de JS que me permite desempaquetar valroes de arrays u objetos en distintas variables: 

//Objeto de ejemplo: 

const bart = {
    nombre: "Bart",
    apellido: "Simpson",
    edad: 10
}

//Hago lo siguiente: 

let {nombre:neim, } = bart;

console.log(neim);

// console.log(apellido);

// edad = 18;
// console.log(edad);
// console.log(bart.edad);

//5) Desestructuración de un array: 

let frutas = ["Manzana", "Pera", "Naranja", "Vino"];

let [,, fruta2, fruta3] = frutas;

console.log(fruta3);


//6) Acceso Condicional a Objetos: 

const empleado = null;

console.log(empleado?.nombre);

//alert("Ayudame loco!");

//Operador &&
//Si se cumple la condición, se ejecuta el código despues del operador. 

let hambre = false;

hambre && console.log("13:30 nos vamos a comer");


//Operador || 

let sueño = true;

sueño || console.log("Puedo seguir estudiando!");


////////////////////////////////////////////////////

//Nosotros podemos crear una aplicación de React con dos herramientas: 

//- CRA (Create React App).
//- Vite. 

//¿Que usa Vite en lugar de Webpack y babel para lograr el mismo resultado? 

//ESM  == en lugar de webpack. 
//esbuild == en lugar de babel. 



