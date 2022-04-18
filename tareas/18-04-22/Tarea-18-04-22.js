/**
 1. Solicita un nombre, la edad y nuestra por consola el mensaje "Hola ___, tienes ___ años y el año que viene tendrás ___ años"
Realiza el ejercicio con prompt (mensaje) y haz uso de los template strings.
 */

/*let nombre = prompt("Ingrese el nombre");
let edad = Number(prompt("Ingrese la edad"));


console.log(`Hola ${nombre}, tienes ${edad} y el año que viene tendrás ${edad + 1} años.`);*/

//----------------------------------------------------------------------

/**
 2. Escribe un programa que pueda calcular el área de 2 figuras geométricas: triangulo y rectángulo. En primer lugar pregunta
de qué figura se quiere calcular el área, después solicita los datos
que necesites para calcularlo. Utiliza switch para pedir los datos según la figura.

triangulo = b * h/2
rectangulo = b * h
 */

/*let figura = prompt("Ingrese la figura a calcular");
let b = parseInt(prompt("Ingrese la base"));
let h = parseInt(prompt("Ingrese la altura"));

switch (figura) {
    case "triangulo":
    figura = b * h/2;
    console.log(`El area del triangulo es ${figura}`);
        break;
    case "rectangulo":
        figura = b* h;
        console.log(`El area del rectangulo es ${figura}`);
    default:
        console.error("La figura ingresada no se encuentra en el sistema");
        break;
}*/

//--------------------------------------------------------------------------------------------------


/**
 3. Solicita un número e imprime todos los números pares e impares
desde 1 hasta ese número con el mensaje "es par" o "es impar"
Por ej, si el número es 5 el resultado debería ser:
1 - es impar
2 - es par
3 - es impar
4 - es par
5 - es impar
 */

/*let number = Number(prompt("Introduzca un número"));

if(isNaN(number)){
    console.error("No es posible realizar la operación. Los datos son erroneos");
}

for (let i = 1; i < number; i++) {
    if(i%2 === 0){
        console.log(`${i} - El número ${i} es PAR.`);
    } else{
        console.log(`${i} - El número ${i} es IMPAR`);
    }
    
}*/

//---------------------------------------------------------------------------------------------------

/**
 4. Escribe un programa que permita ir introduciendo una serie
indeterminada de números mientras su suma no supere 50. Cuando esto
ocurra, se debe mostrar el total acumulado y el contador de cuantos
números se han introducido.
 */

/*let suma = 0;
let num1 = "";
let cont = 0;

do {
  num1 = parseInt(prompt("Introduzca un número"));
  suma = suma + num1;
  cont = cont + 1;
} while (suma <= 50);

console.log(
  `El total acumulado es ${suma} y se ingresaron ${cont} numeros`
);*/

//----------------------------------------------------------------------------------------------


/**
5. Crea 3 arrays. El primero tendrá 5 números, el segundo array se llamará
pares y el tercero impares, ambos arrays estarán vacíos [ ]

- Multiplica cada uno de los números del primer array por un número aleatorio entre 1 y 10
- Si el resultado es par, guarda ese número en el array de pares y si es impar en el array de impares.
- Mostrar por consola: array de pares e impares
 */

/*let arreglo = [45,89,47,12,78];
let pares = [];
let impares = [];

let operador = Math.ceil(Math.random() * 10);
let producto = arreglo.map((x) => x * operador);

for (const numero of producto) {
  if (numero % 2 === 0) {
    pares.push(numero);
  } else {
    impares.push(numero);
  }
}

console.log(`El numero multiplicador es ${operador}`);
console.log(pares);
console.log(impares); */

//-----------------------------------------------------------------------------------------

/*
6. Tomar una lista de lenguajes de programación y mostrar en consola una lista ordenada con los nombres ordenados alfabéticamente y en mayúsculas sin mutar el arreglo original.

let lenguajes = ["javascript", "python", "c++", "c#", "java", ".net"];

function ordenarLenguajes() {
//definir un nuevo arreglo
//ordenarlos por orden alfabético
//en mayusculas
// en una lista ordenada
//1-javascript
//2-java
}
*/

let lenguajes = ["javascript", "python", "c++", "c#", "java", ".net", "pascal", "reactor", "mysql", "c"];

function ordenarLenguajes(){
 
   let lenguajesOrdenados = [];
   console.log(lenguajesOrdenados);

  lenguajesOrdenados = lenguajes.slice(0);
  lenguajesOrdenados.sort().map(function(lenguaje, index){
    console.log(`${index + 1} - ${lenguaje.toUpperCase()}`);
  });

}

