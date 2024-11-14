// GRUPO 5: Mariam Gevorgyan, Paul Pinedo, Osmery Gonzalez, Martín Rodriguez, Yamila Campos





// ------------------------INSTRUCCIONES ------------------------------

// 1-Escriban y prueben con console.log:
// Después de cada paso, utilicen console.log para ver los resultados intermedios y verificar el progreso. Prueben distintos valores de entrada para asegurarse de que el código funcione en varios casos.

// 2-Comenten el código:
// A medida que avancen, agreguen comentarios explicativos en cada parte importante del código para que todos los miembros del grupo comprendan cómo funciona. Esto también facilitará que otros entiendan el código al revisarlo.

// 3-Hagan pruebas adicionales:
// Una vez que crean que el código está listo, prueben al menos tres ejemplos diferentes, incluyendo casos con valores inesperados o límites (como cadenas vacías, números negativos, etc.) para ver cómo responde el código.

// 4-Revisen y optimicen en grupo:
// Juntos, revisen si hay partes del código que podrían mejorar o simplificar. Si descubren un enfoque mejor, intenten implementarlo y ver cómo se comporta en comparación con el anterior.


// ----------------------------------------------------------------------

// Ejercicio 1: "Cuántos caracteres faltan"
// Instrucción:
// De una función que recibe una frase y un número. La función debe retornar cuánto le falta o cuánto se pasa la frase del número dado.

// Pista:
// Sabes cómo calcular la diferencia entre la longitud de algo y un número específico. Considera usar .length para obtener la longitud de la frase y comparar esta longitud con el número dado. Si necesitas calcular la diferencia, una resta simple te ayudará.


function caracteres(frase, numero) {    
    const longitud = frase.length; //Obtenemos la longitud de la frase
    const diferencia = longitud - numero;   // Calculamos la diferencia entre la longitud de la frase y el número dado

    if (diferencia > 0) {
        return `Faltan ${Math.abs(diferencia)} caracteres.`
    } else if (diferencia < 0) {
        return `Sobran ${diferencia} caracteres.`;
    }
}

console.log(caracteres('JavaScript', 3))
console.log(caracteres('Hamburguesa', 7))


// ----------------------------------------------------------------------
// Ejercicio 2: "¿Pasa o no pasa?"
// Instrucción:
// Crea un programa que reciba una calificación y devuelva "Aprobado" si es mayor a 70, "Extraordinario" si es entre 50 y 69, y "Reprobado" si es menor de 50.

// Pista:
// Tendrás que hacer varias comparaciones en tu función para cubrir cada caso posible. Para verificar rangos de calificación, utiliza operadores de comparación (como <, >, >=, <=) dentro de una estructura if...else if...else.


var calificaciones = (notas) => {
    return notas.map((nota) => {
        if (nota > 70) {
            return 'Aprobado';
        } else if (nota >= 50 && nota <= 69) {
            return 'Extraordinario';
        } else {
            return 'Reprobado';
        }
    });
};

console.log(calificaciones([10, 20, 30, 45, 55, 75, 95, 100]));


// ----------------------------------------------------------------------

// Ejercicio 3: "Capitalizar frase"
// Instrucción:
// Escribe una función que reciba una frase y devuelva la misma frase, pero con la primera letra de cada palabra en mayúscula.

// Pista:
// Piensa en una forma de dividir la frase y transformar cada palabra por separado, split puede ayudarte a dividir la frase en palabras, luego puedes aplicar charAt() y toUpperCase() a la primera letra de cada palabra y, por último, unir las palabras modificadas con join.


var fraseMayus = (frase) => {
    return frase.split(" ").map(palabra => palabra.charAt(0).toUpperCase() + palabra.slice(1)).join(" ");
}

console.log(fraseMayus("esta es una frase de prueba"));


// ----------------------------------------------------------------------

// Ejercicio 4: "Redondeo al número más cercano"
// Instrucción:
// Dado un número decimal, redondea al entero más cercano y devuelve el resultado.

// Pista:
// Revisa si JavaScript tiene alguna función que trabaje con decimales y enteros.

function redondearNumero(numero) {
    return Math.round(numero)
}

console.log(redondearNumero(4.3, 4.7, -1.5));
console.log(redondearNumero(4.7));
console.log(redondearNumero(-1.5));


// ----------------------------------------------------------------------

// Ejercicio 5: "Palabras únicas"
// Instrucción:
// De función que recibe una oración retorna cuántas palabras únicas tiene (sin contar las repetidas).

// Pista:
// Primero necesitarás una forma de dividir la frase en palabras.
// Puedes usar split para separar la oración en palabras. Después, usa un bucle o filter para encontrar las palabras únicas y luego contar su cantidad. 
//Set también puede ayudarte a eliminar duplicados.

function PalabrasUnicas(oracion) {
    
    var palabras = oracion.split(" ");
    var palabrasUnicas = new Set();
    
   
    for (i = 0; i < palabras.length; i++) {
        palabrasUnicas.add(palabras[i]);
    }
 
    return palabrasUnicas.size;
}

console.log(PalabrasUnicas("hola mundo hola programación")); 



// ----------------------------------------------------------------------

// Ejercicio 6: "El más largo de los tres"
// Instrucción:
// Dada una lista de tres palabras, devuelve la más larga. Si hay dos o más palabras de igual longitud, devuelve cualquiera de ellas.

// Pista:
// Considera cómo podrías comparar elementos para obtener el más largo.
// Para comparar las palabras, usa .length en cada una y guarda la más larga en una variable. Un if o un Math.max() para comparar las longitudes también sería útil.



function palabraMasLarga(palabras) {

    if (palabras.length !== 3) {
        return "La lista debe contener exactamente tres palabras.";
    }
    let masLarga = palabras[0]; // Asumimos que la primera es la más larga inicialmente.
    if (palabras[1].length > masLarga.length) {
        masLarga = palabras[1]; // Actualizamos si la segunda palabra es más larga.
    }
    if (palabras[2].length > masLarga.length) {
        masLarga = palabras[2]; // Actualizamos si la tercera palabra es más larga.
    }
    return masLarga; // Devolvemos la palabra más larga.
}

var palabras = ["manzana", "pera", "banana"];

console.log(palabraMasLarga(palabras)); 

// ----------------------------------------------------------------------

// Ejercicio 7: "Desglose de números pares"
// Instrucción:
// Una función que tome un número y devuelva una lista de todos los números pares que hay desde el 0 hasta ese número, incluidos el 0 y el número dado si son pares.

// Pista:
// Recuerda que un número es par si al dividirlo por 2 el resto es cero.
// Un bucle for es una buena opción para generar la lista de números. Usa el operador % para verificar si un número es par (num % 2 === 0). Puedes ir agregando cada número par a un arreglo.


// var pares = (numeros) => {
//     for (i = 0; i < numeros; i++){
//     let numerosPares = [];
//         if (numeros % 2 === 0)
//            numerosPares.push(i)
//         return "Es par"
    
//     }
// }

function NumerosPares(numero) {
    var numerosPares = [];  // Declaramos un array vacío para almacenar los números pares
    
    for (i = 0; i <= numero; i++) {
        if (i % 2 === 0) {
            numerosPares.push(i);
        }
    }

    return numerosPares;   // Devolvemos el array que contiene todos los números pares encontrados
}

var resultado = NumerosPares(20); 
console.log(resultado);


// ----------------------------------------------------------------------

// Ejercicio 8: "Invertir palabras"
// Instrucción:
// Dada una frase, devuelve una nueva frase con el orden
// de las palabras al revés.

// Pista:
// ¿Cómo podrías dividir y luego reorganizar las palabras?


var invertirPalabras = (frase) => {

    return frase.split(" ").reverse().join(" ");
}

console.log(invertirPalabras("hoy es un día lleno de aprendizajes nuevos"));

