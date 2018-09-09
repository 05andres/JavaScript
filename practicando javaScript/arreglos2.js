var arguments=20;

function miFuntion(a,b,c,d){
	if(arguments.length!= 4 ){
		console.error("la funcion necesita 4 parametros");
		alert("la funcion necesita 4 parametros");
		return;
	}else{
		console.log(a+b+c+d);

	}

	
	

}

//miFuntion(10,20,30,40,50,50);

//sobre carga operadores:

function crearProducto(nombre,precio){
	nombre =nombre || "sin nombre";
	precio = precio || 0;
	console.log("producto: " , nombre, "precio :", precio);

}

function crearProducto100(nombre){
	crearProducto(nombre,100);
}

function crearProductoCamisa(precio){
	crearProducto("camisa",precio);

}

crearProducto("Lapiz");
crearProducto100("corrector");
crearProductoCamisa(75);


















