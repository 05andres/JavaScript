
var nombre="Juan carlos";
var persona ={
	nombre:"Maria",
	apellido :"Dubon",
	imprimirNombre:function(){
		console.log(this.nombre + " " + this.apellido);
	},
	direccion:{
		pais:"Colombia",
		obtenerPais:function(){
			var self = this;
			
			var nuevaDireccion = function(){
				console.log(self);
				console.log("La direccion es en "+ self.pais);
			}
			nuevaDireccion();
		}
	}
};

persona.imprimirNombre();
persona.direccion.obtenerPais();

