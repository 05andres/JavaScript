

var objetoSJ ={
	nombre:"andres",
	edad:30,
	imprimir : function(){
		console.log(this.nombre,this.edad);

	}
};

console.log("obto letera" , objetoSJ);

var jsonString = JSON.stringify(objetoSJ);
console.log(jsonString);



var objetoDesdeJson = JSON.parse( jsonString);
console.log(objetoDesdeJson);
console.log(objetoDesdeJson.nombre);
console.log(objetoDesdeJson.edad);



















