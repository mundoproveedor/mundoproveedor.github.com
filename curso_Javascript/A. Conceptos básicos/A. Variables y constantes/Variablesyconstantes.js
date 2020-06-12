Variable -> es una dirección en memoria, a la cual accedes utilizando un identificador (un nombre), la caracteristica que distingue a las variables es su naturaleza para cambiar
esto quiere decir que a un espacio en la memoria le podemos reasignar un valor mientras el programa se ejecuta, las variables son dinamicas y requieren calculos mientras el 
programa se está ejecutando para reasignar espacio en la memoria

La sintaxis, se pueden declarar utilizando 
let nombre = "Javier";
var apellido = "Molina";

los identificadores de una variable tienen que seguir algunas reglas, los indicadores pueden iniciar con un caracter del signo $, _, o cualquier letra (sea minuscula o mayuscula),
luego podemos incluir numeros como parte del identificador
$nombre, _nombre, nombre

Constantes -> también son una dirección en memoria y también se acceden con un identificador (nombre), sin embargo se diferencia de las variables en que el valor no puede
ser reasignado, una vez que le diste un valor a un espacio en memoria este no va a cambiar, su ventaja es que el programa siempre conoce cuanto espacio necesita para almacenar
el dato, porque de antemano sabe que eso no va a cambiar

La sintaxis para las constantes se utilizan así:

const Pi =3.1416;