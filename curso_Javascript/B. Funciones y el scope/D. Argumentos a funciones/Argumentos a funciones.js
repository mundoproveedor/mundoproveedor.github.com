

function mayor_de_edad(edad){
	if (edad >= 18){
		var resultado = "Eres mayor de edad";
	} else {
		var resultado = "Eres menor de edad";
	}
console.log(resultado);		
}
mayor_de_edad();

Aunque la variable fue declarada dentro del bloque de código de una condición, también le pertenece al scope local de la función, por lo cual la podemos utilizar por fuera
ya que le pertenece a la función (resultado)

Diferente es si utilizamos let, acá este ya no existe fuera de la condición, simplemente porque usamos el cambio de var a let, eso los diferencia.

En cuanto let y const tienen alcanza el bloque de código más próximo, en cambio var, tiene alcanza dentro de la función más próxima.

En palabras practicas, si declaras una variable con let o const dentro de un ciclo o condición, esta variable solo estará disponible dentro del bloque de estas
estructuras (ciclo o condición), es decir tocaria declararlas previamente para poder utilizarlas ahí mismo

function mayor_de_edad(edad){
	let resultado;
	if (edad >= 18){
		resultado = "Eres mayor de edad";
	} else {
		resultado = "Eres menor de edad";
	}
console.log(resultado);		
}
mayor_de_edad();

// Cuando utilizar CONST
Cuando quiero declarar una constante

// Cuando utilizar VAR
Si quiero que la variable que estoy declarando se añada al scope global o al scope local de la función, es decir si por alguna razón necesito que la variable
que estoy declarando dentro de una condición o dentro de un ciclo sea añadida al scope local y la tenga disponible dentro de la función en esos casos uso var

// Cuando usar LET
Para todo lo demás es recomendable usar let