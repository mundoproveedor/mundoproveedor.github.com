 Condiciones -> En ocasiones necesitamos tener un bloque de código que se ejecute únicamente si se cumplen ciertas condiciones, por ejemplo, si el usuario inicia sesión, 
si el administrador ingresó, si se es mayor de edad, etc.

En JavaScript, una condición se declara con la palabra if , además recibe un bloque de codigo, que puede ser de una sola linea. 

if(expresionbooleana)

if(true)
if(false)
if(5 === "5")
if(5 === "5" && 10 > 2)	


Condición en una sola linea
if(5 == "5" && 10 > 2) console.log("Condición cumplida")	

Si es en más de una sola linea, las tenemos que agrupar usando {}

if(5 == "5" && 10 > 2){
	console.log("Recuerda que == no compara tipos");
	console.log("Condición cumplida");
}

Como parte de la declaración de una condición también podemos especificar en caso de que la condición no se haya cumplido, esto se hace con la instrucción else
El bloque de código que aparece luego de la palabra else, va a ejecutarse unicamente si la condición que se coloca en el if no se cumple

let edad = 10;
if (edad > 18){
	console.log("Eres mayor de edad");
	}
else{
	console.log("No eres mayor de edad");
}	

La intrucción else if ayuda a especificar multiples condiciones

let calificacion =4;

if(calificacion == 10){
	console.log("Excelente");
}else if(calificacion > 7){
	console.log("Muy bien");
}else if (calificacion > 5){
	console.log("Puedes mejorar");
}else {console.log("Reprobado")}

Cuando declaramos un bloque de condiciones como el anterior, solo uno de ellos evalua como verdadero, ejecuta el primer código que se cumpla como veradero.
por ejemplo, 10 es mayor que 7 y 5, pero lo califica como "Excelente", por ser la primera condición que se cumple, luego de eso dejará de hacer el resto de las comparaciones.
Sino se cumple ninguna de las condiciones ahí pasa a aplicar el else, evaluando esta instrucción al final.
