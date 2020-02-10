// DOM
/*
console.log("Hola desde un archivo externo de JavaScript");

let tabla = document.querySelector(".table");

console.log(tabla); 


let links = document.querySelectorAll("a");

links.forEach(function(link){
	console.log(link); 	
});
*/

let celdas = document.querySelectorAll("td");

celdas.forEach(function(td){
	td.addEventListener('click',function(){
		console.log(this);
	}); 	
});

//Obtener los elementos de la clase .close

let links = document.querySelectorAll(".close");

//Recorrerlos

links.forEach(function(link){
	//Agregar un evento click a cada uno de ellos
	/*link.addEventListener("click",function(){
		console.log("=)");
	}) */
	link.addEventListener("click",function(ev){
		ev.preventDefault();


/*let iconos = document.querySelectorAll("i");
iconos.forEach(function(icono){
	icono.classList.remove("fa-star");
	icono.classList.add("fa-star");
})
*/

//Obtener elemento
	let content = document.querySelector('.content');

//Quitarle las clases de animación que ya tiene
	content.classList.remove("fadeInDown");
	content.classList.remove("animated");

//Agregar clasese para animar su salida fadeOutUp
	content.classList.add("fadeOutUp");
	content.classList.add("animated");

	setTimeout(function(){
		location.href = "/boletines";
	},1000);

	return false;
	})
}) 


