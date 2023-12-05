/*CLASE 1 - REACT */

//¿ Que es React? 
// Librería de JS. 

//¿Cuando nace? 
//Mayo del 2013 en las oficinas de Facebook. 

//¿Cuales son sus ventajas? 

//1) Puedo crear aplicaciones web mucho más rapidas. Gracias a la tecnica del Virtual Dom que me permite actualizar algunas partes de mi aplicación sin recargar toda la página (Lo repasamos más dsp del almuerzo). 

//2) Basado en componentes:  son conjuntos de elementos que cumplen una función especifica. (por ejemplo un boton. )

//3) Tiene un enfoque DECLARATIVO. 

//Enfoque DECLARATIVO: estilo de programación donde nos enfocamos en lo que se quiere lograr y no tanto en el como. 

//Enfoque IMPERATIVO: estilo de programación en donde se detallan paso  a paso las acciones a realizar para lograr un resultado especifico. 


/** EJEMPLO EN CÓDIGO **/

//EJEMPLO A: Queremos crear un array de números pares entre el 0 y el 10. 

//¿Cómo lo podemos resolver con el enfoque imperativo? 


const array = []; 

for(let i = 0; i <= 10 ; i++ ) {
    if ( i % 2 == 0 ) {
        array.push(i);
    }
}

console.log(array);

//De modo declarativo: 

const numeros = [0,1,2,3,4,5,6,7,8,9,10];

const pares = numeros.filter(numero => numero % 2 == 0);

console.log(pares);

//EXPRESIÓN: Como una combinación de valores, variables y operadores que pueden ser evaluandos para producir un resultado. 

//EJEMPLOS: 

let numero = 5;

let sumas = numero + 5; 

let booleanito = 10 < 100; 
//EXPRESIÓN BOOLEANA


//Funciones en JS: Es un bloque de código con una tarea específica que puede ser reutilizado muchas veces. 

//Pueden ser DECLARADAS o EXPRESADAS. 

//Ejemplo de una función declarada: 
console.log(sumamos(50,10));

function sumamos(numeroUno, numeroDos) {
    //Cuerpo de la función. 
    return numeroUno + numeroDos;
}

//Esto funciona porque el motor de JS lee la declaracion antes de ejecutar el código, esto se conoce como hoisting. 

//FUNCIONES EXPRESADAS: 
//Son aquellas funciones que se asignan a una variable. 

//función anónima: 

const sumaDos = function(numeroA, numeroB) {
    let resultado = numeroA + numeroB;
    return resultado;
}

console.log(sumaDos(60, 10));
//Primero las tenemos que declarar y despues invocar, porque estamos trabajando con variables. 

//Función flechiña: 
//Es una versión resumida de la función anónima. 

const sumaTres = (numeroA, numeroB) => numeroA + numeroB;

console.log(sumaTres(80, 10));

const saludo = nombre => console.log(nombre);
//Ejemplo muy básico, si tenemos un solo parámetro lo podemos colocar sin paretesis. 


//FOS = Funciones de Orden Superior.
//Una función de orden superior es aquella que puede recibir por parámetro una función o retornar despues de su ejecución una función. 


//Los que vamos a utilizar y tenemos que repasar: map, find, filter, some, reduce. 

class Producto {
    constructor(nombre, precio) {
        this.nombre = nombre;
        this.precio = precio;
    }
}

const fideos = new Producto("Fideos", 100);
const harina = new Producto("Harina", 250);
const gaseosa = new Producto("Coca Cola", 180);
const pan = new Producto("Pan", 120);
const gaseosaDos = new Producto("Coca Cola", 500);

const arrayProductos = [fideos, harina, gaseosa, pan, gaseosaDos]; 


//Find: lo vamos a usar cuando tengo que buscar un elemento. 

const buscado = arrayProductos.find(item => item.nombre === "Coca Cola"); 

console.log(buscado);

//Si no lo encuentra retorna: undefined.
//Si hay dos objetos que cumplan con la condición retorna el primero. 

//Filter: recibe una función comparadora y retorna un array con los elementos que cumplan con la condición. 

const arrayProductosMenos200 = arrayProductos.filter(item => item.precio < 200); 

console.log(arrayProductosMenos200);

//Some: retorna un booleano (true o falsete) si encuentro o no el elemento. 

const hayFideos = arrayProductos.some(item => item.nombre === "Lentejas");

console.log("Hay fideos?: " + hayFideos);

//MAP: me permite crear un nuevo array con todos los elementos del original pero transformados. 
//En el contexto de react:  me permite tomar un array de datos y transformarlo a componentes. 

//Ejemplo: creamos un nuevo array pero ahora el precio tiene el IVA incluido (21%).

const arrayProductosConIva = arrayProductos.map(item => {
    return {
        nombre: item.nombre,
        precio: item.precio * 1.21
    }
})

console.log(arrayProductosConIva);

//Reduce: nos permite obtener un único valor despues de iterar sobre un array. 
//Por ejemplo, lo podemos usar para el total de un carrito de compras. 

//Podemos trabajar con dos parametros: un acumulador y el elemento a operar. 

let totalPrecio = arrayProductos.reduce((acumulador, item) => acumulador + item.precio, 0);

console.log("Reduce");
console.log(totalPrecio);

//TRABAJO POR MODULOS: 

//Es una forma de dividir nuestro trabajo o código en partes más pequeñas. 
//Lo logramos utilizando las palabras "export" e "import". 


