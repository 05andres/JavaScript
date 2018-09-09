

function ontenerAleatorio(){
	return Math.random();
}

function obtenerNombre(){
	return "juan";
}

function booleano(){
	if(ontenerAleatorio()>0.5){
		return true;
	}else{
		return false;
	}
	
}

if( booleano()){
	console.log("es mayor a 0.5");
}else{
	console.log("es menor a 0.5 ");
}

function crearPersona(nombre,apellido){

	return{
		nombre : nombre,
		apellido:apellido
	};
}

var persona = crearPersona("andres ","lopez");


function creaFuncion(){
	return function(nombre){
		console.log("me creo " + nombre);
		return function(){
			console.log("segunda funcion");
		}
	}
}

var nuevaFuncion = creaFuncion();
var segundaFuncion = nuevaFuncion(persona.nombre);

segundaFuncion();
