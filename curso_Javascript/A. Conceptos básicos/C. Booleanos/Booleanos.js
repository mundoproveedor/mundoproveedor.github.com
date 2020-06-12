Booleanos -> Valores en los que solo nos importe un si o un no, para eso existe un valor que puede ser true or false (verdadero o falso), muy utiles en ciclos o condiciones
muy utiles en las configuraciones de usuarios o de enlistar una bandera

Ejemplo podriamos tener un programa con notificaciones donde quisieramos saber si verdadero o si falso

let notificacionesActivas = true;
let recibirCorreos = false;
let activoEnChat = true;

Para conocer el valor booleano de un elemento podemos:

let booleano = new Boolean(1);
console.log(booleano.toString());

Acá me dara como resultado true

let booleano = new Boolean(0);
console.log(booleano.toString());

Acá me dara como resultado false

let booleano = new Boolean(""); /*la cadena vacia*/
console.log(booleano.toString());

Acá me dara como resultado false

let booleano = new Boolean("XxXxX"); /*cualquier cadena-string que no sea vacia*/
console.log(booleano.toString());

Acá me dara como resultado true

let booleano = new Boolean(true); /*la palabra true*/
console.log(booleano.toString());

Acá me dara como resultado true

let booleano = new Boolean(false); /*la palabra false*/
console.log(booleano.toString());

Acá me dara como resultado false


Los valores cuyo versión booleana es falsa son:

undefined, NaN, null, 0, .0, "", false

Estos datos son muy utilies sobre todo a la hora de hacer comparaciones y operadores logicos