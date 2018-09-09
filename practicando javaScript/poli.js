



function determinaDato(a){

	if(a===undefined){
		console.log(" A no se que hacer");
	}

	if( typeof a === "number"){
		console.log(" a es un numero , y peduo hacer una operacion");
	}

	if(typeof a === "string"){
		console.log("A es un texto ");

	}

	if (typeof a === "object"){
		console.log("a es una objeo")

		if(a instanceof Number) {
			console.log("A es un objeto numerico");
		}
	}



}


var b = new Number(3);
//console.log(b);

//determinaDato(b);

//Cuidado con las funciones y su contexto


function crearFunciones(){

	var arr=[];
	var numero = 1;

	for (var numero= 1 ; numero <=5;numero++){
		arr.push(

		(function(numero){

			return function(){
		         console.log(numero);
	          }


		}) (numero)

		);

	}

	

	return arr;


}

/*var funciones = crearFunciones();

for(var i=0; i<=funciones.length-1;i++){

	funciones[i]();
}*/

//OBJETO NUMBER

var a = 10.234343;
console.log(a);

console.log(a.toPrecision(2));

a = 10;



console.log(a);

var b = new Number("20");
console.log(b);
console.log(b.valueOf());


























