Operadores de comparaciólógicos -> Generalmente se acompañan de valores booleanos y nos permiten concatenar expresiones que en conjunto pueden ser verdaderas o falsas.
Los operadores son

&& and
|| or
¡ negación not

Ejemplos de &&
Ambas expresiones a la izquierda y a la derecha deben ser verdaderas para que de resultado true

24 == 24 && "hola" == "hola"
true

24 == 24 && 13 === "13"
false

Ejemplo de ||
Requiere por lo menos que un miembro de la expresión de verdadero para que el resultado sea true
El operador or, una vez encuentra un verdadero, ya no evalua el resto de la expresión ya que sería irrelevante

24 == 24 || 13 === "13"
true

24 == 24 || 10 === asasdada
true

Ejemplo de ! not
Su función es negar la expresión, es decir convertir los verdaderos en falsos y los falsos en verdaderos
!true;
false

!false;
true

!(24 === 24) || 10 == asassas
Error

!(24 === 24) || 10 == 10
true
