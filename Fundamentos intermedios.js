// 1.- Sigma - Implementa una función sigma(num) que, dado un número, devuelve la suma de todos los enteros positivos (incluyendo el número dado). Ej: sigma(3) = 6 (1+2+3); sigma(5) = 15 (1+2+3+4+5).

function sigma(num){
    var resultado = 0;
    for (var i = 1; i <= num; i++){
        resultado += i;
    }
    return resultado
}
console.log(sigma(3))
console.log(sigma(5))

// 2.- Factorial - Escribe una función factorial(num) que, dado un número, devuelva el producto (multiplicación) de todos los enteros positivos (incluyendo el número dado). Por ejemplo: factorial(3) = 6 (1*2*3); factorial(5) = 120 (1*2*3*4*5).

function Factorial(num){
    var resultado = 1;
    for (var i = 1; i <= num; i++){
        resultado *= i;
    }
    return resultado
}
console.log(Factorial(3))
console.log(Factorial(5))

// 3.- Fibonacci - Crea una función para generar números de Fibonacci. En esta famosa secuencia matemática, cada número es la suma de las dos anteriores, partiendo con los valores 0 y 1. Tu función debería aceptar un argumento, un índice en la secuencia (donde 0 corresponde al valor inicial, 4 corresponden al valor cuatro más tarde, etc). Ejemplos: fibonacci(0) = 0 (dado), fibonacci(1) = 1 (dado), fibonacci(2) = 1 (fib(0)+fib(1), o 0+1), fibonacci(3) = 2 (fib(1) + fib(2)3, o 1+1), fibonacci(4) = 3 (1+2), fibonacci(5) = 5 (2+3), fibonacci(6) = 8 (3+5), fibonacci(7) = 13 (5+8). Haz esto primero sin usar recursión. Si no sabes qué es una recursión, no te preocupes puesto que vamos a introducir este concepto en la Parte 2 de esta actividad. 

function fibonacci(index) {
    var fib0 = 0;
    var fib1 = 1;
    if (index === 0) {
        return fib0;
    } else if (index === 1) {
        return fib1;
    }
    var currentFib;
    for (var i = 2; i <= index; i++) {
        currentFib = fib0 + fib1;
        fib0 = fib1;
        fib1 = currentFib;
    }

    return currentFib;
}

console.log(fibonacci(0)); 
console.log(fibonacci(1));
console.log(fibonacci(2));
console.log(fibonacci(3));
console.log(fibonacci(4));
console.log(fibonacci(5));
console.log(fibonacci(6));
console.log(fibonacci(7));

// 4.- Array: Penúltimo: Devuelve el penúltimo elemento del array. Dado [42,true,4,”Liam”, 7] devuelve “Liam”. Si el array es muy pequeño, devuelve null.  

var array = [42, "true", 4, "liam", 7];
var array_uno = [2];
function penultimo(b){
        if(b.length >= 2){
            return b[b.length - 2];
        }
        else{
            return null
        }
    }

console.log(penultimo(array));
console.log(penultimo(array_uno));

// 5.- Array: “N” último: Devuelve el elemento “N” último. Dado ([5,2,3,6,4,9,7],3], devuelve 6. Si el array es muy pequeño, devuelve null. 

var array = [5,2,3,6,4,9,7];
var num = 3;
function nultimo(array, num){
    if (array.length >= num){
        return array[num]
    }
    else {
        return null
    }
}
console.log(nultimo(array,num))

// 6.- Array: Segundo más grande: Devuelve el segundo elemento más grande de un array. Dado [42,1,4,3.14,7], devuelve 7.  Si el array es muy pequeño, devuelve null.

var array = [42,1,4,9,3.14,7,8,19];
function segundomasgrande(array){
    if (array.length < 2) {
        return null
    }
    var max = array[0];
    var segundoMax = null;
    for (var i = 1; i < array.length; i++){
        if (array[i] > max){
            segundoMax = max;
            max = array[i];
        }
    else if (segundoMax == null || array[i] > segundoMax){
            segundoMax = array[i]
        }
    }
    return segundoMax
}
console.log(segundomasgrande(array))

// 7.- Doble Problema Par: Crea una función que cambie un array dado duplicando cada uno de sus elementos y manteniendo el orden original. Convierte [4, "Ulysses", 42, false]   a    [4,4, "Ulysses", "Ulysses", 42, 42, false, false].

var array = [4,"Ulysses", 42, "false"];
function doblevision(array){
    for (var i = 0; i < array.length; i += 2){
        array.splice(i, 0, array[i])
    }
    return array
}
console.log(doblevision(array))

