Undefined -> indica que a una variable no se le ha asignado un valor o no se ha declarado, si utilizamos esta palabra typeof nos retorna el tipo de dato de la variable.

typeof abasdas
"Undefined"

typeof 2
"number"

Ahora si declaramos una variable pero no asignamos valor nos sigue retornando Undefined

let numero;
typeof numero
"Undefined"


null -> Hablamos de un objeto especial en javascript que indica la ausencia de valor, a diferencia de undefined es un valor asignable, no un tipo de dato.

ejemplo

numero=null;
typeof numero
"object"

null==undefined
true

null===undefined
false

NaN -> No es un número (not a number)

ejemplo
"asadsd"*3
NaN

Infinity -> es el valor que representa en Javascript el infinito por ejemplo dividir entre 0, no nos dara error sino Infinity

100/0
Infinity