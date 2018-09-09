
function Persona(nombre,apellido,edad,pais){
	this.nombre = nombre;
	this.apellido=apellido;
	this.edad = edad;
	this.pais=pais;
	this.nombreCompleto = function(){
		return this.nombre +" "+ this.apellido +"("+this.edad+")"; 
	}
	this.imprimirPais = function(){
		return this.pais;
	}

}

var juan = new Persona("carlos","andres",30,"colombia");


console.log(juan.imprimirPais());
console.log(juan.nombreCompleto());