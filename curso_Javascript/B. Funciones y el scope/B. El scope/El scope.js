El Scope -> o alcance es un termino del lenguaje, es una colección de variables, funciones y objetos que están a tu alcance en algun punto del código

Scope global  Es todo aquello que definimos fuera del cuerpo de una función, es decir sino estamos dentro del bloque de una función, estamos en el scope global

Por ejemplo, al iniciar el script y declarar una variable donde claramente no hay una función, estoy asignando dicha variable al scope global

let nombre = "Jota"; 

Acá vemos que declaro una variable pero por fuera de una funci´´on, acá estoy en el scope global, al estar disponible en el alcance global, está disponible en cualquier momento

let nombre ="Jota";

function decir_hola(){
	console.log("Hola " + nombre);
}

decir_hola();

Principio del menor acceso -> crear por secciones, limitar a bloques, no todo en uno mismo.

local scope -> Hablamos de multiples de ellos, pueden haber muchos de ellos, como se define? cuando defines una función, al definir una función, todo lo que se 
encuentre dentro del bloque que se está ejecutando se asigna al scope local de la función misma. Si tenemos 10 funciones, tenemos 10 scope locales, las funciones crean su
propio scope local, y nacen y mueren allí mismo, se cierran ahí a diferencia del global scope que lo podemos utilizar luego.

let nombre ="Jota";

function decir_hola(){
	// Scope local
	console.log("Hola " + nombre);
}
function cuadrado(){
	// Scope local 2
}

decir_hola();

Otro ejemplo donde se ve tanto lo del scopo global y el local, la variable nombre sólo es modificada en el scope local (abre y cierra allí), y posteriormente sigue
su valor normal.

let nombre ="Jota";
//Scope global

function switch_nombres(){
//Scope local	
	var nombre ="Marcos";
	console.log(nombre)
}

switch_nombres();
console.log(nombre);

En este caso vemos como 