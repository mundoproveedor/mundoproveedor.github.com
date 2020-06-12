Ciclos -> Los ciclos en programación nos ayudan a ejecutar un bloque de código muchas veces, es decir a repetir lo mismo y una otra vez, programar implica en varias veces encontrar patrones, quiere decir
hallar una relación entre números para encontrar una fomula, o un mismo paso que se repite y cambia ligeramente.
Los ejercicios más fáciles es donde la repetición es más obvia, ejemplo imprime los números del 1 al 10.

Ciclo for

1. Instrucción que se ejecuta antes de iniciar el ciclo, usualmente sirve para declarar las variables, por ejemplo iniciar una variable en 0.
2. Una segunda instrucción con la que definimos como se terminará el ciclo, generalmente una booleana, mientras sea positiva el ciclo sigue.
3. Instrucción que se ejecuta despues de cada iteracción(repetición), ejemplo incrementar el valor de cada variable con la que iniciamos ciclo.

Imprime los números del 1 al 10

for(let i = 1; i <= 10; i++){
	console.log(i);
}

Imprime los números del 1 al 10, sólo que ya no dejamos i++

for(let i = 1; i <= 10; i= i+1){
	console.log(i);
}

Existen palabras reservadas como por ejemplo break, en este caso al llegar hasta 5 rompe el ciclo y lo termina

for(let i = 1; i <= 10; i= i+1){
	if(i>=5) break;
	console.log(i);
}

Otra palabra reservada es continue, acá termina la iteracción actual para que pase a la siguiente, en este caso solo me imprimiría los impares.

for(let i = 1; i <= 10; i= i+1){
	if(i%2==0) continue;
	console.log(i);
}

Ciclo while
while(<expresión-booleana>){
bloque de código
}

En este ejemplo muestra los números hasta 11, acá mientras la expresión booleana sea verdadera imprime la variable
let i=1;
while(i<=10){
	i++;
	console.log(i);	
}

La diferencia entre el ciclo for y el ciclo while, está en que for está diseñado para repetir un bloque un número definido de veces, siendo que en el while las instrucciones
se repiten mientras la expresión booleana evalúe verdadero.

Ciclo do while
Funciona similar al ciclo while, pero separa las instrucciones del bloque en dos momentos diferentes.

do{ 
    i++;
	console.log(i);	
}while(i<=10)