

Los siguientes, son una serie de ejercicios para que practiques los conocimientos adquiridos después del bloque de conceptos básicos.

Tomando como entrada un número entero, imprimir si es par o impar.

Recibir dos números usando prompt y sumarlos, restarlos, dividirlos y multiplicarlos

Imprimir la sucesión fibonacci el número de veces que indicó el usuario

Programar el juego del "Número Mágico" en el que se define un número y el usuario trata de adivinarlo, si el número que ingresó el usuario es menor, 
imprimir la pista "El número mágico es mayor", si el número que ingresó el usuario es mayor, imprimir la pista "El número mágico es menor".

//PRIMER EJERCICIO PAR E IMPAR

numero = prompt("Digita un número para conocer si es par o impar.");
if (numero %2 == 0){
console.log("par");
}else{
console.log("impar")
}

//SEGUNDO EJERCICIO OPERACIONES
	//INGRESO DE VARIABLES POR PARTE DEL USUARIO MEDIENTE EL PROMPT
 let numero1 = parseInt(prompt("Introduzca primer numero:"));
 let numero2 =  parseInt(prompt("Introduzca segundo numero:"));
 let resultado;

 resultado1 = (numero1 + numero2); // OPERACIONES BASICAS DE SUMAS
 resultado2 = (numero1 - numero2); // RESTA
 resultado3 = (numero1 / numero2); // DIVISION
 resultado4 = (numero1 * numero2); // MULTIPLICACION  
  
 	// SE IMPRIMEN LOS RESULTADOS
 console.log("El resultado de la suma es:", +resultado1); 
 console.log("El resultado de la resta es:", +resultado2); 
 console.log("El resultado de la divicion es:", +resultado3); 
 console.log("El resultado de la multiplicacion es:", +resultado4); 

//TERCER EJERCICIO FIBONACCI
	//SE DECLARA LAS VARIABLES CORRESPONDIENTES
let n1 = 0;  
let n2 = 1;
let r= 0;
let cantidadusuario =  parseInt(prompt("Introduzca Cantidad de veces:"));;

for(let n=0;n<1000000 ;n++){ //FORMULA CON CICLO HASTA 1000000 PARA QUE EL USUARIO DECIDA LA CANTIDAD QUE SE REALIZARA EL CICLO FOR
if (n >= cantidadusuario) break; // AQUI SE CREA UN BREAK PARA QUE EL CICLO NO SEA INFINITO
r = n1+n2
n1 = n2
n2 = r
console.log(r);
}


// CUARTO EJERCICIO

let max = 100; //NUMERO MAXIMO QUE SE VA A GENERAR
let min = 1; // NUMERO MINIMO QUE SE VA A GENERAR
let numerom = Math.random()*(max-min) + min; // ECUACION QUE GENERA UN NUMERO ENTRE EL NUMERO MAXIMO 
numerom = parseInt(numerom); // LA FUNCION parseInt RECIBE Y CONVIERTE EN UN NUMERO ENTERO,

while(true){ //EL WHILE TRUE VA A PERMITIR QUE SE EJECUTE TODO EL CODIGO HASTA QUE EXISTA UN BREAK
      let usuario = prompt("COLOCA UN NUMERO PARA ADIVINAR EL NUMERO MAGICO"); // EL USUARIO VA A CLOCAR EL NUMERO Y SE COMPARA CON EL NUMERO MAGICO.

if(usuario == numerom){ 
  alert("HAS GANADO");
    break;//Y TERMINA EL PROGRAMA
}
else if(usuario == 0){// SI EL NUMERO DEL usuario ES IGUAL A 0 ENTONCES EL PROGRAMA ENTENDERA QUE EL usuario NO QUIERE JUGAR MAS Y TERMINARA EL PROGRAMA
  break; // CON UN BREAK;"
}
else if(usuario < numerom){
  // SI EL USUARIO COLOCA UN NUMERO MENOR QUE EL NUMEROM, ENTONCES EL PROGRAMA LE AVISARA CON UNA ALERTA Y PERMITIRA QUE EL USUARIO VUELVA A COLOCAR EL NUMERO HASTA QUE LO ADIVINE GRACIAS AL WHILE(TRUE)
  alert("EL NUMERO ES MENOR QUE EL NUMERO MAGICO, VUELVE A INTENTARLO" );
}
else if(usuario > numerom){
  
  // SI EL USUARIO COLOCA UN NUMERO MAYOR QUE EL NUMEROM, ENTONCES EL PROGRAMA LE AVISARA 
  alert("EL NUMERO ES MAYOR QUE EL NUMERO MAGICO, VUELVE A INTENTARLO");
}

} // AQUI CIERRA EL WHILE
