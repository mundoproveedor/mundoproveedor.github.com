Operadores de comparación -> se utilizan al querer evaluar si dos valores son iguales o son distintos

ejemplo

let edad = 24;

/*Comparador de igualdad*/
/*Este operador ==, ignora los tipos de datos que se estan comparando*/
edad == 24;
true

edad == 20;
false

24 == "24";
true

/*Comparador de desigualdad o diferente que*/

edad != 18;
true

edad != 24;
false

/*Comparador mayor que y mayor o igual que*/

edad > 24;
false

edad >= 24
true

/*Comparador menor que o menor o igual que*/

edad < 28;
true

edad <= 28;
true

/*Comparador igualdad considerando tipo de dato de comparación*/
/*Compara no solo el valor sino que el tipo de dato sea igual*/
24 === "24";
false

24 === 24;
true

/*Comparador diferente que con = extra para comparar que sean diferentes en valor o en tipo*/

24 !== "24";
true

24 !== 24;
false