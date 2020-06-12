Declaración de funciones -> una función es un bloque de código que ejecuta una serie de instrucciones cuando es mandada a llamar.
En JavaScript, las funciones son muy importantes.

Estas se declaran con la palabra reservada function, seguida del nombre de la función y los parentesis, en estos se enlistan los argumentos de la función, luego tenemos
el bloque de código que va a ejecutar la función dentro de unas llaves {}

function saluda(){}

En JavaScript también existe el concepto de funciones anonimas, funciones a las que no se les asignó un nombre, de manera que esta es una declaración válida de función.

function (){}

Una función es útil cuando tenemos una serie de instrucciones que mandamos a ejecutar en diferentes puntos de nuestro programa en esos casos, en vez de estar copiando y pegando
el código o duplicandolo, podemos asignar una función y mandarlo a llamar en los casos en los que lo necesitemos.

function saluda (){
	console.log("Hola dev");
}

saluda();

Las funciones pueden verse como bloques de código que reciben datos y los devuelven procesados.

function cuadrado (numero){
	return numero * numero;
}

let cuadrado_de_dos = cuadrado(2);

console.log(cuadrado_de_dos);

Otra forma podría ser: 

function cuadrado (numero){
	return numero * numero;
}

let cuadrado_de_dos = cuadrado(2);

console.log(cuadrado(4));

Es importante la plabra reservada return y aclarar que no se puede dejar nada debajo de la palabra return, ya que nunca se ejecutará, ya que ademas de generar un 
resultado de la función también termina la ejecución de la función misma

function cuadrado (numero){
	return numero * numero;
	console.log("Esto nunca se ejecutará")
}

